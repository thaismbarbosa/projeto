function toggleMode{} {
  const html = document.documentElement
  html.classList.toogle("light")
   
  // pegar a tag img
 const img = document.querySelector("#profile img")
 
 // subistituir a img
  if (html.classList.contains("light")) {
  // se tiver light mode, adcionar a imagem light
  img.setAtribute("src" , "./assets/avatar-tm.png") 
 } else {
      // se tiver sem light mode, manter a imagem normal
  img.setAtribute("src" , "./assets/profile img.png")
   }
}

  

