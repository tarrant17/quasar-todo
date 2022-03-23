<template>
  <div class="bg-primary column flex-center headertodos">
    <p class="text-subtitle1 text-white no-margin">
      <slot></slot>
    </p>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
})
</script>
<style>
  .headertodos {
    height: 50px;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
  }
</style>
