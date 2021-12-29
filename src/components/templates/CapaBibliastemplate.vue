<template>
  <div class="capa">
    <div class="conteudo-capa">
      <div class="textos">
        <div class="title">
          <span>Selecione uma Bíblia</span>
        </div>
        <div class="descricao">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            tenetur earum, delectus quibusdam neque impedit quas iusto pariatur
            porro eveniet quo, cumque consectetur, libero cupiditate odit
            praesentium at maiores reiciendis!
          </p>
        </div>
      </div>
      <ContainerBiblias class="container-biblias">
        <figure v-if="loading">
          <img src="@/assets/gifs/loading.gif" alt="loading" />
        </figure>

        <Biblia
          class="bible"
          v-for="data in dataset"
          :key="data.id"
          :dados="data"
          @click="goToBible(data.id, data.language.name)"
        />
      </ContainerBiblias>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ContainerBiblias } from "@/components/bosons";
import { Biblia } from "@/components/molecules";
export default {
  props: {
    dados: { type: Array, default: undefined },
  },
  setup(props) {
    const router = useRouter();
    let loading = ref(true);
    let dataset = ref([]);

    const initDataSet = () => {
      console.log(props.dados, 'valores chegando aqui')
      setTimeout(() => {
        console.log(props.dados.length, 'verificar porque da 0 as vezes')
        if (props.dados.length) {
          dataset.value = props.dados;
          loading.value = false;
        }else{
           dataset.value = props.dados;
            loading.value = false;
        }
      }, 1000);
    };
    initDataSet();

    const goToBible = (id, name) => {
        router.push({name: 'Livros', params:{id: id, name:name}})
    };

    return { dataset, loading, goToBible };
  },
  components: {
    ContainerBiblias,
    Biblia,
  },
};
</script>

<style lang="scss" scoped>
.capa {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: var(--height-100);
  padding: 0 var(--p-lados-1);
  .conteudo-capa {
    text-align: center;
    .textos {
      margin: 3rem 0;
      .title {
        margin: 0.5rem 0;
        span {
          font-size: 2.5em;
          font-weight: 600;
        }
      }
      .descricao {
        p {
          font-weight: 300;
          letter-spacing: 0.05em;
        }
      }
    }

    .container-biblias {
      margin: var(--top-bottom3) 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-evenly;
      gap: 1rem;

      .bible {
        flex: 0 0 300px;
      }
    }
  }
}
</style>