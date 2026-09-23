import CardModulo from '../components/CardModulo'

function Inicio() {
  return (
    <main className="conteudo-principal">
      <section className="boas-vindas">
        <h2>Bem-vindo(a)!</h2>
        <p>
          Aplicação desenvolvida por <strong>Ryan Leite</strong> nas
          disciplinas de Desenvolvimento Web III e Tópicos de Programação II.
        </p>
      </section>

      <section className="modulos">
        <CardModulo
          titulo="Gerenciamento de Chamados"
          descricao="Cadastre, consulte, altere e exclua chamados de suporte."
          rota="/chamados"
        />
      </section>
    </main>
  )
}

export default Inicio
