import { createDesignerRegistry } from "@terminus/t-runtime";
import {
  Input,
  FormItem,
  BindService,
  ModelSelector,
} from "@terminus/t-console-designer-components";
import { IBehavior } from "@terminus/t-console-designer-runtime";

// 注册的命名空间必须和 vite 配置的 namespace 一致
const registry = createDesignerRegistry("custom-example");

registry.add(
  "TestComponent", // 组件名称
  {
    key: "TestComponent", // 组件唯一标识
    name: "TestComponent", // 组件名称
    title: "测试组件", // 组件标题
    type: "Widget", // 组件类型
    group: "layout", // 组件所属组别
    designerProps: {
      // 右侧配置面板根属性
      type: "schema",
      title: "测试组件",
      schema: {
        type: "object",
        properties: {
          value: {
            type: "string",
            title: "组件标题",
            "x-decorator": FormItem,
            "x-component": Input,
          },
          modelAlias: {
            type: "string",
            title: "数据模型",
            "x-decorator": FormItem,
            "x-component": ModelSelector,
          },
          flow: {
            type: "object",
            title: "数据来源",
            "x-decorator": FormItem,
            "x-component": BindService,
          },
        },
      },
    },
  } as IBehavior
);
