<template>
  <div>
    <span>Página do livro, aqui vai ser carregado os capitulos</span>
    <span>Aqui vai ser exibido o que foi escolhido acima</span>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref } from "vue";
import http from "@/service";
export default {
  setup() {
    const route = useRoute();
    const msg = ref("");
    const id = route.params.id;
    const bookId = route.params.bookId;

    const initData = async () => {

        console.log(bookId)
      let req = await http.get(`bibles/${id}/books/${bookId}/chapters`);
      console.log(req)
    };
    initData();
    return { msg };
  },
};
</script>