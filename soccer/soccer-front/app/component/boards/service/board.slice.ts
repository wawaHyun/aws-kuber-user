
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from './board.init';
import { deleteBoardById, fetchAllBoards, findBoardById, findcountBoard, modifyBoardById, } from './board.service';

const boardThunks = [fetchAllBoards]

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}


export const boardSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const { pending, rejected } = status;

        console.log('------------------ conclusion ---------------')
        builder //해당되는 객체가 들어오면 그때만 만들어짐. swich case.
            .addCase(fetchAllBoards.fulfilled, (state: any, { payload }: any) => { state.array = payload }) //all list
            .addCase(findBoardById.fulfilled, (state: any, { payload }: any) => { state.json = payload })
            .addCase(findcountBoard.fulfilled, (state: any, { payload }: any) => { state.count = payload })
            .addCase(modifyBoardById.fulfilled, (state: any, { payload }: any) => { state.array = payload })
            .addCase(deleteBoardById.fulfilled, (state: any, { payload }: any) => { state.json = payload })
    }
})

// getter
export const getAllBoards = (state: any) => state.board.array;
export const getFindBoard = (state: any) =>state.board.json;
export const getCountBoard = (state: any) =>state.board.count;

export const { } = boardSlice.actions

export default boardSlice.reducer;
