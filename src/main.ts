/**
 * @description example class
 * @author xxx
 * @since 2020.01.01
 */
import Finoer from 'Packs/finoer-core'
import { Main } from 'Packs/finoer-lib';
import { Startup, HelloWorld } from 'Packs/package-startup'


export default class Main1 {
  public static main(): void {
    console.log("ok")
  }
}


Main1.main();
let fino: Finoer = new Finoer()
console.log('fino', fino)
fino.setName('yueqi')

let main: Main = new Main()
console.log('main', main)

let startup: Startup = new Startup();

console.log('startup', startup)

console.log('hellow world', HelloWorld)
