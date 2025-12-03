<script setup>
// 動態圖片載入
const getImageUrl = (name) => {
  const assets = import.meta.glob("~/assets/img/*", {
    eager: true,
    import: "default",
  });
  return assets[`/assets/img/${name}`];
};

const tabContents = [
  {
    title:
      "<p class='content-p'>全身禿為圓禿中最嚴重的型態。</br>除了頭皮毛髮外，眉毛、睫毛、鬍鬚、腋毛與體毛等全身毛髮皆可能脫落。約有15%的慢性圓禿患者會進展為此型。此類病程往往持續時間長、復原困難，需長期醫療追蹤與治療。</p>",
    img: "comorb-tab-3.svg",
  },
];
</script>

<template lang="pug">
div
  section(v-for="(tab ,index) in tabContents" :key="index")
    div(v-html="tab.title")
    img.mx-auto.mt-10(:src="getImageUrl(tab.img)" class="max-w-xl")
</template>

<style scoped lang="sass"></style>
