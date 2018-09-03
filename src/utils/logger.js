import * as chalk from 'chalk'

const logger = (label, data) =>
  console.log(
    chalk.yellow(`
    ${label} ${chalk.blue('=========')}
  `),
    data || ''
  )

export default logger
