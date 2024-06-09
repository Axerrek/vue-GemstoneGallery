<template>
  <div class="main">
    <h1>Podsumowanie Zakupów</h1>
    <div v-if="cartItems.length" class="cart-items">
      <div v-for="gem in cartItems" :key="gem.id" class="cart-item">
        <h2>{{ gem.name }} x {{ gem.quantity }}</h2>
        <p>{{ gem.price * gem.quantity }} PLN</p>
      </div>
    </div>
    <div v-else>
      <p>Koszyk jest pusty.</p>
    </div>
    <div v-if="cartItems.length">
      <h2>Razem: {{ cartTotal }} PLN</h2>
      <button @click="confirmPurchase">Potwierdź Zakup</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutPage",
  data() {
    return {
      cartItems: [],
    };
  },
  computed: {
    cartTotal() {
      return this.cartItems.reduce(
        (total, gem) => total + gem.price * gem.quantity,
        0
      );
    },
  },
  methods: {
    confirmPurchase() {
      alert("Dziękujemy za zakup!");
      this.$router.push({ name: "Home" });
    },
  },
  mounted() {
    const cart = localStorage.getItem("cart");
    if (cart) {
      this.cartItems = JSON.parse(cart);
    }
  },
};
</script>
