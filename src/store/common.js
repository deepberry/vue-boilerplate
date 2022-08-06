import { defineStore } from "pinia";

export const useCommonStore = defineStore({
    id: "commonStore",
    state: () => ({
        // count: 1
    }),
    actions: {
        // countPlusOne() {
        //     this.count++;
        // },
    },
});
