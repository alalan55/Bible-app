<template>
  <div class="bibles">
    <CapaBibliastemplate :dados="dados" @reloadData="reloadDados" />
  </div>
</template>

<script>
import { CapaBibliastemplate } from "@/components/templates";
import http from "@/service";
import { ref } from "vue";
export default {
  components: {
    CapaBibliastemplate,
  },
  setup() {
    const dados = ref([]);
    const inidData = async () => {
      try {
        let req = await http.get("/bibles");
        let { data } = req;
        dados.value = data.data;
      } catch (error) {
        console.error(error);
      }
    };

    const reloadDados = () =>{
      
    }
    inidData();


    return {
      dados,
      reloadDados,
    };
  },
};
</script>