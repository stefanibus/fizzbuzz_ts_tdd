const Drei = (
  range: number,
  printThisToPage: (arg0: number, arg1: string | undefined) => void,
  startDemo: (arg0: string) => void,
) => {
  startDemo(
    ' Drei==> ( keine unit tests, internal for loop, es6 Modulo, if else statement )',
  )
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
      printThisToPage(i, '')
    }
  }
}
