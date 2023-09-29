<template>
  <div>
    <keep-alive>
      <component :is="conteudo" />
    </keep-alive>
  </div>
</template>

<script>
import PublicarVaga from "@/components/views/PublicarVaga.vue";
import Home from "@/components/views/Home.vue";

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
  // created() {
  //   console.log("Criado", this.teste);
  // },
};
</script>