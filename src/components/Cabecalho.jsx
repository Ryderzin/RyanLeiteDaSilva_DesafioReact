import { Link } from 'react-router'

function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="cabecalho-conteudo">
        <div>
          <h1>Sistema de Chamados</h1>
          <p>Aluno: Ryan Leite</p>
        </div>

        <nav className="menu">
          <Link to="/">Início</Link>
          <Link to="/chamados/listar">Listar</Link>
          <Link to="/chamados/cadastrar">Cadastrar</Link>
        </nav>
      </div>
    </header>
  )
}

export default Cabecalho
