import elipse from "../assets/icons/hero/ellipse.svg";
import patins from "../assets/icons/hero/patins.png";
import play from "../assets/icons/hero/play.svg";
import shop from "../assets/icons/hero/shopping-bag.svg";
import stars from "../assets/icons/hero/stars-1.svg";
import stars2 from "../assets/icons/hero/stars-2.svg";
import "../styles/index.css";
document.querySelector("#app").innerHTML = `
  <main>
  <nav>
      <a href="#">
        <img src="../logo-sintap.svg" alt="Logo Sintap Patins" />
      </a>
      <a href="#">
        <img
          src="./src/assets/icons/hero/shopping-bag.svg"
          alt="Logo Carrinho de compras"
        />
        <span>1</span>
      </a>
    </nav>
    <section class="hero">
      <div>
        <h1>
          Snitap, sua vida mais
          <div>
            <span>radical</span>
            <span>divertida</span>
            <span>saudável</span>
            <span>radical</span>
          </div>
        </h1>
        <div class="buttons">
        <a class="button buy shadow" href="#">
        <img src=${shop} alt="ícone de shop de compra" />
        COMPRAR AGORA
        </a>
        <a class="button play" href="#">
        <span class="shadow">
        <img src=${play} alt="ícone de play" > 
        </span>
        VEJA EM AÇÃO
        </a>
        </div>
      </div>
      <div>
      <div class="content">
      <img src=${elipse} alt="circulo na cor azul" />
      <img src=${patins} alt="patins"/>
      <img src=${stars} alt="estrelas 1" />
      <img src=${stars2} alt="estrelas 2" />
      
      </div>
      </div>
    </section>
   </main>
`;
