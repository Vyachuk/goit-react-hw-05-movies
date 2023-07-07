import styled from 'styled-components';

export const HomeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-left: 30px;
`;

export const HomeItem = styled.li`
  font-size: 1.1rem;
  &:hover {
    transform: translate(4px, -1px);
    color: rgb(255, 100, 100);
  }
`;
