<template>
  <footer class="pad-15-hor pad-15-ver footer">
    <div class="container">
      <div class="footer-content">
        Разработчик:
        <a :href="authorPage" target="_blank" rel="noopener noreferrer">
          {{ authorName }}
        </a>
        <span class="github-button">
          <a
            class="button"
            target="_blank"
            rel="nofollow"
            :href="authorGithub"
            title="GitHub"
          >
            <i class="fa fa-github" aria-hidden="true"></i>
          </a>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: ["author", "github", "page"],
  setup({ author, github, page }) {
    return {
      authorName: author,
      authorGithub: github,
      authorPage: page
    };
  }
};
</script>

<style scoped>
.github-button .button {
  display: inline-block;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  padding: 5px;
  color: rgb(11, 42, 54);
  opacity: 0.6;
  transition: opacity 0.2s;
}

.github-button .button:hover {
  opacity: 1;
}

.footer {
  margin-top: 5px;
  border-top: 1px solid #e5e5e5;
}
</style>
