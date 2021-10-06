class Zwei {
  numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ]

  myArray = this.numbers
    .map((number) => {
      if (number % 3 == 0 && number % 5 === 0) return number + ' CleverPush'

      if (number % 3 === 0) return number + ' Clever'

      if (number % 5 === 0) return number + ' Push'

      return number
    })
    .join('<br/>')
}

const two = new Zwei()
export { two }

const demoZwei = (
  printThisToPage: (arg0: number, arg1: string | undefined) => void,
  startDemo: (arg0: string) => void,
) => {
  startDemo(' Zwei==> (unit test, map.method, if statements  )')
  printThisToPage(0, two.myArray)
}
