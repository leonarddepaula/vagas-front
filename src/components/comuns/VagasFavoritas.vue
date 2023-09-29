<template>
  <div>
    <div class="divVagasFavoritas float-right">
      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight">
        Vagas Favoritas
      </button>
    </div>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">
          Vagas Favoritas &#128151;
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="list-group">
          <li class="list-group-item" v-for="(vaga, index) in vagas" :key="index">{{ vaga }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VagasFavoritas",
  data: () => ({
    vagas: []
  }),
  mounted() {
    this.emitter.on('favoritarVaga', (titulo) => {
      this.vagas.push(titulo)
    })

    this.emitter.on('desfavoritarVaga', (titulo) => {
      let indiceArray = this.vagas.indexOf(titulo)
      if (indiceArray !== -1) {
        this.vagas.splice(indiceArray, 1) // remover um elemento apartir de um indice do array
      }
    })
  },
};
</script>

<style scoped>
.divVagasFavoritas {
  position: relative;
  z-index: 1;
  top: 20px;
  right: 5px;
  text-align: right;
  margin-bottom: 20px;
}
</style>
