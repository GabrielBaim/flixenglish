import style from "./Secund.module.css";
import LeftImage from "../../assets/images/PRA-QUEM-E 1.png";
import Tag from "../../assets/images/tag.png";
import { motion } from "framer-motion";
export function SecundSection() {
  return (
    <div className={style.SecundContainer}>
      <div className={style.innerContentSecund}>
        <motion.div
          className={style.LeftSideSecund}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img src={LeftImage} />
        </motion.div>
        <motion.div
          className={style.RightSideSecund}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2>Para quem é esse evento?</h2>
          <div className={style.divider}></div>
          <p>
            Se você está cansado dos métodos tradicionais chatos e nada eficazes
            para aprender inglês, chegou a sua vez! Esse evento é perfeito para
            pessoas que querem se divertir enquanto aprendem. Se você é viciado
            em filmes e séries e quer ganhar fluência no inglês rapidinho, essa
            é a sua hora de brilhar!
          </p>
          <ul>
            <li>
              <img src={Tag} />
              Amantes de filmes e séries que querem usar sua paixão para falar
              inglês com confiança e naturalidade.
            </li>
            <li>
              <img src={Tag} />
              Pessoas que não têm tempo a perder e buscam uma forma leve, rápida
              e verdadeiramente divertida de aprender.
            </li>
            <li>
              <img src={Tag} />
              Quem está cansado de aulas chatas e métodos tradicionais
              ineficazes;
            </li>
            <li>
              <img src={Tag} /> Pessoas que desejam aprender de forma
              descontraída e descomplicada.
            </li>
          </ul>
          <button className={style.Cta}>
            QUERO GARANTIR A MINHA VAGA NO EVENTO!
          </button>
        </motion.div>
      </div>
    </div>
  );
}
