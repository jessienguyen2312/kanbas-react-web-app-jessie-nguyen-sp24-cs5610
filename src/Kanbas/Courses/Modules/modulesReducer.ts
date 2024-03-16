import {createSlice} from "@reduxjs/toolkit";
import db from "../../Database";
import {getRandomInt} from "../coursesReducer";

const modules = db.modules;

const initialState = {
    modules: modules,
    module: {
        name: "new module",
        description: "new description",
        lessons: [],
    },
};

const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        addModule: (state, action) => {
            const newModuleId = "M" + getRandomInt(200, 999).toString();
            state.modules = [
                {...action.payload, _id: newModuleId},
                ...state.modules,
            ];
        },
        deleteModule: (state, action) => {
            state.modules = state.modules.filter(
                (module) => module._id !== action.payload
            );
        },
        updateModule: (state, action) => {
            state.modules = state.modules.map((module) => {
                if (module._id === action.payload._id) {
                    return action.payload;
                }else{
                    return module;
                }
            });
        },
        setModule: (state, action) => {
            state.module = action.payload;
        },
    },
});

export const { addModule, deleteModule, updateModule, setModule } = modulesSlice.actions;
export default modulesSlice.reducer;