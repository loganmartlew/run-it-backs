import { useDB } from '../../context/DBContext';
import RibType from '../RibType';
import { RibsTable, Total, Body } from './RibsStyles';

const Ribs = () => {
  const { ribTypes, totalRibs } = useDB();

  return (
    <RibsTable>
      <Total>
        <RibType name='Total Run It Backs' count={totalRibs} />
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
      </Body>
    </RibsTable>
  );
};

export default Ribs;
