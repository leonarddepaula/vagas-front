<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <h4>Apresente a sua vaga para milhares de profissionais e de graça</h4>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Titulo da Vaga</label>
        <input type="text" class="form-control" v-model="titulo" />
        <div class="form-text">Por exemplo: Progamador JavaScript e VueJs.</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Descrição</label>
        <textarea
          type="text"
          class="form-control"
          v-model="descricao"
        ></textarea>
        <div class="form-text">Informe o salário.</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Salário</label>
        <input type="number" class="form-control" v-model="salario" />
        <div class="form-text">Informe o salário.</div>
      </div>

      <div class="col">
        <label class="form-label">Modalidade</label>
        <select class="form-select" v-model="modalidade">
          <option value="" disabled>--Selecione</option>
          <option value="1">Home Office</option>
          <option value="2">Presencial</option>
        </select>
        <div class="form-text">Informe o modelo de trabalho</div>
      </div>

      <div class="col">
        <label class="form-label">Tipo</label>
        <select class="form-select" v-model="tipo">
          <option value="" disabled>--Selecione</option>
          <option value="1">CLT</option>
          <option value="2">PJ</option>
        </select>
        <div class="form-text">Informe o modelo de contratação</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <button type="submit" class="btn btn-primary" @click="salvarVaga()">
          Cadastrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicarVaga",
  data: () => ({
    titulo: "",
    descricao: "",
    salario: "",
    modalidade: "",
    tipo: "",
  }),
  methods: {
    salvarVaga() {
      let tempoDecorrrido = Date.now();
      let dataAtual = new Date(tempoDecorrrido);

      let vagas = JSON.parse(localStorage.getItem("vagas"));
      console.log(vagas);

      if (!vagas) vagas = [];

      vagas.push({
        titulo: this.titulo,
        descricao: this.descricao,
        salario: this.salario,
        modalidade: this.modalidade,
        tipo: this.tipo,
        publicacao: dataAtual.toISOString(),
      });

      if (this.validaFormulario()) {
        localStorage.setItem("vagas", JSON.stringify(vagas));

        this.emitter.emit("alerta", {
          tipo: 'sucesso',
          titulo: `A vaga ${this.titulo} foi casdrata com Sucesso!`,
          descricao: "A vaga já pode ser consultada  na plataforma",
        }); 

        this.resetaFormularioCadastroVaga();
      } else {
        this.emitter.emit("alerta", {
          tipo: 'erro',
          titulo: "-_- Opsss... Não foi posssivel realizar o cadastro!",
          descricao: "aprece que que Você esqueceu de preeencher algum campo",
        });
      }

    },
    resetaFormularioCadastroVaga() {
      (this.titulo = ""),
        (this.descricao = ""),
        (this.salario = ""),
        (this.modalidade = ""),
        (this.tipo = "");
    },
    validaFormulario() {
      let valido = true;
      if (this.titulo === "") valido = false;
      if (this.descricao === "") valido = false;
      if (this.salario === "") valido = false;
      if (this.modalidade === "") valido = false;
      if (this.tipo === "") valido = false;

      return valido;
    },
  },
};
</script>
