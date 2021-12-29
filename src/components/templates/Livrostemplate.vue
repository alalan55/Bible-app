<template>
     <div class="capa">
    <div class="conteudo-capa">
      <div class="textos">
        <div class="title">
          <span>Selecione um livro</span>
        </div>
        <div class="descricao">
          <p>
            Você selecionou uma bíblia em <span class="strong">{{name}}</span>
          </p>
        </div>
      </div>
        <ListaLivros :livrosData="dados"/>
    </div>
  </div>
</template>

<script>
import {ListaLivros} from '@/components/organisms'
    export default {
        props:{
            dados:{type: Array, default: undefined},
            name: {type: String, default: ''}
        },
        components:{
            ListaLivros
        }
    }
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
        .strong{
            font-weight: 700;
        }
      }
    }
  }
}
</style>