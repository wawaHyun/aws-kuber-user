import { createAsyncThunk } from "@reduxjs/toolkit";
import { AllBoardsAPI, countBoardsAPI, deleteBoardsAPI, findBoardsAPI, modifyBoardsAPI } from "./board.api";

export const fetchAllBoards: any = createAsyncThunk(
    'boards/fetchAllBoards',
    async (page: number) => {
        console.log('fetchAllBoards page : ' + page)
        const data: any = await AllBoardsAPI(1);
        return data
    }
)


export const findBoardById: any = createAsyncThunk(
    'boards/findBoardById',
    async (id: number) => {
        console.log('findBoardById page : ' + id)
        const data: any = await findBoardsAPI(id);

        return data
    }
)


export const findcountBoard: any = createAsyncThunk(
    'boards/findcountBoard',
    async () => {
        console.log('findcountBoard running check : ')
        const data: any = await countBoardsAPI();

        return data
    }
)


export const modifyBoardById: any = createAsyncThunk(
    'boards/modifyBoardById',
    async (props: IBoard) => {
        console.log('modifyBoardById page : ' + JSON.stringify(props))
        const data: any = await modifyBoardsAPI(props);

        return data
    }
)


export const deleteBoardById: any = createAsyncThunk(
    'boards/deleteBoardById',
    async (id: number) => {
        console.log('deleteBoardById page : ' + id)
        const data: any = await deleteBoardsAPI(id);

        return data
    }
)