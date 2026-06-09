import { CircleFill } from "react-bootstrap-icons";

import type { DataCenter } from "../../types/DataCenter";

import clsx from "clsx";

interface RowProps  {
  dataCenter: DataCenter;
};

function Row({ dataCenter }: RowProps) {
  const dataCenterColor = clsx({
    "text-success": dataCenter.temperature <= 27,
    "text-warning":
      dataCenter.temperature > 27 && dataCenter.temperature < 35,
    "text-danger": dataCenter.temperature >= 35,
  });

  return (
    <tr>
      <td>{dataCenter.dataCenter}</td>
      <td>
        <div className="d-flex align-items-center justify-content-center">
          <CircleFill className={`me-2 ${dataCenterColor}`} size={10} />
          <span>{dataCenter.temperature}°</span>
        </div>
      </td>
      <td>{dataCenter.sector}</td>
      <td>{dataCenter.room}</td>
    </tr>
  );
}

export default Row;
