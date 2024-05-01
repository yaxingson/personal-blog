window.onload = async ()=>{
  const modules = import.meta.glob('../../../assets/icon/*.svg')
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  
  svg.style.display = 'none'
  
  for(const path in modules) {
    const iconName = path.match(/\/([^/]+?)\.svg$/)![1]
    const modulePath = (await modules[path]()).default
    const content = await fetch(modulePath).then(res=>res.text())
    const icon = content.match(/>([\w\W]+)</)![1]
    svg.innerHTML += `<symbol id="${iconName}">${icon}</symbol>`
  }

  document.body.insertAdjacentElement('afterbegin', svg)
}
