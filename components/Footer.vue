<script setup></script>

<template>
  <div class="w-full bg-amber-50" id="refs">
    <div class="container px-4">
      <p>資料來源:</p>
      <ul class="list-decimal text-sm list-inside">
        <li>
          Suchonwanit P, et al. Immunotargets Ther. 2021 Jul 29;10:299–312.
        </li>
        <li>https://www.ntuh.gov.tw/RMC/Fpage.action?fid=8413</li>
        <li>台灣皮膚科醫學會_圓禿診斷及治療共識(2024)</li>
        <li>
          Gilhar, A., Etzioni, A., & Paus, R. (2012). New England Journal of
          Medicine, 366(16), 1515-1525.
        </li>
        <li>
          Harries, Matthew, et al. British journal of dermatology 186.2 (2022):
          257-265.
        </li>
        <li>台灣皮膚科醫學會_圓禿診斷及治療共識(2024)</li>
        <li>台灣皮膚科醫學會_圓禿診斷及治療共識(2024)</li>
        <li>Eitan LNA, et al. Oman Med J. 2022 Sep 30;37(5):e421.</li>
        <li>
          Mesinkovska N, et al. J Investig Dermatol Symp Proc. 2020
          Nov;20(1):S62-S68. PP-LGF-TWN-0056-202511
        </li>
      </ul>
    </div>
  </div>

  <footer class="bg-amber-50">
    <ul>
      <li>
        <a href="https://www.commonhealth.com.tw/" target="_blank">康健官網</a>
      </li>
      <li>
        <a href="https://www.commonhealth.com.tw/" target="_blank">康健雜誌</a>
      </li>
      <li>
        <a
          href="https://www.commonhealth.com.tw/book/index.action"
          target="_blank"
          >康健出版</a
        >
      </li>
      <li>
        <a href="https://www.youtube.com/user/CommonHealthTV" target="_blank"
          >康健影音</a
        >
      </li>
      <li>
        <a href="https://kb.commonhealth.com.tw/" target="_blank">康健知識庫</a>
      </li>
      <li>
        <a href="https://club.commonhealth.com.tw/" target="_blank">大人社團</a>
      </li>
      <li>
        <a href="https://cancer.commonhealth.com.tw/" target="_blank"
          >癌症問康健</a
        >
      </li>
    </ul>
    <p>
      Copyright © 2025 康健雜誌（天下生活出版股份有限公司）All rights reserved.
    </p>
    <ul>
      <li>
        <a href="https://member.cwg.tw/privacy-policy" target="_blank"
          >隱私權政策</a
        >
      </li>
      <li>
        <a href="https://member.cwg.tw/register-rule" target="_blank"
          >會員服務條款</a
        >
      </li>
    </ul>
  </footer>
</template>

<style>
footer {
  width: 100%;
  padding: 30px;
  color: #333;
}

footer a {
  transition: 0.3s;
  text-decoration: none;
}

footer ul {
  list-style-type: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}

footer ul li {
  font-size: 15px;
  line-height: 15px;
  border-right: 1px solid #333;
  padding: 0 10px 0 0;
  margin: 0 10px 10px 0;
}

footer ul li:last-child {
  border: none;
  padding: 0;
  margin: 0;
}

footer ul li a {
  color: #333;
  line-height: 15px;
}

footer ul li a:hover {
  text-decoration: underline;
}

footer .commonhealth-footer:last-child {
  margin: 0;
}

footer p {
  color: #333;
  font-size: 14px;
  line-height: 24px;
  /* font-weight: 300; */
  text-align: center;
  margin-top: 0;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  footer ul {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  footer ul li {
    padding: 0 5px 0 0;
    margin: 0 5px 10px 0;
  }
}
</style>
