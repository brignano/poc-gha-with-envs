import * as core from '@actions/core'
import {wait} from './wait'

async function run(): Promise<void> {
  try {
    const mySecret: string = core.getInput('my_secret')

    core.debug(new Date().toTimeString())
    await wait(parseInt("1000", 10))
    core.debug(new Date().toTimeString())
    
    console.log(mySecret)

    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
