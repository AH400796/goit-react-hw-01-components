import styled from 'styled-components';

export const StatisticSection = styled.section`
  width: 500px;
  text-align: center;
  font-size: 16px;
  background-color: rgb(233, 233, 233);
  border: 1px solid rgb(175, 175, 175);
  border-radius: 5px;
`;

export const StatisticTitle = styled.h2`
  padding: 10px;
  font-size: 28px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgb(66, 66, 66);
`;

export const StatisticList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
  justify-content: center;
`;

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  gap: 20px;
  color: rgb(252, 252, 252);
  background-color: ${props => props.backgroundColor};
`;

export const StatisticLabel = styled.span`
  font-size: 16px;
`;

export const StatisticPercentage = styled.span`
  font-size: 26px;
`;
