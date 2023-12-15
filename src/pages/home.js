import Header from "../components/header";
import { Container } from "react-bootstrap";
import Hero from "../components/hero";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <div className="p-4" style={{marginTop: "140px"}}>
          <Hero />          
        </div>
      </Container>
      <div className="d-lg-none">
        <Footer />
      </div>
    </>
  );
}

export default Home;
