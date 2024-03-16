import {configureStore} from "@reduxjs/toolkit";
import coursesReducer from "../Courses/coursesReducer";
import modulesReducer from "../Courses/Modules/modulesReducer";
export interface KanbasState {
    coursesReducer: {
        courses: any[];
        course: any;
    };

    modulesReducer: {
        modules: any[];
        module: any;
    };
}
const store = configureStore({
    reducer: {
        coursesReducer,
        modulesReducer
    }
});

export default store;