<template>
  <h1>Componente Home</h1>
</template>

<script>
export default {
    name: 'Home',
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