import { useDB } from '../../context/DBContext';
import Button from '../Button';
import { RibTypeContainer, RibHeading, RibCount } from './RibTypeStyles';

const RibType = ({ name, count, id }) => {
  const { increment, decrement, deleteType } = useDB();

  return (
    <RibTypeContainer>
      <RibHeading>{name}</RibHeading>
      <RibCount>{count}</RibCount>
      {id && (
        <>
          <td>
            <Button onClick={() => increment(id)}>+</Button>
          </td>
          <td>
            <Button onClick={() => decrement(id)}>-</Button>
          </td>
          <td>
            <Button onClick={() => deleteType(id)} type='danger'>
              DELETE
            </Button>
          </td>
        </>
      )}
    </RibTypeContainer>
  );
};

export default RibType;
