'use client'

import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { API } from "@/app/component/common/enums/API"
import AxiosConfig from "@/app/component/common/configs/axios-config"
import { PG } from "@/app/component/common/enums/PG"
import { NextPage } from "next"

const Login: NextPage = () => {

    const router = useRouter();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (e: any) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e: any) => {
        setPassword(e.target.value)
    }


    const handleSubmit = () => {
        axios.post(`${API.SERVER}/api/users/login`, { username, password }, AxiosConfig())
            .then(res => {
                alert(res.data)
                const messenge = res.data;
                router.push(`${PG.BOARD}/list`);
            });
    }


    return (<>
        <h1>개인 page!!!!!!!!</h1>
        <h2>로그인 하세요</h2>
        <h3>아이디를 입력하세요</h3>
        <input type="text" onChange={handleUsername} />
        <h3>비밀번호를 입력하세요</h3>
        <input type="text" onChange={handlePassword} /><br />
        <button onClick={handleSubmit}>전송</button>


    </>)
}

export default Login;