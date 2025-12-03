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
      "<p class='content-p'>全頭禿是指圓禿進展至整個頭皮的毛髮全部脫落。</br>約有三成的慢性圓禿患者會發展成此型，常伴隨病程長、復發率高、治療反應差等特徵，被視為難治型圓禿。有時可見白髮較不易掉落，或病灶區頭髮逐漸變白。</p>",
    img: "comorb-tab-2.svg",
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
