import banner from "../assets/icons/hero/banner.svg";
import elipse from "../assets/icons/hero/ellipse.svg";
import patins from "../assets/icons/hero/patins.png";
import play from "../assets/icons/hero/play.svg";
import shop from "../assets/icons/hero/shopping-bag.svg";
import stars from "../assets/icons/hero/stars-1.svg";
import stars2 from "../assets/icons/hero/stars-2.svg";
import image1 from "../assets/images/image-01.png";
import image2 from "../assets/images/image-02.png";
import image3 from "../assets/images/image-03.png";
import image4 from "../assets/images/image-04.png";
import person from "../assets/images/person.jpg";
import "../styles/index.css";
document.querySelector("#app").innerHTML = `
  <main>
  <nav>
      <a href="#">
        <img  src="../logo-sintap.svg" alt="Logo Sintap Patins" />
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
    <section class="banner">
  <div class="scroller bg-gradient">
  <div class="rolling">
  <img src=${banner} alt="item do banner" />
  <img src=${banner} alt="item do banner" />
  <img src=${banner} alt="item do banner" />
   <img src=${banner} alt="item do banner" />
  <img src=${banner} alt="item do banner" />
  <img src=${banner} alt="item do banner" />
   <img src=${banner} alt="item do banner" />
  <img src=${banner} alt="item do banner" />
  <img src=${banner} alt="item do banner" />
   <img src=${banner} alt="item do banner" />
  <img src=${banner} alt="item do banner" />
  <img src=${banner} alt="item do banner" />
  <img src=${banner} alt="item do banner" />
  <img src=${banner} alt="item do banner" />
  <img src=${banner} alt="item do banner" />
  <img src=${banner} alt="item do banner" />
  
  </div>
  </div>
    </section>
  <section class="gallery">
  <header>
  <span>GALERIA DE FOTOS</span>
  <h2>#usesnitap por ai</h2>
  </header>
  <div class="content"> 
  <figure>
  <img src=${image1} alt="item da galeria" />
  <figcaption>
  <img width="32" height="32": src=${person} alt="imagem Perfil Emmanuel Marcos Oliveira" />
  <span>@Emmanuel M Oliveira</span>
  </figcaption>
  </figure>
  <figure data-delay>
  <img src=${image2} alt="item da galeria" />
  <figcaption>
  <img width="32" height="32": src=${person} alt="imagem Perfil Emmanuel Marcos Oliveira" />
  <span>@Emmanuel M Oliveira</span>
  </figcaption>
  </figure>
  <figure>
  <img src=${image3} alt="item da galeria" />
  <figcaption>
  <img width="32" height="32": src=${person} alt="imagem Perfil Emmanuel Marcos Oliveira" />
  <span>@Emmanuel M Oliveira</span>
  </figcaption>
  </figure>
  <figure data-delay>
  <img src=${image4} alt="item da galeria" />
  <figcaption>
  <img width="32" height="32": src=${person} alt="imagem Perfil Emmanuel Marcos Oliveira" />
  <span>@Emmanuel M Oliveira</span>
  </figcaption>
  </figure>
  </div>
    </section>
   </main>
`;
