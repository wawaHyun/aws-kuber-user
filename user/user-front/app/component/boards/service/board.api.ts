import { instance } from '@/app/component/common/configs/axios-config'

export const AllBoardsAPI = async (page: number) => {
    try {
        const response = await instance.get('/api/boards/list', {
            params: { page, limit: 10 } //1page 당 10 게시글
        });
        console.log("response " + response)
        return response.data
    } catch (error) {
        console.log(error + " fetchAllBoardsAPI EERR!!!")
        return error
    }
}

export const findBoardsAPI = async (id: number) => {
    try {
        const response = await instance.get('/api/boards/detail', {
            params: { id }
        });
        console.log("response ", response)
        return response.data
    } catch (error) {
        console.log(error, " findBoardsAPI EERR!!!")
        return error
    }

}


export const countBoardsAPI = async () => {
    try {
        const response = await instance.get('/api/boards/count');
        console.log("response ", response)
        return response.data
    } catch (error) {
        console.log(error, " findBoardsAPI EERR!!!")
        return error
    }

}


export const modifyBoardsAPI = async (params: IBoard) => {
    try {
        const response = await instance.put('/api/boards/modify',params);
        console.log("response ", response.data)
        return response.data
    } catch (error) {
        console.log(error, " modifyBoardsAPI EERR!!!")
        return error
    }

}


export const deleteBoardsAPI = async (id: number) => {
    try {
        const response = await instance.delete('/api/boards/dalete', {
            params: { id }
        });
        console.log("response ", response)
        return response.data
    } catch (error) {
        console.log(error, " deleteBoardsAPI EERR!!!")
        return error
    }

}
