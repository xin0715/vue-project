import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore('cart', () => {
    const cartlist = ref([])
    const addcart = (goods) => {
        const item = cartlist.value.find((item) => goods.skuId === item.skuId)
        if (item) {
            item.count++
        } else {
            cartlist.value.push(goods)
        }
    }
    return {
        cartlist,
        addcart
    }
}, {
    persist: true,
}

)