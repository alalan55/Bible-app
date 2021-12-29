<template>
  <div class="biblia">
    <div class="lingua">
      <span> {{ dados.language.nameLocal }} </span>
    </div>
    <div class="card-info">
      <div class="title">
        <span> {{ dados.language.name }} </span>
      </div>
      <div class="traducao">
        <span>
          <span class="sigla">
            {{ dados.abbreviation }}
          </span>
          {{ dados.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dados: { type: Object, default: undefined },
  },
};
</script>

<style lang="scss" scoped>
.biblia {
  width: 200px;

  text-align: center;

  .lingua {
    span {
      font-size: 0.95em;
      font-weight: 600;
    }
  }

  .card-info {
    margin: 0.5rem 0;
    border-radius: 10px;
    height: 100%;
    height: 200px;
    padding: 0.5rem 0.5rem;
    -webkit-box-shadow: -2px 3px 10px -1px rgba(0, 0, 0, 0.24);
    box-shadow: -2px 3px 10px -1px rgba(0, 0, 0, 0.24);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      // box-shadow: none;
      // -webkit-box-shadow: none;
    }

    .title {
      font-size: 0.8em;
      font-weight: 300;
    }

    .traducao {
      margin: 1rem 0;

      .sigla {
        font-weight: 700;
      }
    }
  }
}
</style>