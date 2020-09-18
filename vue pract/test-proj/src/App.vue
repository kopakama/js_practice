<template>
  <div id="app">
    <Header :title="'Jsdelivr Search'" />
    <Search :search="state.search" @search="handleSearch" />
    <div class="pockets">
      <Pocket
        v-for="pocket in state.pockets"
        :key="pocket.name"
        :pocket="pocket"
      />
    </div>
    <Paginate
      :page-count="Math.ceil(state.pockets.length / 10)"
      :click-handler="pageChangeHandler"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagintaion'"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Search from "@/components/Search.vue";
import Pocket from "@/components/Pocket.vue";

import { useJsdelivrApi } from "./components/hooks/jsdelivr-api";

export default {
  name: "app",
  components: { Header, Search, Pocket },
  methods: {
    pageChangeHandler() {}
  },
  setup() {
    const state = useJsdelivrApi();

    return {
      state,
      handleSearch(searchTerm) {
        state.loading = true;
        state.search = searchTerm;
        console.log(state.pockets[0].name);
      }
    };
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
