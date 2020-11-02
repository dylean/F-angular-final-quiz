import { Component } from '@angular/core';

// TODO GTB-1: * 基本需求实现完成
// TODO GTB-1: * 页面样式和mockup不符
// TODO GTB-1: * 分组样式错误，讲师信息渲染位置不对。
// TODO GTB-3: * 有划分分组、讲师、学员组件，但抽象层数过少，组件模版嵌套过深
// TODO GTB-3: * 没有实践组件消息传递
// TODO GTB-3: * 服务注入和http模块运用合理，Observable基础掌握
// TODO GTB-4: * 组件抽象层次不够
// TODO GTB-4: * 小步提交实践得不完善

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-final-quiz';
}
