import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Form = styled.form`
  display: grid;
  margin-bottom: 6rem;

  & > * {
    margin-bottom: 1em;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
`;

export const Field = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;

export const TextBox = styled.input`
  flex-grow: 1;
  padding: 0.5em 0.5em;
  margin-left: 1em;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 1rem;
`;

export const CheckBox = styled.input`
  margin-left: 1em;
`;
