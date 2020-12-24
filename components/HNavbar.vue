<template>
  <div>
    <b-navbar class="rounded p-0" toggleable="md" type="light" variant="light">
      <!-- آیکون منو در حالت موبایل -->
      <div class="d-md-none d-block mx-2">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      </div>
      <!-- آیکون منو در حالت موبایل -->
      <!-- بدنه اصلی -->
      <div class="col-md-12 col-auto p-0 mx-auto">
        <div class="p-2 d-flex justify-content-between">
          <!-- لوگو به همراه عنوان و زیر عنوانش -->
          <s-entry :src="srcLogo" alt="Loggo Image">
            <div
              slot="title"
              class="font-500 font-2vw font-sm-4vw font-xs-5vw font-mo-6vw"
            >
              گردشگری ما
            </div>
            <div slot="sub-title">سامانه گردشگری</div>
          </s-entry>
          <!-- لوگو به همراه عنوان و زیر عنوانش -->
          <!-- سمت راست نوار هدر -->
          <div class="d-md-flex d-none">
            <!-- نام کاربر به همراه پیام خوشامدگویی -->
            <div class="my-auto text-secondary">
              <i class="far fa-user"></i>
              <span>کاربر عزیز:</span>
              <button @click="setAuth" class="btn btn-link p-0">
                {{ navbarData.auth.name }}
              </button>
              <span>خوش آمدید...</span>
            </div>
            <!-- نام کاربر به همراه پیام خوشامدگویی -->
            <!-- دکمه های ورود و ثبت نام -->
            <nuxt-link class="btn btn-secondary mx-3 my-auto" to="/"
              >ورود</nuxt-link
            >
            <nuxt-link class="btn btn-info my-auto" to="/">ثبت نام</nuxt-link>
            <!-- دکمه های ورود و ثبت نام -->
          </div>
          <!-- سمت راست نوار هدر -->
        </div>
        <!-- منوها در حالت دسکتاپ -->
        <div
          class="d-md-block d-none bg-dark p-2 rounded-bottom text-right"
          v-for="(m, index) in navbarData.menu"
          :key="index"
        >
          <nuxt-link class="text-light px-4" :to="m.path" v-text="m.name"></nuxt-link>
        </div>
        <!-- منوها در حالت دسکتاپ -->
      </div>
      <!-- بدنه اصلی -->
      <!-- نوار مخفی حالت موبایل -->
      <b-collapse id="nav-collapse" is-nav>
        <div class="d-block d-md-none p-2">
          <!-- منوها در حالت موبایل -->
          <div
            class="px-3 mb-3"
            v-for="(m, index) in navbarData.menu"
            :key="index"
          >
            <nuxt-link :to="m.path" v-text="m.name"></nuxt-link>
          </div>
          <!-- منوها در حالت موبایل -->
          <!-- دکمه ورود و خروج در حالت موبایل -->
          <div>
            <nuxt-link class="btn btn-secondary mx-3 my-auto" to="/"
              >ورود</nuxt-link
            >
            <nuxt-link class="btn btn-info my-auto" to="/">ثبت نام</nuxt-link>
          </div>
          <!-- دکمه ورود و خروج در حالت موبایل -->
        </div>
      </b-collapse>
      <!-- نوار مخفی حالت موبایل -->
    </b-navbar>
  </div>
</template>
<script lang="ts">
import { mapGetters, mapActions, mapMutations } from "vuex";
import srcLogo from "~/assets/img/logo.png";
export default {
  data() {
    return {
      srcLogo: srcLogo,
    };
  },
  methods: {
    ...mapActions("navbar", ["setAuth"]),
  },
  computed: {
    ...mapGetters("navbar", {
      navbarData: "getData",
    }),
  },
};
</script>