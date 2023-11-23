import axios from "axios";

export const handleSignUp = async (id:string , pw:string, name:string) => {

    await axios({
        method: 'POST',
        url: 'http://localhost:8080/signup',
        data: { id, pw, name },
        headers: { 'Contsent-Type': 'application/json' },
    }).then((res) => {
        alert('회원가입 성공!');
    }).catch((error) => {
        if (error.response.status === 400) {
            alert('필수 정보를 모두 입력하세요.');
        } else {
            console.error(error);
            alert('다시 입력해주세요');
        }
    });
}