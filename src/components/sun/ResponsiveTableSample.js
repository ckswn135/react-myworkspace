import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const ResponsiveTable = ({ data }) => {
  console.log("--table data--");
  console.log(data);

  return (
    data.length > 0 && (
      <Table style={{ borderCollapse: "collapse" }}>
        <Thead>
          <Tr>
            {Object.keys(data).map((key, index) => (
              <Th
                style={{
                  borderBottom: "1px solid rgba(224, 224, 224)",
                  lineHeight: "2rem",
                  fontWeight: "bold",
                }}
                key={`th-${index}`}
              >
                {key}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr
              key={`tr-${item.시간}-${item.지역}`}
              style={{
                border: "0px",
                borderBottom: "1px solid rgba(224, 224, 224)",
              }}
            >
              {Object.keys(item).map((key, index) => (
                <Td
                  style={{
                    borderBottom: "1px solid rgba(224, 224, 224)",
                    lineHeight: "2rem",
                  }}
                  key={`td-${index}`}
                >
                  {["시간", "지역"].indexOf(key) > -1 ? (
                    <span>{item[key]}</span>
                  ) : (
                    <span>{item[key]}</span>
                  )}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    )
  );
};

export default ResponsiveTable;
