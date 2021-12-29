<template>
  <nav>
    <div class="content">
      <div class="logo" @click="goHome">
        <span>BIBLE.</span>
      </div>
      <div class="items">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'Bibles' }">Bibles</router-link>
      </div>
      <div class="icon-mobile" @click="showMobileInfo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-menu"
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
          <line x1="4" y1="8" x2="20" y2="8" />
          <line x1="4" y1="16" x2="20" y2="16" />
        </svg>
      </div>
    </div>

    <ModalNavBar v-if="show" @closeModal="showMobileInfo" />
  </nav>
</template>
<script>
import { ref } from "vue";
import ModalNavBar from "./ModalNavBar.vue";
import {useRouter} from 'vue-router'
export default {
  components: {
    ModalNavBar,
  },

  setup() {
      const router = useRouter()
    let show = ref(false);

    const showMobileInfo = () => {
      show.value == true ? (show.value = false) : (show.value = true);
    };
    const goHome = () =>{
        router.push({name : 'Home'})
    }
    return {
      show,
      showMobileInfo,
      goHome
    };
  },
};
</script>

<style lang="scss" scoped>
nav {
  height: 70px;
  -webkit-box-shadow: -2px 6px 11px -9px rgba(0, 0, 0, 0.3);
  box-shadow: -2px 6px 11px -9px rgba(0, 0, 0, 0.3);
 
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--p-lados-1);
    height: 100%;

    .logo {
        cursor: pointer;
      span {
        font-weight: 700;
        font-size: 1.15em;
      }
     
    }

    .items {
      transition: 0.2s ease-in-out;
      a {
        margin: 0 0.5rem;
        text-decoration: none;
        color: black;
        &:hover {
          color: rgb(94, 93, 93);
        }
      }

      a.router-link-exact-active {
        font-weight: 700;
      }
    }

    .icon-mobile {
      cursor: pointer;
      display: none;
      transition: 0.2s ease-in-out;

      .icon {
        width: 27px;
      }
    }
  }
}

@media screen and (max-width: 700px) {
  .items {
    display: none;
  }
  .icon-mobile {
    display: block !important;
  }
}
</style>