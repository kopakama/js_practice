<template>
  <div id="app">
    <Header :title="'Jsdelivr Search'" />
    <Search :search="state.search" @search="handleSearch" />
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      align="center"
      aria-controls="pockets"
    ></b-pagination>

    <div class="pockets">
      <div class="container">
        <Pocket
          v-for="pocket in pocketsSlice"
          :key="pocket.name"
          :pocket="pocket"
        />
      </div>
    </div>

    <Footer
      :author="'Симаков Артем'"
      :page="'https://vk.com/smkv_art'"
      :github="'gf'"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Search from "@/components/Search.vue";
import Pocket from "@/components/Pocket.vue";
import Footer from "@/components/Footer.vue";

import { useJsdelivrApi } from "./components/hooks/jsdelivr-api";

export default {
  name: "app",
  components: { Header, Search, Pocket, Footer },
  methods: {
    pageChangeHandler() {}
  },
  setup() {
    const state = useJsdelivrApi();

    return {
      perPage: 10,
      currentPage: 1,
      items: state.pockets,

      state,
      handleSearch(searchTerm) {
        state.loading = true;
        state.search = searchTerm;
      }
    };
  },
  computed: {
    pocketsSlice() {
      return this.state.pockets.slice(
        10 * (this.currentPage - 1),
        10 * this.currentPage
      );
    },
    rows() {
      return this.state.pockets.length;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.pad-15-hor {
  padding-left: 15px;
  padding-right: 15px;
}
.pad-15-ver {
  padding-top: 15px;
  padding-bottom: 15px;
}
.green {
  color: green;
}

.pagination {
  margin-top: 30px;
  margin-bottom: 1.7rem;
}

@media screen and (max-width: 550px) {
  .min-width-160 {
    min-width: 160px;
  }
  .max-width-160 {
    max-width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    text-align: right;
  }
}
</style>
