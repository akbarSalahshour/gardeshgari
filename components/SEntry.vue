<template>
  <div class="d-flex">
    <div v-if="src && alt">
      <img :src="src" :alt="alt" :style="imageStyle"/>
    </div>
    <div class="mr-3">
        <slot name="title"></slot>
        <slot name="sub-title"></slot>
    </div>
  </div>
</template>
<script lang="ts">
export default{
    props: ['src','alt','imageStyle']
}
</script>