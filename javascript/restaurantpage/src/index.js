console.log("testing if my webpack is working - npx webpack --watch")

const bodySection = document.getElementById('content')
const header = document.createElement('div')
header.textContent = "StoicKonnect's Cafe".toUpperCase()
header.style.textAlign = "center"
header.style.backgroundColor = "Brown"
header.style.padding = "50px"
header.style.border = "2px"
header.style.borderColor = "black"
header.style.color = "blue"
header.style.fontSize = "46px"
header.style.fontWeight = "bold"
header.style.marginTop = "0px"
header.style.marginBottom = "1px"


bodySection.appendChild(header)
