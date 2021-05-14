import { router } from "@finoer/finoer-invoke";
import { Project } from "@finoer/finoer-invoke/dist/src/types/project";
import BaseRouter from "./base";

class Router extends BaseRouter {
  // 已经注册过的项目列表
  public projectMap: Map<string, Project>

  // 学习产品树
  public plantformTree: any

  // 所有微前端模块项目
  public moduleMap?: Map<string, Project>

  constructor(projectList: any, planformTree: unknown) {
    super();
    this.projectMap = this.setProjectMap(projectList);
    this.plantformTree = planformTree;

    // 将树形的模块变为键值对的形式
    this.moduleMap = this.setModuleMap(this.plantformTree.projects[0], this.projectMap)

    console.log('current moduleMap：',this.moduleMap)

    // console.log('currentTreeData',  this.plantformTree)
  }

  push(type: string) {
    switch (type) {
      case 'next':
        this.next();
        break;
      case 'back':
        this.back();
      default:
        this.go(type)
    }
  }

  go(name: string) {
    router.push(`/${name}`)
  }

  next() {

  }

  back() {

  }

}

export default Router
