import { createRuntimeRegistry } from "@terminus/t-runtime";

console.log("runtime");

const registry = createRuntimeRegistry("custom-example");

registry.component(
  (props) => {
    return <div>Hello World, {props.value}</div>;
  },
  {
    name: "TestComponent",
    type: "Widget",
  }
);
