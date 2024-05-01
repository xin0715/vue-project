//  圖片延遲載入功能
import ImageView from "./ImageView/index.vue";
import Sku from "./Xtxsku/index.vue";
export const componentPlugin = {
    install(app) {
        // 懒加载指令逻辑
        app.component('XtxImageView', ImageView)
        app.component('XtxSku', Sku)
    }
}