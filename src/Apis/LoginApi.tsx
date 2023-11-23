import axios from "axios";

export const handleLoginApi = async (id:string, pw:string) => {

   await axios({
        method: 'POST',
        url: 'http://localhost:8080/login',
        data: { id, pw },
        headers: { 'Content-Type': 'application/json' }
    }).then((res) => {
        sessionStorage.setItem("id", id);
        alert('로그인 완료!');
    }).catch((error) => {
        if(error.response.status === 400){
            alert("아이디와 비밀번호를 입력해주세요");
        }else{
            alert("로그인 실패");
        }
    });
}