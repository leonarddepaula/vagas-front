<template>
  <div>
    <!--padrao kebab-case-->
    <topo-padrao @navegar="componente = $event" />
    <alerta v-if="exibirAlerta"/>
    <vagas-favoritas></vagas-favoritas>
    <conteudo v-if="visibilidade" :conteudo="componente"></conteudo>
  </div>
</template>

<script>
import Alerta from "@/components/comuns/Alerta.vue";
import Conteudo from "@/components/layouts/Conteudo.vue"; // o uso @ aponta para o dir SRC
import VagasFavoritas from "@/components/comuns/VagasFavoritas.vue";
import TopoPadrao from "@/components/layouts/TopoPadrao.vue";

export default {
  name: "App",
  data: () => ({
    visibilidade: true,
    componente: "Home",
    exibirAlerta: false
  }),
  components: {
    Alerta,
    Conteudo,
    TopoPadrao,
    VagasFavoritas,
  },
  mounted(){
    this.emitter.on('alerta', () =>{
      this.exibirAlerta = true
      setTimeout(()=> this.exibirAlerta = false, 4000)
      console.log('Apresentar a msg de laerta customizada');
    })
  }
};
</script>
