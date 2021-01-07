/**
 * @description example class
 * @author xxx
 * @since 2020.01.01
 *
 */
import { invoke, registerApps, $data } from '@finoer/finoer-invoke'
import projectList from '../project'
import Router from './router';
import Loading from './utils/loading'

// 注册应用
registerApps(projectList)

const loading = new Loading();

invoke.$event.subscribe('appEnter', () => {
  loading.hide()
})

invoke.$event.subscribe('appLeave', () => {
  loading.show()
})

const plantformTreeData = {
  projects: [
      {
        name: 'plantform_list',
        children: [
            {
                name: 'circle1',
                children: [
                    {
                      name: 'template1',
                    },
                    {
                      name: 'template2',
                    }
                ]
            }
        ]
      },
      {
        name: 'project2'
      },
      {
        name: 'project3'
      }
  ],

  current: {}
};

// console.log('改动测试')
// 初始化数据仓库
const router = new Router(projectList, plantformTreeData)

$data.set({plantform: plantformTreeData}, 'global')

console.log($data)

