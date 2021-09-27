const write = (i = 0, answer = '') => {
  document.write(`${i === 0 ? '' : i}  ${answer} <br>`)
}

const start = (text: string) => {
  document.write(`
  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
  ${text}:<br>
  `)
}

const demoOne = () => {
  start('Demo One')
  for (let i = 1; i <= 30; i++) {
    let answer = ''
    if (i % 3 === 0) answer += 'Clever'
    if (i % 5 === 0) answer += 'Push'
    if (!answer) i
    write(i, answer)
  }
}
demoOne()

start('Demo Two')
for (let index = 1; index <= 30; index++) {
  if (index % 3 === 0 && index % 5 === 0) write(index, 'CleverPush')
  else if (index % 3 === 0) write(index, 'Clever')
  else if (index % 5 === 0) write(index, 'Push')
  else write(index, '')
}

const demoThree = (range: number) => {
  start('Demo Three')
  for (let i = 1; i <= range; i++) {
    const clever = i % 3 === 0
    const push = i % 5 === 0

    if (clever && push) {
      write(i, 'CleverPush')
    } else if (clever) {
      write(i, 'Clever')
    } else if (push) {
      write(i, 'Push')
    } else {
      write(i)
    }
  }
}
demoThree(30)

start('Demo Four')
const cleverPush_ = (n: number) => {
  for (let i = 1; i <= n; i++) {
    const divisibleBy = (divider: number, n: number) => n % divider == 0

    if (divisibleBy(15, i)) write(i, 'CleverPush')
    else if (divisibleBy(3, i)) write(i, 'Clever')
    else if (divisibleBy(5, i)) write(i, 'Push')
    else write(i)
  }
}
cleverPush_(30)

start('Demo Five ')
const sieve = new Array(30)
const steps = [
  { step: 3, value: 'Clever' },
  { step: 5, value: 'Push' },
  { step: 15, value: 'CleverPush' },
]
for (let i = 0; i <= 30; i++) {
  sieve[i] = i
}
for (const s of steps) {
  for (let i = s.step; i <= 30; i += s.step) {
    sieve[i] = s.value
  }
}
for (const i in sieve) {
  write(0, sieve[i])
}

start('Demo Six')
const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
]
const myArray = numbers
  .map((number) => {
    if (number % 3 == 0 && number % 5 === 0) return number + ' CleverPush'

    if (number % 3 === 0) return number + ' Clever'

    if (number % 5 === 0) return number + ' Push'

    return number
  })
  .join('<br/>')
write(0, myArray)

start('Demo Seven')
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
  write(i, output)
}
