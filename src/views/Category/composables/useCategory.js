import { getCategoryAPI } from '@/apis/category'
import { onMounted, ref } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

export function useCategory() {

    const categoryData = ref([])
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id)
        categoryData.value = res.result
    }
    onMounted(() => getCategory())

    //路由，改變數據連接重新載入
    onBeforeRouteUpdate((to) => {
        console.log('change');
        getCategory(to.params.id)
    })

    return {
        categoryData
    }
}