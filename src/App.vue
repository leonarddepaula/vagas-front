<template>
  <div> <!--padrao kebab-case-->
    <h1>Componente App</h1>
    <button @click="desmontarComponente()">Desmontar Compo</button>
    <topo-padrao :funcaoCallback="acao" />
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
    acao(p1, p2){
      console.log('Função de callback');
      console.log(p1);
      console.log(p2);
  
    }
  },
};
</script>

<style scoped>

</style>
