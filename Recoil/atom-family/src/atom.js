import { atom, atomFamily } from "recoil";
import { Todo } from "./Todo";

export const todoAtomFamily = atomFamily({
    key : 'todoAtomFamily',
    default : id => {
        return Todo.find(x => x.id === id)
    }
})

