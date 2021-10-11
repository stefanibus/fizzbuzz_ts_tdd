class Four {
  mkRule(div: number, word: string) {
    return (n: number) => (n % div === 0 ? word : '')
  }
  rangeArray(start: number, end: number) {
    return [...Array(end - start).keys()].map((x) => Number(x) + start)
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cleverpush(rules: any[], end = 101): string[] {
    return this.rangeArray(1, end).map((i) => {
      const str = rules.reduce((word, rule) => word + rule(i), '')
      return str === '' ? `${i}` : `${i}  ${str}`
    })
  }
  printOnePossibleExampleToPage = (
    range: number,
    printThisToPage: (arg0: number, arg1: string | undefined) => void,
    startDemo: (arg0: string) => void,
  ) => {
    startDemo(
      'Four ==><br>amount of rules are dynamic and the current three rules are:  <br>3=Clever, 5=Push, 13=ExtraThirdRule, 23=ExtraRuleNumberFour;  <br>Length of array is dynamic; <br>unit tests;<br>map.method, es6 Modulo <br><br>',
    )
    if (range > 0 && range <= 1000) {
      const result = this.cleverpush(
        [
          this.mkRule(3, 'Clever'),
          this.mkRule(5, 'Push'),
          this.mkRule(13, 'ExtraThirdRule'),
          this.mkRule(23, 'ExtraRuleNumberFour'),
        ],
        100,
      )
      // console.log(result)
      printThisToPage(0, result.join(' <br> '))
      return result
    } else {
      alert('the Number for the range must be between 1 and 1000')
    }
  }
}

const four = new Four()
export { four }
