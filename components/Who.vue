<script setup>
// 引用標題元件
import BubbleTitleH2 from "./ui/BubbleTitleH2.vue";
import BubbleTitleH4 from "./ui/BubbleTitleH4.vue";
</script>

<template lang="pug">
//- 前言
div#who.bg-blue-100(class="imp_event" data-title="2025obesity" data-label="imp_section-2025obesity-home")
  .container

    //- 引用標題元件
    BubbleTitleH2(text="誰會得圓禿？有多嚴重呢？")

    p.content-p 圓禿沒有特定的年齡或性別限制，任何人都有可能發生。研究顯示，大約 1.7% 至 2.1%的人一生中會經歷圓禿，其中六成以上在 30 歲以前就發病
      sup 4
      | ，尤其好發於 25 至 29 歲的青壯年
      sup 5
      | ，在亞洲甚至有高達八成以上患者在 40 歲前出現症狀。
      sup 6
    
    p.content-p.mt-8 若家族中有人患有圓禿或其他自體免疫疾病，如甲狀腺疾病、白斑、異位性皮膚炎，罹病的機率也會增加。其餘因感染、用藥、心理創傷或急性壓力等，都可能成為誘發或加劇圓禿。此外，研究也發現圓禿患者罹患焦慮、憂鬱與睡眠障礙的風險更高。
    
    p.content-p.mt-8 圓禿的嚴重程度從局部斑塊到全頭、甚至全身毛髮脫落不等，醫學上以頭皮落髮面積比例(SALT 指數)來評估
      sup 7
      | ：


    .grid.gap-14.mt-10.text-slate-600(class="text-[19px] sm:text-[22px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3")
      p
        img(src="../assets/img/who-img-1.svg", alt="alt", class="w-10/12 md:w-11/12 mx-auto mb-4")
        span 落髮面積小於 20%，多數可自行恢復或經治療改善。
      p
        img(src="../assets/img/who-img-2.svg", alt="alt", class="w-10/12 md:w-11/12 mx-auto mb-4")
        span 落髮面積介於 20% 到 50%，需配合藥物治療控制。
      p
        img(src="../assets/img/who-img-3.svg", alt="alt", class="w-10/12 md:w-11/12 mx-auto mb-4")
        span.tracking-tight 超過 50% 的頭皮毛髮脫落，部分會進展為頭髮全數脫落的「全頭禿」，甚至「全身禿」。

    p.content-p.mt-8 圓禿除了會帶來外觀的改變，許多患者同時也會出現焦慮、憂鬱或睡眠障礙，影響生活品質與自信心。圓禿的治療不僅是讓頭髮重新長回，更重要的是從免疫與心理兩個層面調整體質與壓力反應，恢復身心的平衡狀態。

    //- 引用標題元件 '單引號' 包裹 sup 標籤
    BubbleTitleH4(no='常見迷思二' text='圓禿只會發生在成人？')

    article.bg-blue-600.p-3.rounded-xl.relative
      .bg-white.p-6.relative
        img.w-40.absolute(src="/assets/img/dialog-img-1.svg", alt="dialog", class="left-1/2 -translate-x-1/2 -top-1")
        img.absolute.bottom-0(src="/assets/img/dialog-img-2.svg", alt="dialog" class="w-16 sm:w-20 -left-10 sm:-left-14")
        img.w-6.absolute.right-0(src="/assets/img/dialog-img-3.svg", alt="dialog", class="-bottom-[1px]")
        p.content-xs.mb-5.flex.items-center
          span.bg-blue-400.text-white.py-2.px-8.rounded-full.mr-4.shrink-0 真   相
          span 圓禿可能發生在各個年齡層，對青少年的影響更加顯著。

        p.content-xs 根據研究顯示，約有七成圓禿患者年齡
          span.text-orange-400 介於10至25歲間
          sup 8
          | ，換句話說，圓禿最常出現在
          span.text-orange-400 正值青春期的青少年族群
          | 。當患者越年輕時發病，受圓禿影響的時間越長，成年後仍會因免疫系統異常而反覆復發，長期受困於掉髮的焦慮與不安。

        p.content-xs.mt-5 圓禿不僅會導致頭髮稀疏，也可能影響眉毛、睫毛、體毛，讓外觀變化更為明顯。外貌上的落差，容易引發自卑與焦慮，對青少年而言可能會造成
          span.text-orange-400 拒絕學習、社交退縮、睡眠障礙等心理與行為問題
          sup 9
          | 。曾有患者是在幼兒園階段即出現圓禿，因為外貌遭同儕取笑或霸凌，嚴重拒絕上學，影響學習與身心發展。

       

</template>

<style scoped lang="sass">
@use '~/assets/sass/media' as *
@use '~/assets/sass/colors' as *
</style>
