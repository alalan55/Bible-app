<template>
  <div class="verso-template">
    <div v-html="valor"></div>

    <span>terminar daqui, verificar o v-html</span>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref } from "vue";
import http from "@/service";
export default {
  setup() {
    const route = useRoute();
    const bibleId = route.params.bibleId;
    const id = route.params.id;
    const dados = ref([]);
    let valor = ref('')

    const initData = async () => {
      let req = await http.get(`bibles/${bibleId}/chapters/${id}`);
      let { data } = req;
      console.log(data);

      dados.value = data.data;

      valor.value = dados.value.content
    };
    initData();

    return { dados, valor };
  },
};
</script>

<style lang="scss" scoped>
.verso-template {
  border: 1px solid red;
}
</style>