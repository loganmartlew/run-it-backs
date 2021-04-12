import { useDB } from '../../context/DBContext';
import RibType from '../RibType';
import Button from '../Button';
import { RibsTable, Total, Body } from './RibsStyles';

const Ribs = ({ setOpen }) => {
  const { ribTypes, totalRibs } = useDB();

  return (
    <RibsTable>
      <Total>
        <RibType name='Total Run It Backs' count={totalRibs} total />
      </Total>
      <Body>
        {ribTypes &&
          ribTypes.map(type => (
            <RibType
              name={type.name}
              count={type.count}
              id={type.id}
              key={type.id}
            />
          ))}
        <tr>
          <td>
            <Button onClick={() => setOpen(true)}>NEW TYPE</Button>
          </td>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </Body>
    </RibsTable>
  );
};

export default Ribs;
