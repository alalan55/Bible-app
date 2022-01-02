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
        <input
          type="text"
          class="bible-input"
          placeholder="Ex: Português"
          v-if="dataSetLength"
          v-model="filterName"
          @input="dataFiltered"
        />
      </div>
      <ContainerBiblias class="container-biblias">
        <figure v-if="loading">
          <img src="@/assets/gifs/loading.gif" alt="loading" />
        </figure>

        <div
          class="btn-reload"
          v-if="!loading && !dataSetLength"
          @click="reloadData"
        >
          <span> Ops, recarregue novamente! </span>
        </div>

        <Biblia
          class="bible"
          v-for="data in filtered"
          :key="data.id"
          :dados="data"
          @click="goToBible(data.id, data.language.name)"
        />
      </ContainerBiblias>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { ContainerBiblias } from "@/components/bosons";
import { Biblia } from "@/components/molecules";
export default {
  props: {
    dados: { type: Array, default: undefined },
  },
  setup(props, { emit }) {
    const router = useRouter();
    let loading = ref(true);
    let dataset = ref([]);
    let filtered = ref([]);
    let filterName = ref("");

    const reloadData = () => {
      emit("reloadData");
    };

    const initDataSet = () => {
      setTimeout(() => {
        console.log(props.dados.length, "verificar porque da 0 as vezes");
        if (props.dados.length) {
          dataset.value = props.dados;
          filtered.value = dataset.value;
          loading.value = false;
        } else {
          loading.value = false;
        }
      }, 1000);
    };
    initDataSet();

    const dataSetLength = computed(() => {
      return dataset.value.length;
    });

    const dataFiltered = () => {
      filtered.value = dataset.value
        .map((dataMap) => {
          const nameTranform = dataMap.language.name.toLowerCase();
          return { ...dataMap, nameTransform: nameTranform };
        })
        .filter((dataFilter) => {
          return dataFilter.nameTransform.includes(filterName.value);
        });
    };

    const goToBible = (id, name) => {
      router.push({ name: "Livros", params: { id: id, name: name } });
    };

    return {
      dataset,
      loading,
      goToBible,
      reloadData,
      dataSetLength,
      dataFiltered,
      filterName,
      filtered,
    };
  },
  components: {
    ContainerBiblias,
    Biblia,
  },
};
</script>

<style lang="scss" scoped>
.teste {
  display: block;
  max-width: 70%;
  border: 1px solid red;
  margin: 0 auto;
  overflow: hidden;
}
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
      .bible-input {
        margin: 2rem auto 0 auto;
        width: 90%;
        padding: 0.5rem;
        border-radius: 10px;
        border: 1px solid rgb(163, 161, 161);

        &:focus {
          outline: none;
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

      .btn-reload {
        padding: 0.4rem 0.6rem;
        text-align: center;
        justify-content: center;
        text-align: center;
        border-radius: 10px;
        color: white;
        background: var(--blue1);
        cursor: pointer;
        transition: 0.2s ease-in;

        &:hover {
          background: var(--blue2);
        }
      }
    }
  }
}
</style>