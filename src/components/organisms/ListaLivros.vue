<template>
  <div class="lista">
    <div class="content">
      <ul>
        <li v-for="item in livrosData" :key="item.id" @click="goChapters(item)">
          <span>
            {{ item.name }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
export default {
  props: {
    livrosData: { type: Array, default: undefined },
  },
  setup() {
    const router = useRouter();

    const goChapters = (item) => {
      router.push({name: 'PaginaLivro', params:{id: item.bibleId, bookId: item.id, title: item.nameLong, nameBook: item.abbreviation }})
    };
    return { goChapters };
  },
};
</script>

<style lang="scss" scoped>
.lista {
  width: 100%;

  .content {
    width: 100%;
    height: 70vh;
    overflow-y: auto;
    margin: var(--top-bottom2) 0;

    &::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #888;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        list-style: none;
        padding: 0;
        margin: 0.5rem 0;

        span {
          font-weight: 300;
          font-size: 1.5em;
          cursor: pointer;

          &:hover {
            color: rgb(67, 163, 228);
          }
        }
      }
    }
  }
}
</style>