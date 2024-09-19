import InputLabel from "../../UI/InputLabel";

function Formulario({ titulo, btnText, inputs, children}) {
  return (
    <main className="main container">
      <section className="section-cadastro card-login-cadastro">
        <form className="card-login-cadastro-conteudo">
          <h2>{titulo}</h2>
          {/* Inputs Label */}
          {inputs.map((input) => (
            <InputLabel
              key={input.id}
              label={input.label}
              id={input.id}
              type={input.type}
              placeholder={input.placeholder}
            />
          ))}
          {children}
          <button onClick="validarCadastro()" className="btn-login-cadastro">
            {btnText}
          </button>
        </form>
      </section>
    </main>
  );
}

export default Formulario;
