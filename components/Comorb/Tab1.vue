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
      "<p class='content-p'>這是最常見的圓禿形式。頭皮上出現單一或多個圓形、非疤痕性禿髮斑塊，受影響部位的皮膚表面光滑、無明顯色差。</br>部分患者在掉髮區會出現輕微搔癢、刺痛或頭皮遲鈍感，代表疾病仍處於活動期。若持續超過半年未改善，則被歸類為慢性圓禿。</p>",
    img: "comorb-tab-1.svg",
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
