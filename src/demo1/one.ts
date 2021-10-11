class One {
  doFizzBuzz(value: number): string {
    let result = ''
    if (value <= 0) return result

    if (value % 3 === 0) result = 'Clever'
    if (value % 5 === 0) result += 'Push'
    // below line will be covered by printToPage-function
    // if (!result) result = value.toString()
    return result
  }
  printOnePossibleExampleToPage = (
    range: number,
    printThisToPage: (arg0: number, arg1: string | undefined) => void,
    startDemo: (arg0: string) => void,
  ) => {
    startDemo(
      ' Obe ==> (unit tests, external for loop, es6 Modulo, if statements )',
    )

    if (range > 0 && range <= 100) {
      for (let i = 1; i <= range; i++) {
        printThisToPage(i, this.doFizzBuzz(i))
      }
    } else {
      alert('number must be between 1 and 100')
    }
  }
}

const one = new One()
export { one }
