import styled from '@emotion/styled';

export const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const Button = styled.button`
  width: 120px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  outline: none;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  &:active {
    transform: scale(0.85);
    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);
  }
  background-color: ${({ value }) => {
    switch (value) {
      case 'good':
        return '#98FB98';
      case 'neutral':
        return '#FFFF2E';
      case 'bad':
        return '#E32227';
      default:
        return 'white';
    }
  }};
`;
