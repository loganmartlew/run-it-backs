import { useRef } from 'react';
import { useDB } from '../../context/DBContext';
import Button from '../Button';
import { Wrapper, Form, Title, Field, TextBox, CheckBox } from './ModalStyles';

const ModalContent = ({ setOpen }) => {
  const { addType } = useDB();

  const nameRef = useRef(null);
  const countRef = useRef(null);
  const personRef = useRef(null);

  const clearFields = () => {
    nameRef.current.value = '';
    countRef.current.value = 0;
    personRef.current.checked = false;
  };

  const close = () => {
    clearFields();
    setOpen(false);
  };

  const submit = () => {
    if (!nameRef.current.value) return;

    addType(
      nameRef.current.value,
      countRef.current.value,
      personRef.current.checked
    );
    close();
  };

  return (
    <Wrapper>
      <Form onSubmit={submit}>
        <Title>Add A New Type</Title>
        <Field htmlFor='name'>
          Name
          <TextBox type='text' id='name' ref={nameRef} />
        </Field>
        <Field htmlFor='count'>
          Initial Count
          <TextBox type='number' id='count' defaultValue={0} ref={countRef} />
        </Field>
        <Field htmlFor='person'>
          Person
          <CheckBox type='checkbox' id='person' ref={personRef} />
        </Field>
        <Button type='submit'>SUBMIT</Button>
        <Button type='danger' onClick={close}>
          CANCEL
        </Button>
      </Form>
    </Wrapper>
  );
};

export default ModalContent;
