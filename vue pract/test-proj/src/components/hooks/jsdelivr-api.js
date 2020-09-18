"use strict";

import { reactive, watchEffect } from "@vue/composition-api";
export const useJsdelivrApi = () => {
  const state = reactive({
    search: "jquery",
    loading: true,
    pockets: []
  });

  watchEffect(() => {
    const JSDELIVR_API_URL = `https://api.jsdelivr.com/v1/jsdelivr/libraries?name=${state.search}*`;

    fetch(JSDELIVR_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        state.pockets = jsonResponse;
        state.loading = false;
      });
  });

  return state;
};
