import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      quantity: null as number | null,
      doughWeight: 280 as number,
      hydration: 70 as number,
      saltPercentage: 2.5 as number,
      yeastPercentage: 0.3 as number
    }
  },
  computed: {
    totalPercentage(): number {
      return 100 + this.hydration + this.saltPercentage + this.yeastPercentage;
    },
    flour(): number {
      return (this.doughWeight / this.totalPercentage) * 100;
    },
    water(): number {
      return (this.doughWeight / this.totalPercentage) * this.hydration;
    },
    salt(): number {
      return (this.doughWeight / this.totalPercentage) * this.saltPercentage;
    },
    yeast(): number {
      return (this.doughWeight / this.totalPercentage) * this.yeastPercentage;
    }
  },
  methods: {
    increment() {
      this.quantity = (this.quantity || 0) + 1;
      if (this.quantity > 100) this.quantity = 100;
    },
    decrement() {
      if (this.quantity && this.quantity > 1) {
        this.quantity--;
      } else {
        this.quantity = 1;
      }
    }
  },
  mounted() { }
})