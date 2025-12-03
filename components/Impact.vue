<script setup>
// 引用標題元件
import BubbleTitleH2 from "./ui/BubbleTitleH2.vue";
</script>

<template lang="pug">
//- 前言
div#impact.bg-blue-100(class="imp_event" data-title="2025obesity" data-label="imp_section-2025obesity-home")
  .container

    //- 引用標題元件
    BubbleTitleH2(text="圓禿不是只影響毛髮及外觀，還影響了身心健康！")

    p.content-p 圓禿病程雖因人而異，若落髮範圍超過五成，通常難以自行恢復，且圓禿容易反覆發作，若嚴重落髮復發時，落髮範圍有可能會比前一次更大，患者常會飽受身心壓力之苦。
    p.content-p 對於生理的影響，除了掉髮範圍可從頭皮的單一處圓形到全身毛髮，指甲也容易出現病變，表面易凹凸不平、變薄、斷裂、出現白點。

    .grid.my-10(class="grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10")
      .content-sm
        img.block(src="../assets/img/impact-img-1.svg", alt="icon", class="w-36 mx-auto mt-2 mb-2")
        p.text-center 汗水、水或灰塵較
          br
          | 容易造成眼睛刺激
      .content-sm
        img.block(src="../assets/img/impact-img-2.svg", alt="icon", class="w-24 mx-auto mb-2 mt-3")
        p.text-center 頻繁流鼻水和打噴嚏
      .content-sm
        img.block(src="../assets/img/impact-img-3.svg", alt="icon", class="w-36 mx-auto")
        p.text-center 曬傷或對溫度敏感
      .content-sm
        img.block(src="../assets/img/impact-img-4.svg", alt="icon", class="w-14 mx-auto mt-2 mb-4")
        p.text-center 指甲脆弱或凹陷

    p.content-p 除了生理層面的脫髮困擾，圓禿對心理健康的影響也不容忽視。研究顯示，圓禿患者出現焦慮、憂鬱與自尊低落的比例明顯高於一般人。臨床觀察發現，圓禿屬於自體免疫疾病，當免疫系統錯把毛囊當成外來敵人而攻擊時，便會造成局部脫髮。心理壓力雖不是直接原因，卻可能透過影響免疫與荷爾蒙調節，成為誘發或惡化的因素之一。
    
    p.content-p 圓禿與憂鬱症、焦慮症之間存在雙向關聯，免疫失衡可能導致情緒困擾，而情緒困擾又可能進一步干擾免疫調節，使圓禿反覆發作。這種惡性循環，讓患者不僅面臨外觀的改變，更長期承受心理壓力與社會適應的挑戰。

    img.block.my-2(src="../assets/img/deep.svg", alt="icon")

    p.content-p 圓禿引起的心理壓力源自於「外觀改變被看見」的恐懼，頭髮是許多人自信與身份的象徵，當它突然消失，患者可能感到羞愧、孤立，甚至刻意避免社交，部分患者會因此出現睡眠障礙、緊張型頭痛、身體慢性疼痛等，圓禿引發的心理衝擊在青少年與女性患者中更為顯著。


    
</template>

<style scoped lang="sass">
@use '~/assets/sass/media' as *
@use '~/assets/sass/colors' as *
</style>
