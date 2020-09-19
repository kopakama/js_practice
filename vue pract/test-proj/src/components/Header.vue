/* Стиль аписания компонента Vue: шаблон, скрипт, стиль.
<template>
  <header class="pad-15-hor pad-15-ver header">
    <div><img src="@/assets/logo.png" width="25px" /> {{ titleText }}</div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["title"],
  setup({ title }) {
    return { titleText: title };
  }
};
</script>

<style scoped>
.header {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
</style>
