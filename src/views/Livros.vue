<template>
  <div>
    <Livrostemplate  :name="name" :dados="arrayData" />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref } from "vue";
import http from "@/service";
import { Livrostemplate } from "@/components/templates";

export default {
  components: {
    Livrostemplate,
  },

  setup() {
    const route = useRoute();
    const id = route.params.id;
    const arrayData = ref([]);
    const name = route.params.name

    const searchBooksBible = async () => {
        
      try {
        let req = await http.get(`/bibles/${id}/books`);
        let { data } = req;
        arrayData.value = data.data;
       
      } catch (error) {
        console.error(error);
      }
 
    };
    searchBooksBible();
    
    return { arrayData, name };
  },
};
</script>

<style lang="scss" scoped>
</style>