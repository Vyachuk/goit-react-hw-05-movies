import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const CastItem = styled.li`
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 10px 10px 30px 10px;
  max-width: calc((100% - 5 * 32px) / 6);
  background-color: rgb(255, 230, 230);
  border-radius: 20px;
`;

export const CastPhoto = styled.img`
  border-radius: 15px;
`;
