<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vagas> </pesquisar-vagas>
      </div>
    </div>

    <lista-vagas>
      <!-- <template v-slot:titulo="slotProps">
        {{ slotProps }}
      </template>

      <template v-slot:default="slotProps">
        {{ slotProps }}
      </template>

      <template v-slot:rodape="slotProps">
        {{ slotProps }}
      </template> -->
    </lista-vagas>

    <div class="row mt-5">
      <div class="col-4">
        <Indicador
          titulo="Vagas Abertas"
          indicador="100"
          bg="bg-dark"
          color="text-white"
        ></Indicador>
      </div>

      <div class="col-4">
        <indicador
          titulo="Profissionais Cadastrados"
          indicador="225"
          bg="bg-dark"
          color="text-white"
        ></indicador>
      </div>

      <div class="col-4">
        <indicador
          titulo="Visitantes online"
          :indicador="usuariosOnline"
          bg="bg-ligth"
          color="text-dark"
        ></indicador>
      </div>
    </div>
  </div>
</template>

<script>
import PesquisarVagas from "@/components/comuns/PesquisarVagas.vue";
import Indicador from "@/components/comuns/Indicador.vue";
import ListaVagas from "@/components/comuns/ListaVagas.vue";

export default {
  name: "Home",
  components: {
    PesquisarVagas,
    Indicador,
    ListaVagas,
  },
  data: () => ({
    usuariosOnline: 0,
  }),

  methods: {
    getUsuariosOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 101);
    },
  },
  created() {
    setInterval(this.getUsuariosOnline, 1500);
  },
};
</script>
