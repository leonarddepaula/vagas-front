<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vagas> </pesquisar-vagas>

      </div>
    </div>

    <div class="row mt-5">
      <div class="col-4">
        <Indicador titulo="Vagas Abertas" indicador="100"></Indicador>
      </div>

      <div class="col-4">
        <indicador titulo="Profissionais Cadastrados" indicador="225"></indicador>
              </div>

      <div class="col-4">
        <indicador titulo="Visitantes online" indicador="25"></indicador>
      </div>
    </div>
  </div>
</template>

<script>
import PesquisarVagas from '@/components/comuns/PesquisarVagas.vue';
import Indicador from '@/components/comuns/Indicador.vue'



export default {
    name: 'Home',
    components: {
      PesquisarVagas,
      Indicador
      
    },
    activated(){
      console.log('Componente ativado');
    },
    deactivated(){
      console.log('Componente desativado');
    },
    beforeUnmount() {
    console.log("antes de desmontar");
  },
  unmounted() {
    console.log("Desmontado");
  },
}
</script>

<style scoped>
 
</style>