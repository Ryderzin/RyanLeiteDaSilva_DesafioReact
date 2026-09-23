import { Link, useNavigate } from 'react-router'
import FormularioChamado from '../components/FormularioChamado'

function dataDeHoje() {
  const hoje = new Date()
  const mes = String(hoje.getMonth() + 1).padStart(2, '0')
  const dia = String(hoje.getDate()).padStart(2, '0')
  return `${dia}/${mes}/${hoje.getFullYear()}`
}

function CadastroChamado({ aoCadastrar }) {
  const navigate = useNavigate()

  const valoresIniciais = {
    titulo: '',
    descricao: '',
    solicitante: '',
    categoria: '',
    prioridade: '',
    status: 'Aberto',
    dataAbertura: dataDeHoje(),
  }

  function cadastrarChamado(novoChamado) {
    aoCadastrar(novoChamado)
    navigate('/chamados/listar', {
      state: { mensagem: 'Chamado cadastrado com sucesso!' },
    })
  }

  return (
    <main className="pagina">
      <h1>Cadastrar novo chamado</h1>

      <FormularioChamado
        valoresIniciais={valoresIniciais}
        textoBotao="Cadastrar chamado"
        aoSalvar={cadastrarChamado}
      />

      <Link to="/chamados" className="link-voltar">
        ← Voltar para Gerenciamento de Chamados
      </Link>
    </main>
  )
}

export default CadastroChamado
