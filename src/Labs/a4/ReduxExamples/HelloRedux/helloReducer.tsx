import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    message: "Hello World :D I'm inside helloReducer",
};
const helloSlice = createSlice({
    name: "hello",
    initialState,
    reducers: {},
});
export default helloSlice.reducer;