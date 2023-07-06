import styled from 'styled-components';

export const ProfileCard = styled.div`
  padding-top: 30px;
  border: 1px solid rgb(206, 197, 197);
  border-radius: 2px;
`;
export const ProfileInfo = styled.div`
  text-align: center;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 250px;
  margin-bottom: 20px;
  border: 1px solid rgb(206, 197, 197);
`;

export const ProfileName = styled.p`
  margin: 0;
  font-size: 38px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const ProfileTag = styled.p`
  margin: 0;
  margin-bottom: 10px;
  font-size: 26px;
  font-weight: 500;
  color: rgb(101, 103, 104);
`;

export const ProfileLocation = styled.p`
  margin: 0;
  margin-bottom: 20px;
  font-size: 26px;
  font-weight: 500;
  color: rgb(101, 103, 104);
`;

export const StatsList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 164px;
  height: 164px;
  background-color: rgb(212, 226, 243);
  border: 1px solid rgb(206, 197, 197);
`;

export const StatsLabel = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: rgb(101, 103, 104);
`;

export const StatsQuantity = styled.span`
  font-size: 26px;
  font-weight: 500;
`;
