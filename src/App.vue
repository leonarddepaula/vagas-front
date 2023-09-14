<template>
  <div>
    <!--padrao kebab-case-->
    <topo-padrao @navegar="componente = $event" />
    <vagas-favoritas></vagas-favoritas>
    <conteudo v-if="visibilidade" :conteudo="componente"></conteudo>
  </div>
</template>

<script>
import Conteudo from "@/components/layouts/Conteudo.vue"; // o uso @ aponta para o dir SRC
import VagasFavoritas from "@/components/comuns/VagasFavoritas.vue";
import TopoPadrao from "@/components/layouts/TopoPadrao.vue";

export default {
  name: "App",
  data: () => ({
    visibilidade: true,
    componente: "Home",
  }),
  components: {
    Conteudo,
    TopoPadrao,
    VagasFavoritas,
  },
};
</script>

<style scoped></style>
