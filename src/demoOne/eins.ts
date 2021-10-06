class Eins {
  doFizzBuzz(value: number): string {
    let result = ''
    if (value <= 0) return result

    if (value % 3 === 0) result = 'Clever'
    if (value % 5 === 0) result += 'Push'
    // below line will be covered by printToPage-function
    // if (!result) result = value.toString()
    return result
  }
  doFizzBuzzExtended(value: number): string {
    let result = ''
    if (value <= 0) return result
    const text = value.toString()

    if (value % 3 === 0 || text.search('3') !== -1) result = 'Clever'
    if (value % 5 === 0 || text.search('5') !== -1) result += 'Push'

    // below line will be covered by printToPage-function
    //if (!result) return text
    return result
  }
}

const one = new Eins()
export { one }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const demoEins = (
  range: number,
  printThisToPage: (arg0: number, arg1: string | undefined) => void,
  startDemo: (arg0: string) => void,
) => {
  startDemo(
    ' Eins==> (unit tests, external for loop, es6 Modulo, if statements )',
  )
  for (let i = 1; i <= range; i++) {
    printThisToPage(i, one.doFizzBuzz(i))
  }
}
