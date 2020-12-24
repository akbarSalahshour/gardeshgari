<template>
  <div class="col-10 mx-auto mt-5 d-none d-md-block">
    <!-- نوار عنوان -->
    <div
      v-if="jumbotronData.title.active"
      v-text="jumbotronData.title.text"
      class="col-12 py-2 mx-auto my-2 text-center text-nowrap overflow-hidden font-700 text-18 text-secondary bg-light rounded-20 text-boot-d-2"
    ></div>
    <!-- نوار عنوان -->
    <!-- نوار زیر عنوان -->
    <div
      v-if="jumbotronData.subTitle.active"
      class="col-11 mx-auto my-2 bg-light rounded-20"
    >
      <p
        v-text="jumbotronData.subTitle.text"
        class="m-0 text-secondary text-center py-2 text-nowrap overflow-hidden font-14"
      ></p>
    </div>
    <!-- نوار زیر عنوان -->
    <!-- نوار جستجو -->
    <div class="search-parnet col-10 p-0 mx-auto bg-light">
      <i class="fa fa-search cpo"></i>
      <input
        class="input-search"
        placeholder="دنبال اقامتگاه یا گردشگری می گردید؟"
      />
    </div>
    <!-- نوار جستجو -->
    <!-- نوار 4 باکسی -->
    <div class="row mx-auto p-0 justify-content-between col-10">
      <div
        class="col-3 py-2 px-1"
        v-for="(box, index) in jumbotronData.boxes"
        :key="index"
      >
        <div
          class="bg-light p-1 text-center text-nowrap overflow-hidden text-muted rounded-20"
        >
          <nuxt-link class="text-secondary" v-text="box.text" :to="box.path" />
        </div>
      </div>
    </div>
    <!-- نوار 4 باکسی -->
  </div>
</template>
<script lang="ts">
import { mapGetters } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("jumbotron/setData");
  },
  computed: {
    ...mapGetters("jumbotron", {
      jumbotronData: "getData",
    }),
  },
};
</script>
<style lang="scss">
@import "~assets/scss/variable.scss";
.search-parnet {
  height: 60px;
  line-height: 60px;
  position: relative;
  border-radius: 60px;
  & > i {
    position: absolute;
    left: 5px;
    top: 5px;
    height: 50px;
    line-height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: $secondary;
    text-align: center;
    color: $white;
  }
  .input-search {
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    width: calc(100% - 60px);
    padding-right: 25px;
    color: $secondary;
  }
}
</style>
