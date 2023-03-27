window.addEventListener('load', () => {
  const button = document.getElementById('haskear')
  button.addEventListener('click', () => {
    const haskeado = document.getElementById('haskeado')
    const hasker = document.getElementById('hasker')
    const header = document.getElementById('header')
    const footer = document.getElementById('footer')
    const main = document.getElementById('main')
    haskeado.style.display = 'flex'
    hasker.style.display = 'none'
    footer.style.display = 'none'
    header.style.display = 'none'

    main.style.backgroundImage = 'url("./assets/hacked.jpg")'
    main.style.backgroundSize = 'cover'
  })
})
