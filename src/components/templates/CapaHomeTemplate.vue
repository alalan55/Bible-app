<template>
  <div class="capa">
    <div class="conteudo-capa">
      <div class="title">
        <span>Holy Bibles</span>
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
  </div>
</template>


<style lang="scss" scoped>
.capa {
  height: var(--height-100);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .conteudo-capa {
    max-width: 70%;
    margin: 0 auto;
    .title {
      margin: 0.5rem 0;
      span {
        font-size: 2.5em;
        font-weight: 600;
      }
    }
    .descricao{
        p{
            font-weight: 300;
            letter-spacing: .05em;
        }
    }
  }
}
</style>