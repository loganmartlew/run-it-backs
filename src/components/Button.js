import styled from 'styled-components';

export default styled.button`
  padding: 0.7em 1em;
  border: none;
  border-radius: 0.8em;
  outline: none;
  color: inherit;
  font-weight: 700;
  cursor: pointer;

  background-color: ${({ type }) => {
    switch (type) {
      case 'danger':
        return '#da0054';
      default:
        return '#005eda';
    }
  }};
`;
