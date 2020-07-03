/**
 * @description example class
 * @author xxx
 * @since 2020.01.01
 */
import Finoer from 'Packs/finoer-core'
import A from 'Packs/finoer-lib';


export default class Main1 {
    public static main(): void {
      console.log("ok")
    }
}


Main1.main();
let fino:Finoer = new Finoer()
console.log('fino', fino)
fino.setName('yueqi')

// let main: A.Main = new A.Main()
// var main: A.Main = new A.Main()
// console.log('main', main)

