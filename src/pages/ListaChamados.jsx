import { useState } from 'react'
import { Link, useLocation } from 'react-router'

function classeEtiqueta(texto) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/\s+/g, '-')
}

function ListaChamados({ chamados, aoExcluir }) {
  const location = useLocation()
  const [mensagem, setMensagem] = useState(location.state?.mensagem ?? '')

  function confirmarExclusao(chamado) {
    const confirmacao = window.confirm(
      `Deseja realmente excluir o chamado "${chamado.titulo}"?`
    )

    if (confirmacao) {
      aoExcluir(chamado.id)
      setMensagem('Chamado excluído com sucesso!')
    }
  }

  return (
    <main className="pagina">
      <div className="topo-pagina">
        <h1>Lista de Chamados</h1>
        <Link to="/chamados/cadastrar" className="botao-principal">
          + Novo chamado
        </Link>
      </div>

      {mensagem && <p className="mensagem-sucesso">{mensagem}</p>}

      {chamados.length === 0 ? (
        <p className="lista-vazia">Nenhum chamado cadastrado.</p>
      ) : (
        <ul className="lista-chamados">
          {chamados.map((chamado) => (
            <li key={chamado.id}>
              <div className="chamado-cabecalho">
                <strong>
                  #{chamado.id} — {chamado.titulo}
                </strong>
                <div className="etiquetas">
                  <span
                    className={`etiqueta prioridade-${classeEtiqueta(chamado.prioridade)}`}
                  >
                    Prioridade: {chamado.prioridade}
                  </span>
                  <span
                    className={`etiqueta status-${classeEtiqueta(chamado.status)}`}
                  >
                    {chamado.status}
                  </span>
                </div>
              </div>

              <p className="chamado-descricao">{chamado.descricao}</p>

              <dl className="chamado-dados">
                <div>
                  <dt>Solicitante</dt>
                  <dd>{chamado.solicitante}</dd>
                </div>
                <div>
                  <dt>Categoria</dt>
                  <dd>{chamado.categoria}</dd>
                </div>
                <div>
                  <dt>Prioridade</dt>
                  <dd>{chamado.prioridade}</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>{chamado.status}</dd>
                </div>
                <div>
                  <dt>Data de abertura</dt>
                  <dd>{chamado.dataAbertura}</dd>
                </div>
              </dl>

              <div className="acoes-chamado">
                <Link
                  to={`/chamados/editar/${chamado.id}`}
                  className="botao-alterar"
                >
                  Alterar
                </Link>
                <button
                  type="button"
                  className="botao-excluir"
                  onClick={() => confirmarExclusao(chamado)}
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <Link to="/chamados" className="link-voltar">
        ← Voltar para Gerenciamento de Chamados
      </Link>
    </main>
  )
}

export default ListaChamados
