import {configureStore} from "@reduxjs/toolkit";
import coursesReducer from "../Courses/coursesReducer";
export interface KanbasState {
    coursesReducer: {
        courses: any[];
        course: any;
    };
}
const store = configureStore({
    reducer: {
        coursesReducer
    }
});

export default store;