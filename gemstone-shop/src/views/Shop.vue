<template>
  <div class="main">
    <h1>Sklep z Kamieniami Szlachetnymi</h1>
    <button @click="goToCheckout">Przejdź do kasy ({{ cartTotal }} PLN)</button>
    <div class="product-list">
      <div v-for="gem in gems" :key="gem.id" class="product">
        <img :src="gem.image" :alt="gem.name" class="product-image" />
        <h2>{{ gem.name }}</h2>
        <h3>{{ gem.price }} PLN</h3>
        <button @click="addToCart(gem)">Dodaj do koszyka</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopPage",
  data() {
    return {
      gems: [
        {
          id: 1,
          name: "Diament",
          price: 5000,
          image: require("@/assets/diamond.png"),
        },
        {
          id: 2,
          name: "Szafir",
          price: 3000,
          image: require("@/assets/sapphire.png"),
        },
        {
          id: 3,
          name: "Rubin",
          price: 4000,
          image: require("@/assets/ruby.png"),
        },
      ],
      cart: [],
    };
  },
  computed: {
    cartTotal() {
      return this.cart.reduce(
        (total, gem) => total + gem.price * gem.quantity,
        0
      );
    },
  },
  methods: {
    addToCart(gem) {
      const cartItem = this.cart.find((item) => item.id === gem.id);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        this.cart.push({ ...gem, quantity: 1 });
      }
    },
    goToCheckout() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
      this.$router.push({ name: "Checkout" });
    },
  },
};
</script>
