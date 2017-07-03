const path = require('path')
const program = require('commander')
const config = require('../src/config')
const { serialSpawn } = require('@schibstedspain/sui-helpers/cli')
const PACKAGES_DIR = path.join(process.cwd(), config.getPackagesFolder())
const cwds = config.getScopes().map(pkg => path.join(PACKAGES_DIR, pkg))

program.parse(process.argv)

serialSpawn(cwds.map(getTaskArray))
  .then(code => process.exit(code))
  .catch(code => process.exit(code))

function getTaskArray (cwd) {
  const [command] = program.args
  const args = process.argv.slice(process.argv.indexOf(command) + 1)
  return [command, args, {cwd}]
}