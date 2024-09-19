import Formulario from "../components/Feature/Formulario";

function Login() {
  
  const inputs = [
    {
      id: "usuarioCd",
      label: "Nome de Usuário",
      type: "text",
      placeholder: "Seu nome",
    },
    {
      id: "senhaCd",
      label: "Senha",
      type: "password",
      placeholder: "*******",
    },
  ];

  return (
    <Formulario 
    titulo={"Login"} 
    btnText={"Entrar"} 
    inputs={inputs}
    >
      <p id="dica"></p>
      <p className="link-cadastro">
        Não tem cadastro? <a href="./cadastro">Clique aqui</a>
      </p>
    </Formulario>
  );
}

export default Login;
