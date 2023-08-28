<template>
  <h1>Componente Conteúdo</h1>
  <p>Propriedade Style: {{ $style }}</p>
  <div :class="$style['teste-1']">class teste-1</div>
  <div :id="$style['teste-2']">ID teste-2</div>
  <home></home>
  <publicar-vaga></publicar-vaga>
</template>

<script>
import PublicarVaga from '../views/PublicarVaga.vue';
import Home from '../views/Home.vue'

export default {
    name: 'Conteudo',
    components: {
      PublicarVaga,
      Home
    }
}
</script>

<style module>


.teste-1{
  background-color: red;
}

#teste-2 {
  background-color: yellow;
}

</style>