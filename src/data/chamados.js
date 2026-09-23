const chamadosIniciais = [
  {
    id: 1,
    titulo: 'Computador não liga',
    descricao: 'O computador da recepção não liga após a queda de energia.',
    solicitante: 'Deise Deise',
    categoria: 'Hardware',
    prioridade: 'Alta',
    status: 'Aberto',
    dataAbertura: '15/09/2026',
  },
  {
    id: 2,
    titulo: 'Sem acesso ao sistema de vendas',
    descricao: 'Usuário não consegue entrar no sistema de vendas, senha expirada.',
    solicitante: 'Gabriela Koridraws da Silva',
    categoria: 'Acesso',
    prioridade: 'Média',
    status: 'Em andamento',
    dataAbertura: '18/09/2026',
  },
  {
    id: 3,
    titulo: 'Internet lenta no setor financeiro',
    descricao: 'A conexão está muito lenta desde segunda-feira no setor financeiro.',
    solicitante: 'Ryan Vinicius',
    categoria: 'Rede',
    prioridade: 'Baixa',
    status: 'Resolvido',
    dataAbertura: '10/09/2026',
  },
]

export const categorias = ['Hardware', 'Software', 'Rede', 'Acesso', 'Outros']
export const prioridades = ['Baixa', 'Média', 'Alta']
export const listaStatus = ['Aberto', 'Em andamento', 'Resolvido']

export default chamadosIniciais
