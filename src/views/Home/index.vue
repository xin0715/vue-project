<script setup>
import HomeCategory from "./components/HomeCategory.vue";
import HomeBanner from "./components/HomeBanner.vue";
import HomePanel from "./components/HomePanel.vue";
// import HomeNew from "./components/HomeNew.vue";
// import HomeHot from "./components/HomeHot.vue";
// import homeProduct from "./components/HomeProduct.vue";

</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <!-- <HomeNew /> -->
  <!-- <HomeHot /> -->
  <!-- <homeProduct /> -->
  <HomePanel title="新鮮好物" sub-title="新鮮好物 好多商品">
    <div>
      新鮮好物插槽
    </div>
  </HomePanel>
  <HomePanel title="人氣推薦" sub-title="人氣推薦 好多商品">
    <div>
      人氣推薦插槽
    </div>
  </HomePanel>
</template>