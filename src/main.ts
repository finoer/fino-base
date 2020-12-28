/**
 * @description example class
 * @author xxx
 * @since 2020.01.01
 *
 */
import { invoke, registerApps, $data } from 'Packs/finoer-invoke'
import projectList from '../project'
import Loading from './utils/loading'


console.log($data, invoke, registerApps, 111)
// 注册应用
// registerApps(projectList)

// const loading = new Loading();

// invoke.$event.subscribe('appEnter', () => {
//   loading.hide()
// })

// invoke.$event.subscribe('appLeave', () => {
//   loading.show()
// })


