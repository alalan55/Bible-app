<template>
  <div class="capitulos-template">
    <div class="title-card">
      <span>Selecione um capítulo</span>
    </div>


    <div class="cards-capitulos">
      <div
        class="card"
        @click="goVerse(item)"
        v-for="item in versesData"
        :key="item.id"
      >
        <span class="value">{{ item.number }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  props: {
    versesData: { type: Array, default: undefined },
  },
  setup() {
    const router = useRouter();
    const goVerse = (item) => {
      router.push({ name: "Verso", params: {bibleId: item.bibleId, id: item.id} });
    };
    return { goVerse };
  },
};
</script>

<style lang="scss" scoped>
.capitulos-template {
  width: 100%;

  .title-card {
    text-align: center;
    border: 1px solid;
    background: var(--blue1);
    color: white;
    padding: 0.5rem 0;
    max-width: 50%;
    margin: var(--top-bottom2) auto;
    border-radius: 15px;
    transition: 0.2s ease-in-out;

    span {
      font-weight: 600;
    }
  }

  .cards-capitulos {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;

    .card {
      border: 1px solid rgb(206, 204, 204);
      border-radius: 15px;
      flex: 0 1 100px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-weight: 500;
      cursor: pointer;
      transition: 0.2s ease-in-out;
      color: gray;

      &:hover {
        background: rgb(206, 204, 204);
        color: white;
      }
    }
  }
}

@media screen and (max-width: 700px) {
  .title-card {
    max-width: 75% !important;
  }
}
</style>