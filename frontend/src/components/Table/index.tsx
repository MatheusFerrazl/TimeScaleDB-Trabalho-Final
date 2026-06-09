import {
  HddNetwork,
  ThermometerSnow,
  Diagram3,
  GeoAlt,
} from "react-bootstrap-icons";

import type { DataCenter } from "../../types/DataCenter";
import { Row } from "react-bootstrap";

interface TableProps {
  rows: DataCenter[];
}

function Table({ rows }: TableProps) {
  return (
    <table className="table table-dark table-striped text-light text-center align-middle">
      <thead>
        <tr>
          <th>
            <div className="d-flex align-items-center justify-content-center">
              <HddNetwork className="me-2 text-primary" size={18} />
              <span>Data-Centers</span>
            </div>
          </th>
          <th>
            <div className="d-flex align-items-center justify-content-center">
              <ThermometerSnow className="me-2 text-info" size={18} />
              <span>Temperatura</span>
            </div>
          </th>
          <th>
            <div className="d-flex align-items-center justify-content-center">
              <Diagram3 className="me-2 text-secondary" size={18} />
              <span>Setor</span>
            </div>
          </th>
          <th>
            <div className="d-flex align-items-center justify-content-center">
              <GeoAlt className="me-2 text-danger" size={18} />
              <span>Sala</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <Row key={row.id} dataCenter={row} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
