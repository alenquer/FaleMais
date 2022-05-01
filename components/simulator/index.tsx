import React from "react";
import { HiTrash } from "react-icons/hi";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import Area from "../../area.json";

export const Simulator: React.FC<{ props: ISimulatorProps }> = ({ props }) => {
  function taxCalculator(item: ISimulatorData) {
    let result = 0;

    Area.map((val) => {
      if (item.origin === val.a && item.destiny === val.b) {
        result = val.value;
      }

      if (item.origin === val.b && item.destiny === val.a) {
        result = val.value + 1;
      }
    });

    return result.toFixed(2);
  }

  function getAdditional(item: ISimulatorData) {
    const exceedMinutes = item.minutes - item.plan;
    const tax = parseFloat(taxCalculator(item));
    const extra = exceedMinutes * ((10 * tax) / 100);
    const result = parseFloat(String((exceedMinutes * tax + extra).toFixed(2)));

    return {
      with: result > 0 ? result : 0,
      without: (item.minutes * tax).toFixed(2),
    };
  }

  return (
    <Table>
      <Thead>
        {/* Header */}
        <Tr>
          <Th>Origem</Th>
          <Th>Destino</Th>
          <Th>Tempo</Th>
          <Th>Plano</Th>
          <Th>Com plano</Th>
          <Th>Sem Plano</Th>
          <Th>R$/Min</Th>
          <Th>Editar</Th>
        </Tr>
      </Thead>
      {/* Body */}
      <Tbody>
        {props.data.map((item) => {
          return (
            <Tr key={String(Math.random())}>
              <Td>{item.origin}</Td>
              <Td>{item.destiny}</Td>
              <Td>{item.minutes}</Td>
              <Td>{item.plan}</Td>
              <Td>R$ {getAdditional(item).with}</Td>
              <Td>R$ {getAdditional(item).without}</Td>
              <Td>R$ {taxCalculator(item)}</Td>
              <Td>
                <a
                  onClick={() => props.remove(item.id)}
                  style={{ cursor: "pointer" }}
                >
                  <HiTrash style={{ color: "var(--contrast)" }} />
                </a>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
