import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import Cabecalho from './components/Cabecalho'
import Inicio from './pages/Inicio'
import Chamados from './pages/Chamados'
import ListaChamados from './pages/ListaChamados'
import CadastroChamado from './pages/CadastroChamado'
import EditarChamado from './pages/EditarChamado'
import chamadosIniciais from './data/chamados'

function App() {
  const [chamados, setChamados] = useState(chamadosIniciais)

  function adicionarChamado(novoChamado) {
    const chamadoComId = {
      ...novoChamado,
      id: Math.max(0, ...chamados.map((chamado) => chamado.id)) + 1,
    }

    setChamados((listaAtual) => [...listaAtual, chamadoComId])
  }

  function alterarChamado(chamadoAtualizado) {
    setChamados((listaAtual) =>
      listaAtual.map((chamado) =>
        chamado.id === chamadoAtualizado.id ? chamadoAtualizado : chamado
      )
    )
  }

  function excluirChamado(id) {
    setChamados((listaAtual) =>
      listaAtual.filter((chamado) => chamado.id !== id)
    )
  }

  return (
    <div className="aplicacao">
      <Cabecalho />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/chamados" element={<Chamados />} />
        <Route
          path="/chamados/listar"
          element={
            <ListaChamados chamados={chamados} aoExcluir={excluirChamado} />
          }
        />
        <Route
          path="/chamados/cadastrar"
          element={<CadastroChamado aoCadastrar={adicionarChamado} />}
        />
        <Route
          path="/chamados/editar/:id"
          element={
            <EditarChamado chamados={chamados} aoAlterar={alterarChamado} />
          }
        />
      </Routes>

      <footer className="rodape">Ryan Leite — Desenvolvimento Web III</footer>
    </div>
  )
}

export default App
