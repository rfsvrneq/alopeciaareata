<script setup>
// 引用標題元件
import BubbleTitleH2 from "./ui/BubbleTitleH2.vue";
import BubbleTitleH3 from "./ui/BubbleTitleH3.vue";
import BubbleTitleH4 from "./ui/BubbleTitleH4.vue";
</script>

<template lang="pug">
//- 治療與行動 圓禿治療要及早
div#care.bg-amber-50(class="imp_event" data-title="alopeciaareata" data-label="imp_section-alopeciaareata-care")
  .container

    //- 引用標題元件
    BubbleTitleH2(text='圓禿治療要及早<sup>10</sup>')

    p.content-p.gs-fade 圓禿治療目標以
      span.text-red-700 改善病人頭髮覆蓋的程度
      | 為主要訴求，醫師會依照禿髮的面積大小、掉髮進行的速度、持續時間及對病人造成的身心壓力程度決定治療方針。醫界普遍認為，圓禿是一種需要積極治療的疾病，病人患病後越早開始治療越好，延遲就醫可能讓病灶擴大或頻繁復發，甚至演變成全頭或全身性落髮。

    //- 引用標題元件
    BubbleTitleH3(text='臨床上，常見的圓禿治療方法包含')

    .grid.gap-x-6.gap-y-10(class="grid-cols-1 sm:grid-cols-2 lg:gap-y-0 lg:grid-cols-3")
      .bg-white.border-3.border-blue-600.rounded-3xl.p-5.gs-fade
        p.textpolygon 局部治療
        img.my-4.mx-auto(src="../assets/img/care-img-1.svg", alt="局部治療", class="w-[160px]")
        .flex(class="justify-start")
          img.w-8.-mt-2(src="../assets/img/care-icon.svg", alt="局部治療")
          p.content-p.text-slate-600(class="sm:text-[22px]") 外用皮質類固醇
        .flex(class="justify-start")
          img.w-8.-mt-2(src="../assets/img/care-icon.svg", alt="局部治療")
          p.content-p.text-slate-600(class="sm:text-[22px]") 接觸過敏原局部免疫療法

      .bg-white.border-3.border-blue-600.rounded-3xl.p-5.gs-fade
        p.textpolygon 病灶內注射
        img.my-4.mx-auto(src="../assets/img/care-img-2.svg", alt="病灶內注射", class="w-[200px]")
        .flex(class="justify-start")
          img.w-8.-mt-2(src="../assets/img/care-icon.svg", alt="病灶內注射")
          p.content-p.text-slate-600(class="sm:text-[22px]") 病灶內皮質類固醇注射

      .bg-white.border-3.border-blue-600.rounded-3xl.p-5.gs-fade
        p.textpolygon 全身系統性治療
        img.w-48.my-4.mx-auto(src="../assets/img/care-img-3.svg", alt="全身系統性治療", class="w-[220px]")
        .flex(class="justify-start")
          img.w-8.-mt-2(src="../assets/img/care-icon.svg", alt="全身系統性治療")
          p.content-p.text-slate-600(class="sm:text-[22px]") 口服JAK小分子抑制劑
        .flex(class="justify-start")
          img.w-8.-mt-2(src="../assets/img/care-icon.svg", alt="全身系統性治療")
          p.content-p.text-slate-600(class="sm:text-[22px] tracking-tight") 口服/靜脈注射皮質類固醇
        .flex(class="justify-start")
          img.w-8.-mt-2(src="../assets/img/care-icon.svg", alt="全身系統性治療")
          p.content-p.text-slate-600(class="sm:text-[22px]") 免疫抑制劑

    p.content-p.my-10 皮膚專科醫師會依
      span.text-red-700 嚴重程度、年齡等
      | ，選擇不同的治療策略：

    .grid(class="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-36")
      h4
        img.my-4.mx-auto(src="../assets/img/care-img-4.svg", alt="治療策略", class="w-10/12")
        p.content-p 以外用或局部注射皮質類固醇為主，可合併Minoxidil幫助毛髮再生。若為兒童患者，通常採用低效力外用藥膏以降低副作用。
      h4
        img.my-4.mx-auto(src="../assets/img/care-img-5.svg", alt="治療策略", class="w-10/12")
        p.content-p.tracking-tight 需使用系統性治療，包括口服或靜脈注射類固醇、傳統免疫抑制劑，或新一代標靶藥物 JAK抑制劑，如Baricitinib、Ritlecitinib，這些藥物能有效
          span.text-red-700 抑制免疫發炎反應
          | 、幫助毛髮重生。

    //- 引用標題元件 '單引號' 包裹 sup 標籤
    BubbleTitleH4(no='常見迷思三' text='圓禿不需治療，靠洗髮精、補品就能改善？')
        
    //- 常見迷思三
    article.bg-blue-600.p-3.rounded-xl.relative
      .bg-white.p-6.relative
        img.w-40.absolute(src="/assets/img/dialog-img-1.svg", alt="dialog", class="left-1/2 -translate-x-1/2 -top-1")
        img.absolute.bottom-0(src="/assets/img/dialog-img-2.svg", alt="dialog" class="w-16 sm:w-20 -left-10 sm:-left-14")
        img.w-6.absolute.right-0(src="/assets/img/dialog-img-3.svg", alt="dialog", class="-bottom-[1px]")
        p.content-xs.mb-5.flex.items-center
          span.bg-blue-400.text-white.py-2.px-8.rounded-full.mr-4.shrink-0 真   相
          span 不能單靠洗髮精、補品就能改善圓禿。

        p.content-xs 圓禿並不是一般的「營養不良」或「壓力性落髮」，而是
         span.text-orange-400 自體免疫系統失衡
         | 導致毛囊受到攻擊的疾病。單靠洗髮精、護髮產品或營養補充品，都無法調整免疫反應，自然也就無法真正解決病因。

        .content-xs.mt-5 根據醫學共識，圓禿患者都需要專業皮膚科治療，依病情輕重給予不同層級的介入，包括：
          ul.list-disc.list-inside
            li.content-xs 局部或口服類固醇治療：抑制免疫發炎反應，減少毛囊受損
            li.content-xs 免疫抑制劑或標靶藥物（如 JAK 抑制劑）：針對免疫機制進行精準調控
        
        p.content-xs.mt-5 圓禿是可逆性的落髮，但前提是需
          span.text-orange-400 及早就醫與正確治療
          | ，若篤信偏方導致拖延太久才就醫，讓毛囊長期處於發炎狀態，恐可能會降低毛髮再生能力，反而成為不可逆的疾病。

    //- 引用標題元件 '單引號' 包裹 sup 標籤
    BubbleTitleH4(no='常見迷思四' text='圓禿都是急性的，時間一到頭髮就會長回來？')

    //- 常見迷思四
    article.bg-blue-600.p-3.rounded-xl.relative
      .bg-white.p-6.relative
        img.w-40.absolute(src="/assets/img/dialog-img-1.svg", alt="dialog", class="left-1/2 -translate-x-1/2 -top-1")
        img.absolute.bottom-0(src="/assets/img/dialog-img-2.svg", alt="dialog" class="w-16 sm:w-20 -left-10 sm:-left-14")
        img.w-6.absolute.right-0(src="/assets/img/dialog-img-3.svg", alt="dialog", class="-bottom-[1px]")
        p.content-xs.mb-5
          span.bg-blue-400.text-white.py-2.px-8.rounded-full.mr-4.shrink-0 真   相
          span 並非所有圓禿都是急性的，越晚就醫搶救毛髮越困難。

        p.content-xs.mt-5.text-justify 「時間一到頭髮就會長回來」這是多數民眾對於圓禿的誤解，確實有部分屬於輕度、急性圓禿的患者，能在幾個月內，毛囊能自然恢復功能，但並非每個人都如此幸運，若圓禿持續半年以上未見改善，就會被定義是「慢性圓禿」。研究顯示，約有
          span.text-orange-400 30%的慢性圓禿患者會進展為全頭禿，另有15%進展為全身禿。
          | 這類嚴重圓禿的患者，因毛囊受到免疫細胞長期攻擊，進入「休眠」甚至「萎縮」狀態，幾乎無法靠自己長回頭髮。及早治療才能提高控制病情的成功率，減少長期心理與生活的衝擊。


</template>

<style scoped lang="sass">
@use '~/assets/sass/media' as *
@use '~/assets/sass/colors' as *

=textpolygon
  // 做不規則外型
  clip-path: polygon(
    0% 100%,
    0% 15px,
    15px 0%,
    calc(100% - 15px) 0%,
    100% 15px,
    100% 100%
  )

.textpolygon
  background-color: $blue-600
  color: white
  width: 80%
  margin-left: auto
  margin-right: auto
  text-align: center
  font-size: 1.35rem
  padding: 0.35rem 0
  +textpolygon
  margin-top: -3rem

.list-disc
  li
    &::marker
      color: $blue-400
</style>
