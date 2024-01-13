export default class TransparenciaDTO {
  constructor(dados_gerais, usuarios_por_curso, usuarios_por_estado) {
    this.usuarios_registrados = dados_gerais.usuarios_registrados;
    this.incricoes_realizadas = dados_gerais.incricoes_realizadas;
    this.cursos_ativos = dados_gerais.cursos_ativos;
    this.direito_certificacao = dados_gerais.direito_certificacao;
    this.investimento_medio_curso = dados_gerais.investimento_medio_curso;
    this.investimento_medio_aluno = dados_gerais.investimento_medio_aluno;

    this.usuarios_por_curso = usuarios_por_curso.map((curso) => ({
      curso: curso.curso,
      usuarios: curso.usuarios,
    }));
    this.usuarios_por_estado = usuarios_por_estado.map((estado) => ({
      estados: estado.estados,
      usuarios_totais: estado.usuarios_totais,
      direito_certificacao: estado.direito_certificacao,
    }));
  }
}
