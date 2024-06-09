<template>
  <div id="app">
    <nav>
      <router-link to="/"><button>Home</button></router-link>
      <router-link to="/shop"><button>Sklep</button></router-link>
      <router-link to="/contact"><button>Kontakt</button></router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import "./styles.css";
</style>
