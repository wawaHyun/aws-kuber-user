import  instance  from '@/app/component/common/configs/axios-config'

export const AllArticlesAPI = async (page: number) => {
    try {
        const response = await instance().get('/api/articles/list', {
            params: { page, limit: 10 } //1page 당 10 게시글
        })
        return response.data
    } catch (error) {
        console.log(error + " AllArticlesAPI EERR!!!")
        return error
    }

}


export const findArticlesAPI = async (id: number) => {
    try {
        const response = await instance().get('/api/articles/detail', {
            params: { id }
        })
        console.log("response " + response)
        return response.data
    } catch (error) {
        console.log(error + " findArticlesAPI EERR!!!")
        return error
    }

}

export const countArticlesAPI = async () => {
    try {
        const response = await instance().get('/api/articles/count')
        console.log("count response " + response.data)
        return response.data
    } catch (error) {
        console.log(error + " countArticlesAPI EERR!!!")
        return error
    }

}

export const modifyArticlesAPI = async (props: IArticle) => {
    try {
        const response = await instance().put('/api/articles/modify',props)
        console.log("response " + JSON.stringify(response.data))
        return response.data
    } catch (error) {
        console.log(error + " modifyArticlesAPI EERR!!!")
        return error
    }

}


export const deleteArticlesAPI = async (id: number) => {
    try {
        const response = await instance().delete('/api/articles/delete', {
            params: { id }
        })
        return response.data
    } catch (error) {
        console.log(error + " deleteArticlesAPI EERR!!!")
        return error
    }

}

export const saveArticleAPI = async (props: any) => {
    try {
        const response = await instance().post('/api/articles/save', props)
        console.log("response ", JSON.stringify(response.data.message))
        return response.data.message
    } catch (error) {
        console.log(error, " saveArticleAPI EERR!!!")
        return error
    }
}

export const findByBoardIdAPI = async (id: number) => {
    try {
        const response = await instance().get('/api/articles/card', {
            params: { id }
        })
        return response.data
    } catch (error) {
        console.log(error + " findByBoardIdAPI EERR!!!")
        return error
    }

}