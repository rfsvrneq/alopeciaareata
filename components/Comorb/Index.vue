<script setup>
import { ref } from "vue";
import Tab1 from "./Tab1.vue";
import Tab2 from "./Tab2.vue";
import Tab3 from "./Tab3.vue";

// 引用標題元件
import BubbleTitleH2 from "../ui/BubbleTitleH2.vue";
import BubbleTitleH3 from "../ui/BubbleTitleH3.vue";
import BubbleTitleH4 from "../ui/BubbleTitleH4.vue";

const tabs = ref([
  {
    key: "one", // 用作內部邏輯與元件對應
    title: "斑塊型圓禿", // 顯示用文字
    label: "click-Comorb-tab-1",
  },
  {
    key: "two",
    title: "全頭禿",
    label: "click-Comorb-tab-2",
  },
  {
    key: "three",
    title: "全身禿",
    label: "click-Comorb-tab-3",
  },
]);

const activeTab = ref(tabs.value[0].key);

const changeTab = (tabName) => {
  activeTab.value = tabName;
};

// 根據 activeTab 顯示對應的子元件
const tabComponents = {
  one: Tab1,
  two: Tab2,
  three: Tab3,
};
</script>

<template lang="pug">
//- 認識圓禿
#about.bg-blue-100(class="imp_event" data-title="2025obesity" data-label="imp_section-2025obesity-comorbidity")

  .container
    //- 引用標題元件
    BubbleTitleH2(text="圓禿是自體免疫失衡造成的毛髮脫落疾病")

    .content-p.text-justify
      p 圓禿是一種自體免疫疾病，根據統計，全球約 2% 的人飽受圓禿之苦
        sup 1 
        | ，在台灣推測有40萬人被診斷圓禿
        sup 2
        | 。免疫系統錯把毛囊當成外來病原體，導致頭皮或其他部位的毛髮掉落；圓禿會造成不同程度的落髮，嚴重恐全身毛髮掉光，其不僅影響外觀，也可能影響生活、心理健康。

    //- 引用標題元件 '單引號' 包裹 sup 標籤
    BubbleTitleH3(text='圓禿依照落髮型態分成三種<sup>3</sup>')
    
    //- TAB
    .tabs-table
      div.click_event.section-wrap(v-for='(tab, index) in tabs' :key='index' @click='changeTab(tab.key)' :class="{ 'active': activeTab === tab.key }", data-title="2025obesity", :data-label="tab.label")
        span.section-label {{ tab.title }}

    .tabs-table-content.mx-auto
      //- activeTab 顯示對應的子元件
      //- component 動態渲染元件的特殊標籤
      Transition(name="fade" mode="out-in")
        component(:is="tabComponents[activeTab]" :key="activeTab")


    //- 常見迷思

    //- 引用標題元件 '單引號' 包裹 sup 標籤
    BubbleTitleH4(no='常見迷思一' text='圓禿和雄性禿是一樣的嗎？')

    article.bg-blue-600.p-3.rounded-xl.relative
      .bg-white.p-6.relative
        img.w-40.absolute(src="/assets/img/dialog-img-1.svg", alt="dialog", class="left-1/2 -translate-x-1/2 -top-1")
        img.absolute.bottom-0(src="/assets/img/dialog-img-2.svg", alt="dialog" class="w-16 sm:w-20 -left-10 sm:-left-14")
        img.w-6.absolute.right-0(src="/assets/img/dialog-img-3.svg", alt="dialog", class="-bottom-[1px]")
        p.content-xs.mb-5.flex.items-center
          span.bg-blue-400.text-white.py-2.px-8.rounded-full.mr-4.shrink-0 真   相
          span 不一樣。

        p.content-xs 圓禿是一種
          span.text-orange-400 自體免疫疾病
          | ，當身體的免疫系統錯誤攻擊毛囊時，造成毛髮突然脫落。掉髮通常呈現局部、圓形或多塊狀的禿髮斑塊，
          span.text-orange-400 發生速度快
          | ，常在數天至數週內明顯出現，患者只要及早接受治療，使用類固醇、免疫抑制劑、標靶藥物等，毛囊都有機會恢復生長，屬於「可逆」的疾病，
          span.text-orange-400 越早接受治療效果越佳。

        p.content-xs.mt-5 雄性禿則是受到遺傳基因與雄性荷爾蒙（DHT）影響。與圓禿完全不同，雄性禿屬於漸進式，且為不可逆性的落髮，發生過程緩慢。男性常見的型態包括髮際線後退形成Ｍ型禿，或頭頂出現「地中海禿」；女性則多從分髮線開始變稀疏，頭皮逐漸明顯。治療上可透過口服或外用抑制雄性荷爾蒙的藥物延緩惡化。

</template>

<style scoped lang="sass">
@use '~/assets/sass/media' as *
@use '~/assets/sass/colors' as *

.fit
  width: 100%
  height: 100%
  object-fit: cover
  object-position: center

// 分頁
.tabs-table
  color: white
  display: flex
  width: 90%
  margin: 0 auto
  z-index: -1
  .section-wrap
    background-color: white
    flex-grow: 1
    padding: 3px
    margin-left: .25rem
    margin-right: .25rem
    clip-path: polygon(
      0% 100%,
      0% 15px,
      15px 0%,
      calc(100% - 15px) 0%,
      100% 15px,
      100% 100%
    )
    +m-480
      margin-left: .15rem
      margin-right: .15rem
    &.active
      margin-top: -.5rem
  .section-label
    cursor: pointer
    font-size: 1.65rem
    font-weight: bold
    box-sizing: border-box
    display: inline-block
    width: 100%
    text-align: center
    padding: .35rem 0 1.05rem 0
    clip-path: polygon(
      0% 100%,
      0% 15px,
      15px 0%,
      calc(100% - 15px) 0%,
      100% 15px,
      100% 100%
    )
    +m-480
      font-size: 1.25rem
  .section-wrap:nth-child(1)
    .section-label
      background-color: $blue-600
  .section-wrap:nth-child(2)
    .section-label
      background-color: $blue-400
  .section-wrap:nth-child(3)
    .section-label
      background-color: $blue-200


.tabs-table-content
  background-color: $blue-50
  border: 3px solid white
  padding: 3rem 3rem 0rem 3rem
  border-radius: 2rem
  margin-top: -1rem
  z-index: 1
  position: relative
  +m-1024
    padding: 1rem 1rem 0rem 1rem

// 分頁淡入淡出效果
.fade-enter-active, .fade-leave-active
  transition: opacity 0.5s ease
.fade-enter-from, .fade-leave-to
  opacity: 0
.fade-enter-to, .fade-leave-from
  opacity: 1
</style>
