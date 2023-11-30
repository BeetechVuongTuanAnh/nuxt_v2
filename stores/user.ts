import { defineStore } from 'pinia';

interface State {
    isMenuOverlay: boolean
    isLoading: boolean
    cart: any[]
    checkout: any[]
}

export const useUserStore = defineStore('user', {
    state: (): State => {
        return {
            isMenuOverlay: true,
            isLoading: false,
            cart: [],
            checkout: [],
        }
    },
})