import { useState } from 'react'
import { categorias, prioridades, listaStatus } from '../data/chamados'

function dataValida(data) {
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(data)) {
    return false
  }

  const [dia, mes, ano] = data.split('/').map(Number)
  const dataConvertida = new Date(ano, mes - 1, dia)

  return (
    dataConvertida.getFullYear() === ano &&
    dataConvertida.getMonth() === mes - 1 &&
    dataConvertida.getDate() === dia
  )
}

function FormularioChamado({ valoresIniciais, textoBotao, aoSalvar }) {
  const [valores, setValores] = useState(valoresIniciais)
  const [erros, setErros] = useState({})

  function alterarCampo(evento) {
    const { name, value } = evento.target

    setValores((valoresAtuais) => ({
      ...valoresAtuais,
      [name]: value,
    }))
    setErros((errosAtuais) => ({
      ...errosAtuais,
      [name]: '',
    }))
  }

  function validarFormulario() {
    const novosErros = {}

    if (valores.titulo.trim().length < 5) {
      novosErros.titulo = 'O título deve possuir no mínimo 5 caracteres.'
    }
    if (valores.descricao.trim().length < 10) {
      novosErros.descricao =
        'A descrição deve possuir no mínimo 10 caracteres.'
    }
    if (valores.solicitante.trim().length < 3) {
      novosErros.solicitante =
        'O solicitante deve possuir no mínimo 3 caracteres.'
    }
    if (!valores.categoria) {
      novosErros.categoria = 'Selecione uma categoria.'
    }
    if (!valores.prioridade) {
      novosErros.prioridade = 'Selecione uma prioridade.'
    }
    if (!valores.status) {
      novosErros.status = 'Selecione um status.'
    }
    if (!dataValida(valores.dataAbertura)) {
      novosErros.dataAbertura =
        'Informe uma data válida no formato DD/MM/AAAA.'
    }

    setErros(novosErros)
    return Object.keys(novosErros).length === 0
  }

  function salvarChamado(evento) {
    evento.preventDefault()

    if (!validarFormulario()) {
      return
    }

    aoSalvar({
      ...valores,
      titulo: valores.titulo.trim(),
      descricao: valores.descricao.trim(),
      solicitante: valores.solicitante.trim(),
    })
  }

  function classeCampo(campo) {
    return erros[campo] ? 'campo-invalido' : ''
  }

  function mensagemErro(campo) {
    return (
      erros[campo] && <span className="mensagem-erro">{erros[campo]}</span>
    )
  }

  return (
    <form className="formulario" onSubmit={salvarChamado} noValidate>
      <label htmlFor="titulo">Título</label>
      <input
        id="titulo"
        name="titulo"
        type="text"
        value={valores.titulo}
        onChange={alterarCampo}
        className={classeCampo('titulo')}
      />
      {mensagemErro('titulo')}

      <label htmlFor="descricao">Descrição</label>
      <textarea
        id="descricao"
        name="descricao"
        rows="4"
        value={valores.descricao}
        onChange={alterarCampo}
        className={classeCampo('descricao')}
      />
      {mensagemErro('descricao')}

      <label htmlFor="solicitante">Solicitante</label>
      <input
        id="solicitante"
        name="solicitante"
        type="text"
        value={valores.solicitante}
        onChange={alterarCampo}
        className={classeCampo('solicitante')}
      />
      {mensagemErro('solicitante')}

      <div className="grupo-campos">
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            name="categoria"
            value={valores.categoria}
            onChange={alterarCampo}
            className={classeCampo('categoria')}
          >
            <option value="">Selecione...</option>
            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
          {mensagemErro('categoria')}
        </div>

        <div className="campo">
          <label htmlFor="prioridade">Prioridade</label>
          <select
            id="prioridade"
            name="prioridade"
            value={valores.prioridade}
            onChange={alterarCampo}
            className={classeCampo('prioridade')}
          >
            <option value="">Selecione...</option>
            {prioridades.map((prioridade) => (
              <option key={prioridade} value={prioridade}>
                {prioridade}
              </option>
            ))}
          </select>
          {mensagemErro('prioridade')}
        </div>

        <div className="campo">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={valores.status}
            onChange={alterarCampo}
            className={classeCampo('status')}
          >
            <option value="">Selecione...</option>
            {listaStatus.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          {mensagemErro('status')}
        </div>

        <div className="campo">
          <label htmlFor="dataAbertura">Data de abertura</label>
          <input
            id="dataAbertura"
            name="dataAbertura"
            type="text"
            placeholder="DD/MM/AAAA"
            maxLength="10"
            value={valores.dataAbertura}
            onChange={alterarCampo}
            className={classeCampo('dataAbertura')}
          />
          {mensagemErro('dataAbertura')}
        </div>
      </div>

      <button type="submit" className="botao-principal">
        {textoBotao}
      </button>
    </form>
  )
}

export default FormularioChamado
