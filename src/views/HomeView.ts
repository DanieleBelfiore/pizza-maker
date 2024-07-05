import { defineComponent } from "vue";

export default defineComponent({
  data()
  {
    return {
      quantity: null as number | null,
      recipe: false as boolean,
      recipeSuggestion: true as boolean,
      water: 116 as number,
      flour: 166 as number,
      yeast: 0.5 as number,
      salt: 3 as number,
    }
  },
  methods: {},
  mounted() { }
})