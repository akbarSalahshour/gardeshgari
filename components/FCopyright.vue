<template>
  <div class="my-4">
    <div class="d-flex justify-content-between text-light">
      <div class="col-md-7 col-sm-12">
        <div>تمام حقوق طراحی این سایت متعلق به سلحشور می باشد.</div>
        <div>
          <span>طراحی وب سایت</span>
          <img
            :style="{ height: '20px'}"
            src="~assets/img/footer_logo.png"
            alt="Footer Logo"
          />
          <span>شرکت فناوری طراحی اصفهان</span>
        </div>
      </div>
      <!-- لوگو به همراه عنوان و زیر عنوانش -->
      <s-entry :src="srcLogo" alt="Loggo Image" :imageStyle="{'height':'45px'}">
        <div slot="title">گردشگری ما</div>
        <div slot="sub-title">سامانه گردشگری</div>
      </s-entry>
      <!-- لوگو به همراه عنوان و زیر عنوانش -->
    </div>
  </div>
</template>
<script lang="ts">
import srcLogo from "~/assets/img/logo.png";
export default {
  data() {
    return {
      srcLogo: srcLogo,
    };
  },
};
</script>