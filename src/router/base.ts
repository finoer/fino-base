import { Project } from "@finoer/finoer-invoke/dist/src/types/project";

class BaseRouter {
  setModuleMap(treeData: any, projectMap: Map<string, Project>) {
    const data = new Map();
    let queue: any[] = [];

    while(treeData) {

      data.set(treeData.name, projectMap.get(treeData.name))
      if(treeData.children && treeData.children.length > 0) {
        for(let i = 0; i < treeData.children.length; i++) {
          queue.push(treeData.children[i])
        }
      }

      treeData = queue.shift()
    }

    return data
  }

  setProjectMap(projectList: Array<Project>) {
    const data = new Map()
    for(let i in projectList) {
      data.set(projectList[i].name, projectList[i])
    }

    return data
  }
}


export default BaseRouter
