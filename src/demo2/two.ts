class Two {
  numbers = [...Array(30).keys()].map((x) => Number(x + 1))

  myArray = this.numbers
    .map((number) => {
      if (number % 3 == 0 && number % 5 === 0) return number + ' CleverPush'

      if (number % 3 === 0) return number + ' Clever'

      if (number % 5 === 0) return number + ' Push'

      return number
    })
    .join('<br/>')

  printOnePossibleExampleToPage = (
    printThisToPage: (arg0: number, arg1: string | undefined) => void,
    startDemo: (arg0: string) => void,
  ) => {
    startDemo(' Two ==> (unit test, map.method, modulo, if statements  )')
    printThisToPage(0, this.myArray)
  }
}

const two = new Two()
export { two }
