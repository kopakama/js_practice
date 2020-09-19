<template>
  <div class="pocket">
    <div class="pocket-header">
      <div class="row">
        <div class="col-sm-8 pocket-name-wrapper">
          <a :href="pocket.homepage">{{ pocket.name }}</a>
        </div>
        <div class="col-sm-4">
          <div class="package-buttons">
            <a
              class="button"
              target="_blank"
              rel="noopener"
              :href="pocket.homepage"
              title="Homepage"
            >
              <i class="fa fa-globe" aria-hidden="true"></i>
            </a>
            <a
              class="button"
              target="_blank"
              rel="nofollow"
              :href="pocket.github"
              title="GitHub"
            >
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="pocket-author">Author: {{ pocket.author }}</div>
          <span class="pocket-label" :title="pocket.lastversion">
            <i class="fa fa-tag" aria-hidden="true"></i>
            {{ pocket.lastversion }}
          </span>
          <div class="pocket-description">{{ pocket.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { computed } from "@vue/composition-api";

export default {
  name: "Pocket",
  props: ["pocket"]
};
</script>

<style scoped>
.pocket:last-child .pocket-header {
  border-bottom: none;
}
.pocket-name-wrapper a {
  color: #000;
  font-size: 20px;
  font-weight: bold;
}

.pocket-name-wrapper {
  margin-bottom: 5px;
}

.package-buttons {
  float: right;
}
.pocket-header {
  padding: 20px 0;
  border-bottom: 1px solid #e5e5e5;
}

.pocket-description {
  font-size: 15px;
  margin-top: 4px;
}

.pocket-author {
  margin-bottom: 5px;
}

.row {
  margin-left: -15px;
  margin-right: -15px;
}

.package-buttons .button {
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 1px solid #e5e5e5;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  padding: 10px;
  color: #000;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.package-buttons .button:hover {
  opacity: 1;
}
</style>
