import axios from "axios";

export const handleSignUp = async (id:string , pw:string, name:string) => {

    await axios({
        method: 'POST',
        url: 'http://localhost:8080/signup',
        data: { id, pw, name },
        headers: { 'Contsent-Type': 'application/json' },
    }).then((res) => {
        alert(res.data)
    }).catch((error) => {
        console.log(error.response.data);
        alert(error.response.data);
    });
}