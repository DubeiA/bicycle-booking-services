import { useEffect, useState } from 'react';
import { Typography } from '../typography/Typography';
import css from './bikeUse.module.css';

const BikeUse = ({ data }) => {
  const [bikes, setBikes] = useState(null);

  useEffect(() => {
    if (data) {
      const availableBikes = data.filter(bike => bike.stats === 'available');
      const busyBikes = data.filter(bike => bike.stats === 'busy');

      const totalCost =
        busyBikes.reduce((sum, bike) => sum + bike.price, 0) / busyBikes.length;

      const objBike = {
        total: data.length,
        available: availableBikes.length,
        booked: busyBikes.length,
        cost: totalCost.toFixed(2),
      };

      setBikes(objBike);
    }
  }, [data]);

  return (
    <div>
      <Typography bold={'statistics'} element={'p'}>
        Statistics
      </Typography>
      {bikes && (
        <div>
          <p className={css.text}>
            Totla bikes: <span className={css.bikes}>{bikes.total}</span>
          </p>
          <p className={css.text}>
            Available bikes:{' '}
            <span className={css.bikes}>{bikes.available}</span>
          </p>
          <p className={css.text}>
            Booked bikes: <span className={css.bikes}>{bikes.booked}</span>
          </p>
          <p className={css.text}>
            Average bike cost:{' '}
            <span className={css.bikes}>
              {bikes.cost === 'NaN' ? '00.00' : bikes.cost}{' '}
            </span>{' '}
            UAH/hr
          </p>
        </div>
      )}
    </div>
  );
};

export default BikeUse;
