import axios from "axios";

export const handleLoginApi = async (id:string, pw:string) => {

   await axios({
        method: 'POST',
        url: 'http://localhost:8080/login',
        data: { id, pw },
        headers: { 'Content-Type': 'application/json' }
    }).then((res) => {
        alert(res.data);
    }).catch((error) => {
        console.log(error.response.data);
        alert(error.response.data);
    });
}