<template>
  <div class="pagina">
    <div class="content">
      <div class="mensagem">
        <span class="name">
          {{ nameBook }}
        </span>
        <span class="descricao">
          {{ msg }}
        </span>
      </div>

      <CapitulosTemplate class="capitulos" :versesData="dados" />

      <router-view></router-view>
    </div>

    <figure class="btn-voltar" @click="goBack">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-arrow-back"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#2c3e50"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
      </svg>
    </figure>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import http from "@/service";

import { CapitulosTemplate } from "@/components/templates";
export default {
  components: {
    CapitulosTemplate,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const msg = route.params.title;
    const id = route.params.id;
    const bookId = route.params.bookId;
    const nameBook = route.params.nameBook;
    const dados = ref([]);

    const goBack = () => {
      router.go(-1);
    };

    const initData = async () => {
      let req = await http.get(`bibles/${id}/books/${bookId}/chapters`);
      let { data } = req;
      dados.value = data.data;
    };
    initData();
    return { msg, nameBook, goBack, dados };
  },
};
</script>

<style lang="scss">
.pagina {
  min-height: var(--height-100);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 var(--p-lados-1);
  position: relative;

  .btn-voltar {
    position: absolute;
    top: 10px;
    right: 15px;
    display: none;

    .icon {
      width: 40px;
      cursor: pointer;
    }
  }

  .content {
    // max-width: 85%;
    min-width: 85%;
    .mensagem {
      margin: 1.5rem 0;
      span {
        display: block;
      }
      .name {
        font-size: 2.5em;
        font-weight: 600;
      }

      .descricao {
        font-weight: 300;
        letter-spacing: 0.05em;
      }
    }

    .capitulos {
      margin: 1.5rem 0;
    }
  }
}

@media screen and (max-width: 700px) {
  .btn-voltar {
    display: block !important;
  }
}
</style>