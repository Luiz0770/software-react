import Formulario from "../components/Feature/Formulario";

function Cadastro() {
  
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
    {
      id: "confirmarSenha",
      label: "Confirmar Senha",
      type: "password",
      placeholder: "*******",
    },
  ];

  return (
    <>
      <Formulario
        titulo={"Cadastro"}
        btnText={"Cadastrar"}
        inputs={inputs}
      ></Formulario>
    </>
  );
}

export default Cadastro;
