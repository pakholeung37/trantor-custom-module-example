import { createRuntimeRegistry } from "@terminus/t-runtime";
import { ProColumns, ProTable } from "@terminus/nusi-slim";

console.log("runtime");

const registry = createRuntimeRegistry("custom-example");

registry.component(() => {
  return <div>TestB</div>
}, { name: 'TestBC', type: 'Widget'})

registry.component(
  (_props) => {
    return (
      <div>
        {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
        <div>
          HIOK
          <ProTable columns={columns} dataSource={defaultDataSource} />
        </div>
      </div>
    );
  },
  {
    name: "TestComponent",
    type: "Widget",
  }
);

const columns: ProColumns<any>[] = [
  {
    title: "ID",
    dataIndex: "id",
    copyable: true,
    width: 80,
  },
  {
    title: "变更时间",
    dataIndex: "createdAt",
    valueType: "date",
    width: 120,
    resize: {
      minWidth: 70,
      maxWidth: 200,
    },
  },
  {
    title: "物料编码",
    dataIndex: "sku.code",
    copyable: true,
    width: 120,
    resize: false,
  },
  {
    title: "物料名称",
    dataIndex: ["sku", "name"],
    width: 120,
  },
  {
    title: "单价",
    dataIndex: ["sku", "price"],
    valueType: "money",
    align: "right",
    width: 120,
  },
  {
    title: "库存",
    dataIndex: "stock",
    valueType: "digit",
    align: "right",
    width: 120,
  },
];

const defaultDataSource: any[] = [];
for (let i = 0; i < 500; ++i) {
  defaultDataSource.push({
    id: (Math.random() * 1000000).toFixed(0),
    createdAt: Date.now(),
    sku: {
      code: "Upgraded: 56Upgraded: 56Upgraded: 56Upgraded: 56",
      name: `Item ${i}Item ${i}Item ${i}Item ${i}`,
      price: +(Math.random() * 1000).toFixed(0),
    },
    stock: +(Math.random() * 100000).toFixed(0),
  });
}
