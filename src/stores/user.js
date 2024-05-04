import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from "@/apis/user";


export const useUserStore = defineStore('user', () => {
    const UserInfo = ref([]);
    const getUserInfo = async ({ account, password }) => {
        const res = await loginAPI({ account, password });
        UserInfo.value = res.result;
    };

    const clearUserInfo = () => {
        UserInfo.value = {}
    }
    return {
        UserInfo,
        getUserInfo,
        clearUserInfo
    }
},
    {
        persist: true,
    })
