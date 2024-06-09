<template>
  <div class="checkout">
    <h1>Podsumowanie Zakupów</h1>
    <div v-if="cart.length">
      <div v-for="gem in cart" :key="gem.id" class="cart-item">
        <h2>{{ gem.name }}</h2>
        <p>{{ gem.price }} PLN</p>
      </div>
      <h2>Razem: {{ cartTotal }} PLN</h2>
      <button @click="confirmPurchase">Potwierdź Zakup</button>
    </div>
    <div v-else>
      <p>Koszyk jest pusty.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutPage",
  data() {
    return {
      cart: [],
    };
  },
  computed: {
    cartTotal() {
      return this.cart.reduce((total, gem) => total + gem.price, 0);
    },
  },
  methods: {
    confirmPurchase() {
      alert("Dziękujemy za zakup!");
      this.$router.push({ path: "/" });
    },
  },
  mounted() {
    const cart = this.$route.query.cart;
    if (cart) {
      this.cart = JSON.parse(cart);
    }
  },
};
</script>

<style>
.checkout {
  text-align: center;
}
.cart-item {
  border: 1px solid #ddd;
  margin: 10px;
  padding: 10px;
  width: 200px;
  display: inline-block;
}
</style>
