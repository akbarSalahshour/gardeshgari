<template>
  <div>
    <b-navbar class="rounded p-0" toggleable="md" type="light" variant="light">
      <div class="d-md-none d-block mx-2">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      </div>
      <div class="col-md-12 col-auto p-0 mx-auto">
        <div class="p-2 d-flex justify-content-between">
          <s-entry :src="srcLogo" alt="Loggo Image">
            <div
              slot="title"
              class="font-500 font-2vw font-sm-4vw font-xs-5vw font-mo-6vw"
            >
              گردشگری ما
            </div>
            <div slot="sub-title">سامانه گردشگری</div>
          </s-entry>
          <div class="d-md-flex d-none">
            <div class="my-auto">
              <i class="far fa-user"></i>
              <span>کاربر عزیز:</span>
              <button @click="setAuth" class="btn btn-link p-0">
                {{ headerData.auth.name }}
              </button>
              <span>خوش آمدید...</span>
            </div>
            <nuxt-link class="btn btn-secondary mx-3 my-auto" to="/"
              >ورود</nuxt-link
            >
            <nuxt-link class="btn btn-info my-auto" to="/">ثبت نام</nuxt-link>
          </div>
        </div>
        <div
          class="d-md-block d-none bg-dark p-2 rounded-bottom text-right"
          v-for="(m, index) in headerData.menu"
          :key="index"
        >
          <nuxt-link :to="m.path" v-text="m.name"></nuxt-link>
        </div>
      </div>
      <b-collapse id="nav-collapse" is-nav>
        <div class="d-block d-md-none p-2">
          <div class="px-3 mb-3" v-for="(m, index) in headerData.menu" :key="index">
            <nuxt-link :to="m.path" v-text="m.name"></nuxt-link>
          </div>
          <div>
            <nuxt-link class="btn btn-secondary mx-3 my-auto" to="/"
              >ورود</nuxt-link
            >
            <nuxt-link class="btn btn-info my-auto" to="/">ثبت نام</nuxt-link>
          </div>
        </div>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script >
import { mapGetters, mapActions, mapMutations } from "vuex";
import srcLogo from "~/assets/img/logo.png";
export default {
  data() {
    return {
      srcLogo: srcLogo,
    };
  },
  methods: {
    ...mapActions("header", ["setAuth"]),
  },
  computed: {
    ...mapGetters("header", {
      headerData: "getData",
    }),
  },
};
</script>