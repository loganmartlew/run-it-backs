import styled from 'styled-components';

export const RibsTable = styled.table`
  font-size: 1.2rem;
  border-collapse: collapse;

  &,
  td {
    border: 1px solid #02060d;
  }

  tr:nth-child(even) {
    background-color: #050b16;
  }
`;

export const Total = styled.thead`
  background-color: #005eda;
  font-weight: 700;
`;

export const Body = styled.tbody``;
