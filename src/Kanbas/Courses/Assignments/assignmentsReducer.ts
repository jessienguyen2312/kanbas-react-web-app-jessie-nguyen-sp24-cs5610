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
        due: new Date().toISOString().slice(0, 16),
        available: new Date().toISOString().slice(0, 16),
        until: new Date().toISOString().slice(0, 16)
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
        resetAssignment: (state) => {
            state.assignment = initialState.assignment;
        }
    },
});

export const { addAssignment, deleteAssignment, updateAssignment, setAssignment, resetAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;