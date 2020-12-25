<template>
  <b-card
    :title="title"
    :class="['border-0', bodyClass || ['bg-transparent', 'text-info']]"
  >
    <b-card-text
      v-if="text"
      :class="['text-justify','font-15', mainClass || ['font-300', 'my-4', 'text-light']]"
      v-text="text"
    />
    <b-list-group v-else :class="['px-2','font-15',mainClass || 'my-4']">
      <slot name="listItem" />
    </b-list-group>
  </b-card>
</template>
<script lang="ts">
export default {
  props: ["title", "text", "bodyClass", "mainClass", "listItem"],
};
</script>