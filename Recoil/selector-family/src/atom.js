import axios from "axios";

import { atom, atomFamily, selectorFamily } from "recoil";
import { todo } from "./Todo";

export const TodoAtomFamily = atomFamily({
    key : 'TodoAtom',
    default : selectorFamily({
        key : 'TodoSelectorfamily',
        get : (id) => async({get}) => {
            await new Promise( r => (setTimeout(r,2000)))
            
            const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
            return res.data.todo
        }
    })
})