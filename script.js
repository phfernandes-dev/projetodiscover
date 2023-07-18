function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")


  const image = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    image.setAttribute("src", "./assets/avatar-light.png")
    image.setAttribute("alt", "foto de mayk brito com óculos escuros, sem barba, de jaqueta preta e fundo degradê do roxo ao azul")
  } else {
    image.setAttribute("src", "./assets/avatar.png")
    image.setAttribute("alt", "foto de mayk brito sorrindo de camisa preta, barba e fundo amarelo")
  }

  // if (html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }
}