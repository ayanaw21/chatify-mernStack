import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useChatStore = create((set, get) => ({
	allContacts: [],
	chats: [],
	message: [],
	activeTab: "chats",
	selectedUser: null,
	isUsersLoading: false,
	isMessagesLoading: false,
	isSoundEnabled: false,

	 toggleSound: () => { // Add 'set' and 'get' as parameters
        const currentSoundState = get().isSoundEnabled; // Access the current state using get()
        localStorage.setItem("isSoundEnabled", !currentSoundState);
        set({ isSoundEnabled: !currentSoundState });
    },
	setActiveTab: (tab) => set({ activeTab: tab }),
	setSelectedUser: (selectedUser) => set({ selectedUser }),
	getAllContacts: async () => {
		set({ isUsersLoading: true });
		try {
			const response = await axiosInstance.get("/message/contacts");
			set({ allContacts: response.data });
		} catch (error) {
			console.log("error");
			toast.error(error.response.message.data);
		} finally {
			set({ isUsersLoading: false });
		}
	},
	getMyChatPartners: async () => {
		set({ isUsersLoading: true });
		try {
			const response = await axiosInstance.get("/message/chats");
			set({ chats: response.data });
		} catch (error) {
			console.log("error");
			toast.error(error.response.message.data);
		} finally {
			set({ isUsersLoading: false });
		}
	},
}));



