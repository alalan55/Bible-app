<template>
  <div class="content">
    <div class="blur"></div>
    <div class="modal-navbar">
      <div class="content-modal">
        <div class="close" @click="close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-square-x"
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
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M10 10l4 4m0 -4l-4 4" />
          </svg>
        </div>

        <div class="items">
          <router-link :to="{ name: 'Home' }" @click="close">Home</router-link>
          <router-link :to="{ name: 'Bibles' }" @click="close"
            >Bibles</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(props, { emit }) {
    const close = () => {
      emit("closeModal");
    };
    return {
      close,
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  .blur {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(221, 221, 221);
  }

  .modal-navbar {
    position: fixed;
    top: 15px;
    bottom: 15px;
    left: 15px;
    right: 15px;
    border-radius: 15px;
    background: white;
    -webkit-box-shadow: -3px 3px 10px -6px rgba(0, 0, 0, 0.91);
    box-shadow: -3px 3px 10px -6px rgba(0, 0, 0, 0.91);

    .content-modal {
      height: 100%;
      width: 100%;
      position: relative;

      .close {
        position: absolute;
        right: 10px;
        top: 15px;
        cursor: pointer;
      }
      .items {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        a {
          text-decoration: none;
          font-size: 1.9em;
          margin: 0.8rem 0;
          color: black;
          font-weight: 300;

          &:hover {
            color: rgb(94, 93, 93);
          }
        }

        a.router-link-exact-active {
          font-weight: 700;
        }
      }
    }
  }
}
</style>