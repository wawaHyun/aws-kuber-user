import { instance } from "@/app/component/common/configs/axios-config"
import { IUser } from "../model/user.model"

export const fetchAllUsersAPI = async (page: number) => {
    try {
        const response = await instance.get('/api/users/list', {
            params: { page, limit: 10 } //1page 당 10 게시글
        })
        return response.data
    } catch (error) {
        console.log(error, " fetchAllUsersAPI EERR!!!")
        return error
    }
}

export const findUserByIdAPI = async (id: number) => {
    try {
        const response = await instance.get('/api/users/detail', {
            params: { id }
        })
        console.log("response ", response)
        return response.data
    } catch (error) {
        console.log(error, " findUserByIdAPI EERR!!!")
        return error
    }
}

export const countUsersAPI = async () => {
    try {
        const response = await instance.get('/api/users/count')
        console.log("count response ", response.data)
        return response.data
    } catch (error) {
        console.log(error, " countAllUsersAPI EERR!!!")
        return error
    }
}

export const modifyUserByIdAPI = async (params: IUser) => {
    try {
        const response = await instance.put('/api/users/modify', params)
        console.log("response ", JSON.stringify(response.data))
        return response.data
    } catch (error) {
        console.log(error, " modifyUserByIdAPI EERR!!!")
        return error
    }
}

export const deleteUserByIdAPI = async (props: IUser) => {
    try {
        const response = await instance.delete('/api/users/delete', {
            params: { props }
        })
        console.log("response ", response)
        return response.data
    } catch (error) {
        console.log(error, " deleteUserByIdAPI EERR!!!")
        return error
    }
}

export const loginUserAPI = async (props: any) => {
    try {
        const response = await instance.post('/api/users/login', props)
        console.log("response ", JSON.stringify(response.data))
        return response.data
    } catch (error) {
        console.log(error, " loginUserByIdAPI EERR!!!")
        return error
    }
}

export const joinUserAPI = async (props: any) => {
    try {
        const response = await instance.post('/api/users/save', props)
        console.log("response ", JSON.stringify(response.data.message))
        return response.data.message
    } catch (error) {
        console.log(error, " joinUserAPI EERR!!!")
        return error
    }
}
