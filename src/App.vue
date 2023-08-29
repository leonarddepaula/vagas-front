<template>
  <div> <!--padrao kebab-case-->
    <h1>Componente App</h1>
    <button @click="desmontarComponente()">Desmontar Compo</button>
    <topo-padrao />
    <conteudo v-if="visibilidade"></conteudo>
  </div>
</template>

<script>
import Conteudo from "@/components/layouts/Conteudo.vue"; // o uso @ aponta para o dir SRC
import TopoPadrao from "./components/layouts/TopoPadrao.vue";

export default {
  name: "App",
  data: () => ({
    visibilidade: true,
  }),
  components: {
    Conteudo,
    TopoPadrao,
  },
  methods:{
    desmontarComponente(){
      this.visibilidade = false
    },
  },
};
</script>

<style scoped>

</style>
