import {createSlice} from "@reduxjs/toolkit";
import db from "../Database";


const courses = db.courses;

const initialState = {
    courses: courses,
    course: {
        _id: "0",
        name: "New Course",
        number: "RS4550",
        startDate: "Date",
        endDate: "Date",
        image: "clown.jpg",
        color:  "#f542e3",
        code: "36915",
        label: "SEC 07 Spring 2024 [BOS-2-TR]",
        description: "202430_2 Spring 2024 Semester Full Term Grad"
    },
};

// Function to generate random courseId
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
export function getRandomInt(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        addCourse: (state, action) => {
            const newId = "LI" + getRandomInt(1010, 9999).toString();
            state.courses = [
                {...action.payload, _id: newId },
                ...state.courses,
            ];
        },
        deleteCourse: (state, action) => {
            state.courses = state.courses.filter(
                (course: { _id: string; }) => course._id !== action.payload
            );
        },
        updateCourse: (state, action) => {
            state.courses = state.courses.map((course: { _id: string; }) => {
                if (course._id === action.payload._id) {
                    return action.payload;
                } else {
                    return course;
                }
            });
        },
        setCourse: (state, action) => {
            state.course = action.payload;
        },
    },
});

export const {addCourse, deleteCourse, updateCourse, setCourse} = coursesSlice.actions;
export default coursesSlice.reducer;