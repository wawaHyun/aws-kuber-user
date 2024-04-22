import axios from "axios"
import { parseCookies } from 'nookies';

//고정 immutable
// export default function AxiosConfig() {
//     return {
//         headers: {
//             "Cache-Control": "no-cache",
//             "Content-Type": "application/json",
//             Authorization: `Bearer blah ~`,
//             "Access-Control-Allow-Origin": "*",
//         }
//     }
// }

const instance = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL })

//dynamic
instance.interceptors.request.use(
    (request) => {
        console.log('AXIOS-interceptors.requset : token 추출함.')
        const accessToken = parseCookies().accessToken;
        // "Cache-Control" : "no-cache" 기본적으로 no-cache라서 생략가능
        request.headers['Content-Type'] = "application/json"
        request.headers['Authorization'] = `Bearer ${accessToken}`
        return request
    },
    (error) => {
        console.log('AXIOS-interceptors.use error : ' + error)
        return Promise.reject(error)
    }
)
instance.interceptors.response.use(
    (response) => {
        if (response.status === 404) {
            console.log('AXIOS-interceptors.response : token 없어서 404 page')
        }
        return response
    }
)



export default instance