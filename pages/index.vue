<script setup>
import { onMounted } from "vue";
import Slide from "@/components/Slide/index.vue";
</script>

<template lang="pug">
div.overflow-x-hidden
  Navbar

  div
    //- 主視覺
    Kv

    //- 前言
    Intro

    //- 認識圓禿
    Comorb

    //- 誰會得圓禿
    Who

    //- 圓禿的影響
    Impact
    
    //- 治療與行動
    Care

    //- 就醫諮詢
    Consult

    //- 文章
    Slide

    //- FOOTER
    Footer


</template>
