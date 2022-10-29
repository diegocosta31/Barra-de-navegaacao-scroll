// Element.getBoundingClientRect() retorna o tamanho de um elemento e sua posição na pagina.
// pageYOffset é uma propriedade da pagina somente leitura que retorna o número de pixels em que o documento foi rolado verticalmente.
//offsetTop - Um número, representando a posição superior do elemento, em pixels

// ********** data(ano) sempre atualizado ************
// selecionar span
const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();

// ********** esconder/mostrar links nav ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixar navbar ************
// Rolando a tela dispara o evento scroll que captura a altura do scroll e compara com a altura da navbar, fixando ou não a mesma

const navbar = document.querySelector("#nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // link voltar ao topo

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** rolgem devagar ************
// selecionar links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href");
    const element = document.querySelector(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 86) {
      position = position + containerHeight;
    }
    
    window.scrollTo({
      left: 0,
      top: position,
    });
    // fechar navlist
    linksContainer.style.height = 0;
  });
});
// calcular alturas
