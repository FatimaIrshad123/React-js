import axios from "axios";
import { atom, selector } from "recoil";

export const notifications = atom({
    key: "networkAtom",
    default : selector({
        key : 'networkAtomSelector',
        get : async() => {
            await new Promise(r => (setTimeout(r,5000))) //sleeps for 5 sec
            const res = await axios.get('https://sum-server.100xdevs.com/notifications')
            return res.data
        } 
    })
    // default: {
    //     network: 0, 
    //     jobs: 0, 
    //     messaging: 0, 
    //     notifications: 0
    // }
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})