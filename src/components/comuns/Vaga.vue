<template>
  <div class="card">
    <div class="card-header bg-dark text-white">{{  titulo }}</div>
    <div class="card-body">
      <p>{{ descricao }}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"
        >Salário: R$ {{ salario }} | Modalidade: {{ modalidade }} | Tipo: {{ tipo }} | Publicação: {{ publicacao }}
        10/11/2021</small
      >
    </div>
  </div>
</template>

<script>
export default {
    name:'Vaga',
    props: ['titulo', 'descricao', 'salario', 'modalidade', 'tipo', 'publicacao']
};
</script>

<style></style>
