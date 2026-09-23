import { Link, useNavigate, useParams } from 'react-router'
import FormularioChamado from '../components/FormularioChamado'

function EditarChamado({ chamados, aoAlterar }) {
  const { id } = useParams()
  const navigate = useNavigate()

  const chamadoEncontrado = chamados.find(
    (chamado) => chamado.id === Number(id)
  )

  function alterarChamado(dadosAlterados) {
    aoAlterar({ ...dadosAlterados, id: Number(id) })
    navigate('/chamados/listar', {
      state: { mensagem: 'Chamado alterado com sucesso!' },
    })
  }

  if (!chamadoEncontrado) {
    return (
      <main className="pagina">
        <h1>Chamado não encontrado</h1>

        <Link to="/chamados/listar" className="link-voltar">
          ← Voltar para a lista de chamados
        </Link>
      </main>
    )
  }

  return (
    <main className="pagina">
      <h1>Alterar chamado #{chamadoEncontrado.id}</h1>

      <FormularioChamado
        key={chamadoEncontrado.id}
        valoresIniciais={chamadoEncontrado}
        textoBotao="Salvar alterações"
        aoSalvar={alterarChamado}
      />

      <Link to="/chamados/listar" className="link-voltar">
        ← Voltar para a lista de chamados
      </Link>
    </main>
  )
}

export default EditarChamado
