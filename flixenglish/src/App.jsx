import "./index.css";
import { Hero } from "./components/Section01/section01";
import { SecundSection } from "./components/Section02/section02";
import { ThirdSection } from "./components/Section03/section03";
import { Footer } from "./components/Footer/sectionfooter";
import { FourthSection } from "./components/Section04/section04";

export function App() {
  return (
    <div className="all_page">
      <Hero />
      <SecundSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
      <div className="Rodape">
        <p>
          ©2023 Empresa Fictícia. Todos os direitos Reservados. l Política de
          Privacidade.
        </p>
      </div>
    </div>
  );
}
