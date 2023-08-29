<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="atualizarComponente()">Atualizar</button>
    <button @click="conteudo = 'home'">Home</button>
    <button @click="conteudo = 'publicar-vaga'">Publicar Vaga</button>
    <!-- renderizar de modo dinâmico os componentes home e publicar-vaga -->

    <!-- <home></home>
  <publicar-vaga></publicar-vaga> -->
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
  components: {
    Home,
    PublicarVaga,
  },
  data: () => ({
    teste: "O componente foi criado",
    title: "Componente conteudo",
    conteudo: 'home'
  }),
  methods: {
    atualizarComponente() {
      this.title += "*";
    },
  },
  // lifecycle Hooks
  created() {
    console.log("Criado", this.teste);
  },
  /*
  beforeCreate() {
    console.log("Antes de criar", this.teste);
  },
  
  beforeMount() {
    console.log("Antes de montar o template");
  },
  mounted() {
    console.log("Montado");
  },
  beforeUpdate() {
    console.log("Antes de atualizar");
  },
  updated() {
    console.log("Atualizado");
  },
  beforeUnmount() {
    console.log("antes de desmontar");
  },
  unmounted() {
    console.log("Desmontado");
  },
    errorCaptured(){
      console.log('Capitura de um ERROR');
    },
    renderTracked(){
      console.log('re-renderização restreada');
    },
    renderTriggered(){
      console.log('re-renderização acionada');
    },
    activated(){
      console.log('Componente ativado');
    },
    deactivated(){
      console.log('Componente desativado');
    }
     */
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
