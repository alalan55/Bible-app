<template>
  <div class="verso-template" v-if="valor">
    <div v-html="valor" class="container"></div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import http from "@/service";
export default {
  props: {
    verseChosen: { type: Object, defautl: undefined },
  },
  setup(props) {
    const dados = ref([]);
    let valor = ref("");

    watch(
      () => props.verseChosen.id,
      (nv, ov) => {
        if (nv != ov) {
          initData();
        }
      }
    );

    const initData = async () => {
      let req = await http.get(
        `bibles/${props.verseChosen.bibleId}/chapters/${props.verseChosen.id}`
      );
      let { data } = req;

      dados.value = data.data;

      valor.value = dados.value.content;
    };

    return { dados, valor };
  },
};
</script>

<style lang="scss" scoped>
.verso-template {
  border: 1px solid rgb(206, 204, 204);
  overflow-y: auto;
  height: 80vh;
  margin: var(--top-bottom2) 0;
  padding: var(--top-bottom2);
  border-radius: 15px;

     &::-webkit-scrollbar {
      width: 10px;
      border-radius: 15px;
     
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 15px;
      margin: 5px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 15px;
       
    }

  .versos {
    border: 1px solid blue;
    p {
      font-weight: 700;
      border: 1px solid red !important;
    }
  }
}
</style>