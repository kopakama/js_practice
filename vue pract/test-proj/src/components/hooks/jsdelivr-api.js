"use strict";

import { reactive, watchEffect } from "@vue/composition-api";

export const useJsdelivrApi = () => {
  const state = reactive({
    search: "jquery",
    loading: true,
    pockets: [],
    totalPockets: 0,
    perPage: 9,
    currentPage: 1
  });

  watchEffect(() => {
    const JSDELIVR_API_URL = `https://api.jsdelivr.com/v1/jsdelivr/libraries?name=${state.search}*`;

    fetch(JSDELIVR_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        var options = {
          params: {
            client_id: appId,
            page: page,
            per_page: this.perPage
          }
        }
        state.pockets = jsonResponse;
        state.loading = false;

        state.totalPockets = parseInt(state.pockets.headers.get('x-total'))

        state.currentPage = page
      });
  });

  return state;
};
