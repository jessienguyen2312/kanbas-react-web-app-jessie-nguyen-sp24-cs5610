import {createSlice} from "@reduxjs/toolkit";
import db from "../../Database";
import {getRandomInt} from "../coursesReducer";

const assignments = db.assignments;

const initialState = {
    assignments: assignments,
    assignment: {
        _id: "0",
        title: "New Assignment",
        description: "New Description",
        points: 100,
        due: new Date(),
        available: new Date(),
        until: new Date()
    },
};

const assignmentsSlice = createSlice({
    name: "assignment",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            const newAssignmentId = "A" + getRandomInt(600, 999).toString();
            state.assignments = [
                {...action.payload, _id: newAssignmentId},
                ...state.assignments,
            ];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },
        setAssignment: (state, action) => {
            state.assignment = action.payload;
        },
    },
});

export const { addAssignment, deleteAssignment, updateAssignment, setAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;