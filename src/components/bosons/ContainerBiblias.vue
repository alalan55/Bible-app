<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: var(--p-lados-1);
  border-radius: 10px;
  -webkit-box-shadow: -2px 6px 11px -9px rgba(0, 0, 0, 0.4);
  box-shadow: -2px 6px 11px -9px rgba(0, 0, 0, 0.4);
}
</style>