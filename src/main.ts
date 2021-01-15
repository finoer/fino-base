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

// const loading = new Loading();

// invoke.$event.subscribe('appEnter', () => {
//   loading.hide()
// })

// invoke.$event.subscribe('appLeave', () => {
//   loading.show()
// })

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
                      props: [
                        {
                          key: 'current',
                          type: 'number',
                          require: true,
                          spacename: 'global',
                          description: ''
                        },
                        {
                          key: 'total',
                          type: 'number',
                          require: true,
                          spacename: 'template1',
                          description: ''
                        },
                      ]
                    },
                    {
                      name: 'template2',
                      props: [
                        {
                          key: 'current',
                          type: 'number',
                          require: true,
                          spacename: 'global',
                          description: ''
                        }
                      ]
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

// 初始化数据仓库
const router = new Router(projectList, plantformTreeData)

$data.set({plantform: plantformTreeData}, 'global')

console.log($data)

