const button = document.getElementById('convert-button')
const section = document.getElementById('currecy-section')
const dolar = 5.2
const euro = 5.8
const bitcoin = 0.0000079.toFixed(8)

const convertvalues = () => {
  const inpuntReais = document.getElementById('input-real').value
  const realValueText = document.getElementById('real-value-text')
  const dolarValueText = document.getElementById('dolar-value-text')
  

  realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }
  ).format(inpuntReais);

  if (section.value === 'US$ Dólar Americano') {
    dolarValueText.innerHTML = new Intl.NumberFormat('en-US',
      { style: 'currency', currency: 'USD' }
    ).format(inpuntReais / dolar);
  }

  if (section.value === '€$ Euro') {
    dolarValueText.innerHTML = new Intl.NumberFormat('de-DE',
      { style: 'currency', currency: 'EUR' }
    ).format(inpuntReais / euro);
  }

  if (section.value === 'Btc Bitcoin') {
    dolarValueText.innerHTML = new Intl.NumberFormat('pt-BR',
      { style: 'currency', currency: 'XBT' }
    ).format(inpuntReais * bitcoin);
  }
 
};

const changeSection = () => {
  const currecyName = document.getElementById('currecy-container')
  const currecyImg = document.getElementById('currecyImg')

  if (section.value === 'US$ Dólar Americano') {
    currecyName.innerHTML = 'Dólar Americano'
    currecyImg.src = './estados-unidos (1) 1.png'
  }

  if (section.value === '€$ Euro') {
    currecyName.innerHTML = 'Euro'
    currecyImg.src = './euro1.png'
  }
  if (section.value === 'Btc Bitcoin') {
    currecyName.innerHTML = 'Bitcoin'
    currecyImg.src = './Btc1.png'
  }
  convertvalues()
}

button.addEventListener('click', convertvalues)
section.addEventListener('change', changeSection)