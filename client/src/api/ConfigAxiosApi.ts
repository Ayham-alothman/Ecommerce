import axios from 'axios';
import Cookies from 'js-cookie';


axios.defaults.baseURL=`http://localhost:5000/`;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

if(Cookies.get('token')&&String(Cookies.get('token')).length>10){
    axios.defaults.headers.common['Authorization'] = `${Cookies.get('token')}`;
}





export default axios;