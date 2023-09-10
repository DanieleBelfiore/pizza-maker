import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      quantity: null as number | null,
      recipe: false as boolean,
      recipeSuggestion: true as boolean,
      water: 121 as number,
      flour: 183 as number,
      yeast: 0.6 as number,
      salt: 4 as number,
    }
  },
  methods: {},
  mounted() { }
})