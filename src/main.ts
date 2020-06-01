/**
 * @description example class
 * @author xxx
 * @since 2020.01.01
 */

//import ba from '../../../packages/finoer-core/src'

import hello from 'Packs/finoer-core/src'


export default class Main {
    public static main(): void {
      console.log("ok")
    }
}
  
  Main.main();
   let a:hello = new hello()
 //  let bb:ba = new ba();

   a.setName("132")
   a.getName()