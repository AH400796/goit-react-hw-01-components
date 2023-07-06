import styled from 'styled-components';

export const TransactionTable = styled.table`
  text-align: center;
  font-size: 18px;
  border: 1px solid rgb(0, 161, 182);
  width: 900px;
`;

export const TransactionTableHead = styled.thead`
  background-color: rgb(0, 161, 182);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 20px;
  color: rgb(252, 252, 252);
`;

export const TransactionTableRow = styled.tr`
  border: 1px solid rgb(0, 161, 182);
  &:nth-child(even) {
    background-color: rgb(217, 227, 228);
  }
`;

export const TransactionTableHeadCell = styled.th`
  width: 100px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 0px solid rgb(0, 161, 182);
`;

export const TransactionTableCell = styled.td`
  width: 100px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 0px solid rgb(0, 161, 182);
`;
