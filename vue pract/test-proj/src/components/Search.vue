<template>
  <div class="container">
    <div class="search-input-wrapper">
      <input
        class="search-input"
        type="text"
        :value="libTitle"
        @input="handleSubmit"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";

export default {
  name: "Search",
  props: ["search"],
  setup({ search }, { emit }) {
    const libTitle = ref(search);

    return {
      libTitle,
      handleSubmit(event) {
        libTitle.value = event.target.value;
        event.preventDefault();
        emit("search", libTitle.value);
      }
    };
  }
};
</script>

<style scoped>
.search-input-wrapper {
  position: relative;
}

.search-input-wrapper:before {
  content: "\f002";
  font-family: FontAwesome;
  font-size: 15px;
  color: #444;
  width: 15px;
  height: 15px;
  display: inline-block;
  position: absolute;
  left: 18px;
  top: 20px;
  z-index: 1;
}
.search-input {
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
  width: 100%;
  display: block;
  padding: 18px 40px;
  border: 1px solid #008cff;
  border-radius: 3px;
  outline: 0;
}
</style>
