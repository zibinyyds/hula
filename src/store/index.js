import { defineStore } from "pinia";

export const useTabStore = defineStore("tab", {
  state: () => {
    return { selected: 0 };
  },
  actions: {
    switch(index) {
      this.selected = index;
    }
  }
});

export const useAppStore = defineStore("app", {
  state: () => {
    return { top: 0 };
  },
  actions: {
    update(val) {
      this.top = val;
    }
  }
});
