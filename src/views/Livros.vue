<template>
  <div>
    <Livrostemplate />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import http from '@/service'
import { Livrostemplate } from "@/components/templates";

export default {
  components: {
    Livrostemplate,
  },

  setup(){
      const route = useRoute();
      const id = route.params.id
      const searchBooksBible =  async() =>{
          try {
              let req = await http.get(`/bibles/${id}/books`);
              let {data} = req;

              console.log(data)
          } catch (error) {
              console.error(error)
          }
      }
      searchBooksBible()
      return{}
  }
};
</script>

<style lang="scss" scoped>
</style>