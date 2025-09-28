const conteudo = document.getElementById("conteudo");

// HTML da página inicial
const inicioHTML = `
<section class="perfil">
  <img src="imagens/milu1.jpeg" alt="Gata Milu no pedestal">
  <p>
    Milu é uma gata de pelagem preta e branca, dona de um olhar sereno e majestoso.
    Com sua elegância natural e personalidade encantadora, conquista todos que cruzam seu caminho.
  </p>
</section>
`;

// HTML da galeria
const galeriaHTML = `
<section class="galeria">
  <img src="imagens/milu1.jpeg" alt="Milu 1">
  <img src="imagens/milu2.jpeg" alt="Milu 2">
  <img src="imagens/milu3.jpeg" alt="Milu 3">
  <img src="imagens/milu4.jpeg" alt="Milu 4">
  <img src="imagens/milu5.jpeg" alt="Milu 5">
</section>
`;

// Função para trocar conteúdo sem recarregar
function navegar(url) {
  if (url === "/fotos") {
    conteudo.innerHTML = galeriaHTML;
  } else {
    conteudo.innerHTML = inicioHTML;
  }
  history.pushState({ url }, "", url);
}

// Ouvir cliques nos links com data-link
document.querySelectorAll("a[data-link]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    navegar(link.getAttribute("href"));
  });
});

// Manter estado ao usar o botão Voltar/Avançar do navegador
window.addEventListener("popstate", e => {
  const url = e.state?.url || "/";
  navegar(url);
});

// Carregar página certa ao abrir diretamente
if (window.location.pathname === "/fotos") {
  conteudo.innerHTML = galeriaHTML;
} else {
  conteudo.innerHTML = inicioHTML;
}
