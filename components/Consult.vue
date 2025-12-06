<script setup>
// 引用標題元件
import BubbleTitleH2 from "./ui/BubbleTitleH2.vue";
import BubbleTitleH3 from "./ui/BubbleTitleH3.vue";
import BubbleTitleH4 from "./ui/BubbleTitleH4.vue";
</script>

<template lang="pug">
//- 就醫諮詢
div#consult.bg-amber-50(class="imp_event" data-title="alopeciaareata" data-label="imp_section-alopeciaareata-consult")
  .container

    //- 引用標題元件
    BubbleTitleH2(text='圓禿應及早發現與接受治療')

    p.content-p.mb-10 當你發現頭皮上突然出現一塊光滑的掉髮區時，別急著自行判斷或上網找偏方，第一步應該是盡快就醫。圓禿是自體免疫疾病，早期治療成功率高，越拖延越可能導致毛囊長期受損，增加復原困難。

    h4.flex.items-start.gs-fade
      img(src="../assets/img/consult-img-1.svg" alt="尋求專業協助" class="w-24 mr-8")
      p.content-sm 尋求專業協助：
        span.block 建議找皮膚科醫師，由專業醫師透過頭皮鏡或毛囊鏡檢查，確認是否為圓禿，並排除其他可能的掉髮原因，如脂漏性皮膚炎、黴菌感染或營養缺乏等。

    h4.flex.items-start.gs-fade.mt-10
      img(src="../assets/img/consult-img-2.svg" alt="討論治療選擇" class="w-24 mr-8")
      p.content-sm 討論治療選擇：
        span.block 圓禿治療方式多樣，依照掉髮範圍、病程長短與復發情況不同，醫師會選擇局部或口服類固醇治療、免疫抑制劑或標靶藥物，或輔助療法等協助改善症狀，患者也要記得與醫師充分討論治療目標、副作用與復發風險，不要自行停藥或更換療程。

    h4.flex.items-start.gs-fade.mt-10
      img(src="../assets/img/consult-img-3.svg" alt="留意心理狀況" class="w-24 mr-8")
      p.content-sm 討論治療選擇：
        span.block 圓禿患者的焦慮與憂鬱盛行率明顯較高。若出現情緒低落、失眠或社交退縮等現象，可向醫師反映，必要時轉介心理師或精神科協助。

    h4.flex.items-start.gs-fade.mt-10
      img(src="../assets/img/consult-img-4.svg" alt="定期回診追蹤" class="w-24 mr-8")
      p.content-sm 定期回診追蹤：
        span.block 圓禿容易復發，即使症狀改善，也需依醫師建議持續追蹤。穩定期可間隔三個月到六個月回診，確保免疫狀態維持平衡。

    a.click_event(href="https://www.derma.org.tw/resources/content.php?id=120" class="bg-blue-600 p-2 rounded-xl flex justify-between items-center w-11/12 sm:w-80 mx-auto mt-10 hover:bg-orange-400" target="_blank" data-title="alopeciaareata" data-label="click-alopeciaareata-btn")
      img.w-16.inline(src="../assets/img/line-img.svg" alt="圓禿就醫地圖")
      span.content-p.text-white 圓禿就醫地圖
      img.inline.w-5.mr-4(src="../assets/img/line-img-2.svg" alt="圓禿就醫地圖")


</template>

<style scoped lang="sass">
@use '~/assets/sass/media' as *
@use '~/assets/sass/colors' as *
</style>
