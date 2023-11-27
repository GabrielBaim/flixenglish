import "./index.css";
import { Hero } from "./components/section01";
import { SecundSection } from "./components/section02";
import { ThirdSection } from "./components/section03";
import { Footer } from "./components/sectionfooter";
import { FourthSection } from "./components/section04";

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
