interface RuleInterface {
  matches(number: number): boolean
  getReplacement(): string
}

class CleverRule implements RuleInterface {
  matches(number: number): boolean {
    return number % 3 === 0
  }

  getReplacement(): string {
    return ' Clever'
  }
}

class PushRule implements RuleInterface {
  matches(number: number): boolean {
    return number % 5 === 0
  }

  getReplacement(): string {
    return ' Push'
  }
}

class CleverPushRule implements RuleInterface {
  matches(number: number): boolean {
    return number % 15 === 0
  }

  getReplacement(): string {
    return ' CleverPush'
  }
}

class NumberListReplacer {
  rules: RuleInterface[] = []

  addRule(rule: RuleInterface) {
    this.rules.push(rule)
  }

  generate(number: number) {
    const output: string[] = []

    for (let i = 1; i <= number; i++) {
      output.push(this.getReplacement(i))
    }
    return output
  }

  getReplacement(number: number): string {
    for (const rule of this.rules) {
      if (rule.matches(number)) {
        return number + rule.getReplacement()
      }
    }
    return String(number)
  }
  printOnePossibleExampleToPage = (
    range: number,
    printThisToPage: (arg0: number, arg1: string | undefined) => void,
    startDemo: (arg0: string) => void,
  ) => {
    startDemo(
      'Five ==><br>Object Oriented: new rules can be added statically; <br>Solution still seems a bit too bloated; <br>Length of array is dynamic; <br>unit tests;<br>  es6 Modulo; <br>current three rules are: 3=Clever, 5=Push, 15=ExtraThirdRule; <br>',
    )
    if (range > 0 && range <= 1000) {
      const cleverPush = new NumberListReplacer()
      cleverPush.addRule(new CleverPushRule())
      cleverPush.addRule(new CleverRule())
      cleverPush.addRule(new PushRule())
      const result = cleverPush.generate(range)

      printThisToPage(0, result.join(' <br> '))
      return result
    } else {
      alert('the Number for the range must be between 1 and 1000')
    }
  }
}

const five = new NumberListReplacer()
export { five }
