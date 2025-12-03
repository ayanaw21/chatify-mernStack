import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useChatStore = create((get,set) => ({
	allContacts: [],
	chats: [],
	message: [],
    activeTab:"chats",
    selectedUser:null,
    isUsersLoading:false,
    isMessagesLoading:false,
    isSoundEnabled : localStorage.getItem("isSoundEnabled") === true,
    toggleSound :()=>{
        localStorage.setItem("isSoundEnabled",!get().isSoundEnabled())
        set({isSoundEnabled:!get().isSoundEnabled})
    },
    setActiveTab:(tab)=> set({activeTab:tab}),
    setSelectedUser:(selectedUser)=> set({selectedUser}),
    getAllContacts:async ()=>{
        set({isUsersLoading:true})
        try {
            const response = await axiosInstance.get("/message/contacts")    
            set({allContacts:response.data})
        } catch (error) {
            console.log("error")
            toast.error(error.response.message.data)
        }finally {
            set({isUsersLoading:false})
        }
    },
    getMyChatPartners:async ()=>{
        set({isUsersLoading:true})
        try {
            const response = await axiosInstance.get("/message/chat")    
            set({chats:response.data})
        } catch (error) {
            console.log("error")
            toast.error(error.response.message.data)
        }finally {
            set({isUsersLoading:false})
        }
    }
}));
