<template>
  <div>
    <!--padrao kebab-case-->
    <topo-padrao @navegar="componente = $event" />
    <conteudo v-if="visibilidade" :conteudo="componente"></conteudo>
  </div>
</template>

<script>
import Conteudo from "@/components/layouts/Conteudo.vue"; // o uso @ aponta para o dir SRC
import TopoPadrao from "./components/layouts/TopoPadrao.vue";

export default {
  name: "App",
  data: () => ({
    visibilidade: true,
    componente: "Home",
  }),
  components: {
    Conteudo,
    TopoPadrao,
  },
};
</script>

<style scoped></style>
