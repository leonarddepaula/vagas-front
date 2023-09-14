<template>
  <div>
    <div class="divVagasFavoritas float-right">
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Vagas Favoritas
      </button>
    </div>

    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">
          Vagas Favoritas &#128151;
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">...</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VagasFavoritas",
  mounted(){
    this.emitter.on('eventoGlobal1', (p) => {
      console.log('componente VagasFavoritas', p);
    })
  },
};
</script>

<style scoped>
.divVagasFavoritas {
  position:relative;
  z-index: 1;
  top: 20px;
  right: 5px;
  text-align: right;
  margin-bottom: 20px;
}
</style>
