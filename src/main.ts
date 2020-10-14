/**
 * @description example class
 * @author xxx
 * @since 2020.01.01
 *
 */
import { invoke, registerApps } from 'Packs/finoer-invoke'
import { LoaderOper } from 'Packs/finoer-lib'
import projectList from '../project'
import Loading from './utils/loading'

// 注册应用
registerApps(projectList)

// const loader = new LoaderOper('http://localhost:8080/app.js', () => {
//   console.log('加载子应用js成功了·········')
//   // @ts-ignore
//   console.log(arguments)
// }, () => {})

// debugger
// loader.timeout = 500
// loader.execute()

// console.log('LoaderOper', loader)


const loading = new Loading();

invoke.$event.subscribe('appEnter', () => {
  loading.hide()
})

invoke.$event.subscribe('appLeave', () => {
  loading.show()
})


