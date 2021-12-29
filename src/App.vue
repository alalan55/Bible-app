<template>
  <div id="nav">
    <NavBar />
  </div>
  <router-view />
</template>
<script setup>
import { NavBar } from "@/components/organisms";
</script>
<style lang="scss" scoped>
#nav{
  z-index: 99999 !important;
}
</style>