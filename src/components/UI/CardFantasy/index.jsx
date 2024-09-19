import ImgFuncionamento from "../../../assets/img-funcionamento.jpg";

export default function CardFantasy({ titulo, texto }) {
  return (
    <>
      <section className="funcionamento">
        <h2>{titulo}</h2>
        <p>{texto}</p>
        <div className="funcionamento-img">
          <img src={ImgFuncionamento} alt="Imagem do fantasy" />
        </div>
      </section>
    </>
  );
}
