import Styles from "./styles.modules.scss";
import Slider from "@/components/organisms/slider";
import About from "@/components/organisms/about";
import Products from "@/components/organisms/products";
import Services from "@/components/organisms/services";
import Referance from "@/components/organisms/referance";
import Contact from "@/components/organisms/contact";


export default function MainTemplate() {
  return (
    <main className={Styles.main}>
      <section id="home">
        <Slider />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="products">
        <Products />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="referance">
        <Referance />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
