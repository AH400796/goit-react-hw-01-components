import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 20px;
  gap: 20px;
  background-color: rgb(255, 254, 254);
  border: 1px solid rgb(206, 197, 197);
  border-radius: 5px;
  box-shadow: 2px 3px 5px rgb(206, 197, 197);
  &:last-child {
    margin-bottom: 0;
  }
`;
export const FriendImage = styled.img`
  margin: 0;
  display: block;
  border: 1px solid rgb(206, 197, 197);
  border-radius: 10px;
`;

export const FriendName = styled.p`
  margin: 0;
  font-size: 30px;
  font-weight: 500;
`;

export const StatusOffline = styled.span`
  background-color: rgb(219, 72, 72);
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;
export const StatusOnline = styled.span`
  background-color: rgb(45, 192, 76);
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;
