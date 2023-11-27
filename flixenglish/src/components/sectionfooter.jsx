import style from "./Footer.module.css";
import Specialist from "../assets/images/QUEM-E-ESPECIALISTA 1.png";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <div className={style.FooterContainer}>
      <div className={style.innerFooter}>
        <motion.div
          className={style.LeftFooter}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img src={Specialist} />
        </motion.div>
        <motion.div
          className={style.RightFooter}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2>Quem será a sua professora?</h2>
          <div className={style.divider4}></div>
          <p>
            Fulana da Silva é apaixonada por filmes e séries desde a infância.
            Ela descobriu que aprender inglês através dessa abordagem divertida
            e imersiva era muito mais eficaz e motivador do que os métodos
            tradicionais. Sua paixão por esse universo cinematográfico e sua
            dedicação em aprimorar o idioma permitiram que ela alcançasse
            fluência em um curto período de tempo. No evento, Fulana
            compartilhará seus conhecimentos e técnicas com você, guiando-o
            nessa jornada de aprendizado divertida e eficaz. Você terá a
            oportunidade de descobrir como aproveitar ao máximo os recursos
            audiovisuais, expandir seu vocabulário, aperfeiçoar sua pronúncia e
            se envolver com diferentes culturas, enquanto se diverte assistindo
            a filmes e séries.
          </p>
          <button className={style.Cta}>
            QUERO GARANTIR A MINHA VAGA NO EVENTO!
          </button>
        </motion.div>
      </div>
    </div>
  );
}
