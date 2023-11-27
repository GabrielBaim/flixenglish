import style from "../components/Hero.module.css";
import Logo from "../assets/images/LOGO-FLIXENGLISH 1.png";
import Calendar from "../assets/images/calendar.svg";
import Background from "../assets/images/BG-INICIAL-DESKTOP1.jpg";

export function Hero() {
  const estilo = {
    backgroundImage: `url(${Background})`,
  };
  return (
    <div className={style.containerHero} style={estilo}>
      <div className={style.innercontent}>
        <div className={style.heroLeftSide}>
          <div className={style.header}>
            <img src={Logo} className={style.logo} />
            <div>
              <img src={Calendar} className={style.calendar} />
              <p>
                De 16 a 22 de<br></br> Maio, às 20h
              </p>
            </div>
          </div>
          <div className={style.headlineHero}>
            <h1>
              Domine o Inglês em Menos de um Ano com{" "}
              <span className={style.faixa}>Filmes e Séries</span> !
            </h1>
            <p>
              Descubra o método definitivo para aprender inglês de forma
              divertida e eficaz de uma vez por todas, enquanto assiste os seus
              filmes e séries preferidas.
            </p>
            <form>
              <input type="text" placeholder="Digite seu nome…" />
              <input type="text" placeholder="Digite seu melhor e-mail…" />
              <button type="submit">QUERO PARTICIPAR DO EVENTO GRATUITO</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
