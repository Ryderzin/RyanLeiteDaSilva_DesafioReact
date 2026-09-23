import { Link } from 'react-router'
import CardModulo from '../components/CardModulo'

function Chamados() {
  return (
    <main className="pagina">
      <h1>Gerenciamento de Chamados</h1>
      <p>Escolha uma das opções:</p>

      <section className="modulos">
        <CardModulo
          titulo="Listar chamados"
          descricao="Consulte todos os chamados cadastrados, altere ou exclua."
          rota="/chamados/listar"
        />
        <CardModulo
          titulo="Cadastrar novo chamado"
          descricao="Registre um novo chamado de suporte."
          rota="/chamados/cadastrar"
        />
      </section>

      <Link to="/" className="link-voltar">
        ← Voltar para a página inicial
      </Link>
    </main>
  )
}

export default Chamados
