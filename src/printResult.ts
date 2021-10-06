const headerEl = document.getElementById('header')

//  nullable check TS will not complain from this point on  <- no error
if (headerEl === null) {
  alert(
    'We have done the nullable check for TS  --> oops! The header-Element in this Document might be missing. ',
  )
} else {
  const clearDom = () => {
    headerEl.innerHTML = ''
    printThisToPage(0, 'start again...')
  }

  const startDemo = (demoName: string) => {
    headerEl.innerHTML = ''
    printThisToPage(0, 'Demo ' + demoName)
  }
  const printThisToPage = (i = 0, answer = '') => {
    // append content
    const tempElement = document.createElement('div')
    tempElement.innerHTML = (i === 0 ? '' : i) + ' ' + answer
    headerEl.appendChild(tempElement)
  }
}
