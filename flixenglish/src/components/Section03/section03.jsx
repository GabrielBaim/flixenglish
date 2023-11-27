import style from "./Third.module.css";
import Aula01 from "../../assets/images/AULA-01 1.png";
import Aula02 from "../../assets/images/AULA-02 1.png";
import Aula03 from "../../assets/images/AULA-03 1.png";
import { motion } from "framer-motion";

export function ThirdSection() {
  return (
    <div className={style.ThirdContainer}>
      <div className={style.innerContentThird}>
        <h2>O que irei aprender?</h2>
        <div className={style.divider2}></div>
        <div className={style.aulas}>
          <motion.div
            className={style.card}
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <img src={Aula01} />
            <div className={style.board}>
              <p>SAIBA MAIS</p>
            </div>
          </motion.div>
          <motion.div
            className={style.card}
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true, amount: 0.7 }}
          >
            <img src={Aula02} />
            <div className={style.board}>
              <p>SAIBA MAIS</p>
            </div>
          </motion.div>
          <motion.div
            className={style.card}
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.9 }}
          >
            <img src={Aula03} />
            <div className={style.board}>
              <p>SAIBA MAIS</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
