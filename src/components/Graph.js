import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Chart } from "react-charts";

const Graph = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = [amounts.reduce((acc, item) => (acc += item), 0).toFixed(0)];

  const graphs = total;
  const datas = transactions.map((transaction) => [
    transaction.id,
    +graphs.map((graphs) => graphs) + +transaction.amount,
  ]);

  const data = [
    {
      label: "Series 2",
      data: datas,
    },
  ];

  const axes = [
    { primary: true, type: "ordinal", position: "bottom" },
    { position: "right", type: "linear", stacked: false },
  ];

  return (
    <div
      className="chart"
      style={{
        width: "150px",
        height: "100px",
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  );
};

export default Graph;
