const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const { MongoClient } = require('mongodb');

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(cors());
app.use(express.json());

let db;

const url = 'mongodb+srv://SangHyuk:qwer1234@sanghyuk.aupqaac.mongodb.net/?retryWrites=true&w=majority';

new MongoClient(url).connect().then((client) => {
    db = client.db('instagram');

    server.listen(8080, function () {
        console.log('서버가 http://localhost:8080 에서 실행 중입니다.');
    });

}).catch((err) => {
    console.log(err);
});

//회원가입
app.post('/signup', async (req, res) => {
    const { id, pw, name } = req.body;
    console.log(id,pw,name);

    // 정보 입력 안했을때
    if (!id || !pw || !name) {
        return res.status(400).json('필수 정보를 모두 입력하세요.');
    }

    // 이미 가입되어있는 아이디 확인 후 회원가입 처리
    try{
        const AlreadyUser = await db.collection('member').findOne({id});
        if(AlreadyUser){
            return res.status(409).json('이미 가입');
        }

        await db.collection('member').insertOne({id,pw,name});
        return res.status(200).json("성공");
    }catch(err){
        console.log(err);
        return res.status(500).json('실패');
    }
});

//로그인
app.post('/login', async (req, res) => {
    const { id, pw } = req.body;

    const user = await db.collection('member').findOne({ id, pw });

    if(!id || !pw){
        return res.status(400).json("정보를 모두 입력해주세요");
    }

    if (user) {
        res.status(200).json('good');
    } else {
        res.status(401).json({ message: '실패' });
    }
});

// 회원정보 출력
app.get('/user/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await db.collection('member').findOne({ id: userId });

        if (!user) {
            return res.status(404).json('사용자를 찾을 수 없습니다.');
        }

        const { id, name } = user;
        return res.status(200).json({ id, name });
    } catch (err) {
        console.log(err);
        return res.status(500).json('에러 발생');
    }
});

//채팅
io.on('connection', (socket) => {
    console.log("연결");

    socket.on('msg', (data) => {
        io.emit('msg', `${socket.id}`);
    })

    socket.on('chat message', (msg) => {
        io.emit('chat message', (msg));
        console.log(msg);
    });

    socket.on('disconnet', () => {
        io.emit(`${socket.id}님이 나갔습니다`);
        console.log("disconnect");
    });
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.use(express.static(path.join(__dirname, 'instagram/build')));
