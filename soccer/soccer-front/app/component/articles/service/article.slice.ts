
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from './article.init';
import {deleteArticleById, fetchAllArticles, findArticleById ,findCountArticle,modifyArticleById, saveArticle} from './article.service';

const articleThunks = [fetchAllArticles]

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}


export const articleSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const { pending, rejected } = status;

        builder
            .addCase(fetchAllArticles.fulfilled, (state: any, { payload }: any) => { state.array = payload })
            .addCase(findArticleById.fulfilled, (state: any, { payload }: any) => { state.json = payload })
            .addCase(findCountArticle.fulfilled, (state: any, { payload }: any) => { state.count = payload })
            .addCase(modifyArticleById.fulfilled, (state: any, { payload }: any) => { state.array = payload })
            .addCase(deleteArticleById.fulfilled, (state: any, { payload }: any) => { state.json = payload }) 
            .addCase(saveArticle.fulfilled, (state: any, { payload }: any) => { state.message = payload }) 
    }
})


export const getAllArticles = (state: any) => state.article.array;
export const getFindArticle = (state: any) => state.article.json;
export const getCountArticle = (state:any) => state.article.count;
export const getSaveArticle = (state:any) => state.article.message;

export const { } = articleSlice.actions

export default articleSlice.reducer;