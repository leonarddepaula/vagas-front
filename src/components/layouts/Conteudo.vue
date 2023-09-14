<template>
  <div>
    <keep-alive>
      <component :is="conteudo" />
    </keep-alive>
  </div>
</template>

<script>
import PublicarVaga from "../views/PublicarVaga.vue";
import Home from "../views/Home.vue";

export default {
  name: "Conteudo",
  props: {
    conteudo: {
      type: String,
      riquired: true,
    },
  },
  components: {
    Home,
    PublicarVaga,
  },

  // lifecycle Hooks
  created() {
    console.log("Criado", this.teste);
  },
};
</script>

<style module>
.teste-1 {
  background-color: red;
}

#teste-2 {
  background-color: yellow;
}
</style>
