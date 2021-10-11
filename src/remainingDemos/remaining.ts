const headerElement = document.getElementById('header')

//  nullable check TS will not complain from this point on  <- no error
if (headerElement === null) {
  alert(
    'We have done the nullable check for TS  --> oops! The header-Element in this Document might be missing. ',
  )
} else {
  const clearDom = () => {
    headerElement.innerHTML = ''
    printThisToPage(0, 'demoStart again...')
  }

  const demoStart = (demoName: string) => {
    //headerElement.innerHTML = ''
    printThisToPage(0, '<br><br><br><br><br><br><br>Demo ' + demoName)
  }
  const printThisToPage = (i = 0, answer = '') => {
    // append content
    const tempElement = document.createElement('div')
    tempElement.innerHTML = (i === 0 ? '' : i) + ' ' + answer
    headerElement.appendChild(tempElement)
  }

  const demoOne = () => {
    demoStart(' One')
    for (let i = 1; i <= 30; i++) {
      let answer = ''
      if (i % 3 === 0) answer += 'Clever'
      if (i % 5 === 0) answer += 'Push'
      if (!answer) i
      printThisToPage(i, answer)
    }
  }
  demoOne()

  demoStart(' Two')
  for (let index = 1; index <= 30; index++) {
    if (index % 3 === 0 && index % 5 === 0) printThisToPage(index, 'CleverPush')
    else if (index % 3 === 0) printThisToPage(index, 'Clever')
    else if (index % 5 === 0) printThisToPage(index, 'Push')
    else printThisToPage(index, '')
  }

  const demoThree = (range: number) => {
    demoStart(' Three')
    for (let i = 1; i <= range; i++) {
      const clever = i % 3 === 0
      const push = i % 5 === 0

      if (clever && push) {
        printThisToPage(i, 'CleverPush')
      } else if (clever) {
        printThisToPage(i, 'Clever')
      } else if (push) {
        printThisToPage(i, 'Push')
      } else {
        printThisToPage(i)
      }
    }
  }
  demoThree(30)

  demoStart(' Four')
  const pushClever = (n: number) => {
    for (let i = 1; i <= n; i++) {
      const divisibleBy = (divider: number, n: number) => n % divider == 0

      if (divisibleBy(15, i)) printThisToPage(i, 'CleverPush')
      else if (divisibleBy(3, i)) printThisToPage(i, 'Clever')
      else if (divisibleBy(5, i)) printThisToPage(i, 'Push')
      else printThisToPage(i)
    }
  }
  pushClever(30)

  demoStart(' Five (without Modulo)')
  const sieve = new Array(30)
  const steps = [
    { step: 3, value: ' Clever' },
    { step: 5, value: ' Push' },
    { step: 15, value: ' CleverPush' },
  ]
  for (let i = 0; i <= 30; i++) {
    sieve[i] = '' // i not needed as printThisToPage() will take care of it
  }
  for (const s of steps) {
    for (let i = s.step; i <= 30; i += s.step) {
      sieve[i] = s.value
    }
  }
  for (const i in sieve) {
    printThisToPage(Number(i), sieve[i])
  }

  demoStart(' Six')
  let divBy3: boolean
  let divBy5: boolean
  let i: number
  let output: string

  for (i = 1; i <= 30; i += 1) {
    output = ''
    divBy3 = !(i % 3)
    divBy5 = !(i % 5)

    if (divBy3) output += 'Clever'
    if (divBy5) output += 'Push'

    // below statement not needed.
    // if (!(divBy3 || divBy5)) output = ''
    printThisToPage(i, output)
  }

  demoStart(' Seven')
  const cleverPush_ = (n: number) => {
    for (let i = 1; i <= n; i++) {
      const divisibleBy = (divider: number, n: number) => n % divider == 0

      if (divisibleBy(15, i)) printThisToPage(i, 'CleverPush')
      else if (divisibleBy(3, i)) printThisToPage(i, 'Clever')
      else if (divisibleBy(5, i)) printThisToPage(i, 'Push')
      else printThisToPage(i)
    }
  }
  cleverPush_(30)
}
