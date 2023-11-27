import style from "./Fourth.module.css";
import BgCta from "../../assets/images/3a12bda0857b426574f8274540c2884f.jpeg";
import { motion } from "framer-motion";
export function FourthSection() {
  const styles = {
    backgroundImage: `url(${BgCta})`,
  };

  return (
    <div className={style.FourthContainer} style={styles}>
      <div className={style.innerContentFourth}>
        <motion.div
          className={style.LeftFourth}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2>Ainda não se inscreveu?</h2>
          <div className={style.divider3}></div>
          <p>
            Pois então não perca a oportunidade de dominar o inglês de uma vez
            por todas. Garanta sua vaga agora e transforme sua maneira de se
            comunicar de um jeito leve, simples, rápido e prazeroso.
          </p>
        </motion.div>
        <motion.div
          className={style.RightFourth}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <form>
            <input type="text" placeholder="Digite seu nome…" />
            <input type="text" placeholder="Digite seu melhor e-mail…" />
            <button type="submit">QUERO PARTICIPAR DO EVENTO GRATUITO</button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
