<template>
  <footer>
    <div class="container p-0">
      <div class="row">
        <b-col col md="4" sm="6">
          <f-about />
        </b-col>
        <b-col col md="8" sm="6" class="p-0">
          <b-row class="p-0">
            <b-col col md="6">
              <div class="d-none d-sm-block">
                <s-card
                  title="دسترسی آسان ..."
                  bodyClass="bg-transparent text-info px-4"
                >
                  <b-list-group-item
                    slot="listItem"
                    class="bg-transparent text-light border-0 p-1 font-300 font-15"
                    v-for="num in 5"
                    :key="num"
                  >
                    <span>-</span>
                    <span>صفحه اصلی سامانه</span>
                  </b-list-group-item>
                </s-card>
              </div>
            </b-col>
            <b-col col md="6">
              <div class="d-none d-sm-block">
                <s-card
                  title="تماس با ما..."
                  bodyClass="bg-transparent text-info px-4"
                >
                  <b-list-group-item
                    v-for="(list, index) in listContact"
                    :key="index"
                    class="bg-transparent text-right border-0 p-1 text-light"
                    slot="listItem"
                  >
                    <span>-</span>
                    <span>{{ list.text }}</span>
                  </b-list-group-item>
                </s-card>
              </div>
            </b-col>
            <b-col col md="6">
              <div>
                <s-card
                  title="نمادهای الکترونیکی..."
                  bodyClass="bg-transparent text-info px-4"
                  mainClass="d-flex flex-row"
                >
                  <b-list-group-item
                    v-for="(list, index) in listSymbol"
                    :key="index"
                    class="bg-transparent text-right border-0 p-1 text-light"
                    slot="listItem"
                  >
                    <img :src="list.src" :alt="list.alt" />
                  </b-list-group-item>
                </s-card>
              </div>
            </b-col>
            <b-col col md="6">
              <div>
                <s-card
                  title="ما در رسانه ها..."
                  bodyClass="bg-transparent text-info px-4"
                  mainClass="d-flex flex-row"
                >
                  <b-list-group-item
                    v-for="(list, index) in listMedia"
                    :key="index"
                    class="bg-transparent text-right border-0 p-1 text-light"
                    slot="listItem"
                  >
                    <img :src="list.src" :alt="list.alt" />
                  </b-list-group-item>
                </s-card></div
            ></b-col>
          </b-row>
        </b-col>
      </div>
      <div class="line bg-secondary col-12 mt-4">
        <div class="on-line bg-info col-6 mx-auto" />
      </div>
      <b-row>
        <b-col class="">
          <f-copyright />
        </b-col>
      </b-row>
    </div>
  </footer>
</template>
<script lang="ts">
export default {
  data() {
    return {
      //باید از vuex اطلاعات گرفته شود ولی به دلیل انجام سریع کار از data استفاده شده است.
      listContact: [
        {
          text: "تلفن تماس: 09330643400",
        },
        {
          text: "تلفن تماس: 09330643400",
        },
        {
          text: "آدرس بستی: اصفهان خیابان ارباب کوچه شهید فکوری پلاک 11",
        },
        {
          text: "آدرس ایمیل: a.salahshour@gmail.com",
        },
        {
          text: "آدرس ایمیل: a.salahshour@gmail.com",
        },
      ],
      listSymbol: [
        {
          src: require("@/assets/img/nemadR.png"),
          alt: "Symbol Image",
        },
        {
          src: require("@/assets/img/nemadE.png"),
          alt: "Symbol Image",
        },
      ],
      listMedia: [
        {
          src: require("@/assets/img/khabar_farsi.png"),
          alt: "Media Image",
        },
        {
          src: require("@/assets/img/khabar_mehr.png"),
          alt: "Media Image",
        },
        {
          src: require("@/assets/img/khabar_iran.png"),
          alt: "Media Image",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
footer {
  position: relative;
  z-index: 9;
  background-image: url("~assets/img/bg-footer.jpg");
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 100px;
  .card-body {
    padding: 0;
    .card-title {
      font-size: 23px;
    }
  }
}
</style>
