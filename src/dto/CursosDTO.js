export default class CursoDTO {
  constructor({
    id,
    cateroria,
    capa,
    titulo,
    parceiros,
    resumo,
    duracao,
    matriculados,
    criado_em,
    avaliacao,
    numero_avaliacoes,
    sobre,
    recursos_educacionais,
    objetivo_geral,
    objetivo_especifico,
    conteudo,
    creditos,
  }) {
    this.id = Number(id);
    this.categoria = cateroria;
    this.capa = capa;
    this.titulo = titulo;
    this.parceiros = parceiros;
    this.resumo = resumo;
    this.duracao = duracao;
    this.matriculados = Number(matriculados);
    this.criado_em = criado_em;
    this.avaliacao = Number(avaliacao);
    this.numero_avaliacoes = Number(numero_avaliacoes);
    this.sobre = sobre;
    this.recursos_educacionais = recursos_educacionais;
    this.objetivo_geral = objetivo_geral;
    this.objetivo_especifico = objetivo_especifico;
    this.conteudo = conteudo;
    this.creditos = creditos;
  }
}
