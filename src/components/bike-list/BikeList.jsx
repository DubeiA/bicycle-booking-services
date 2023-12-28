import classNames from 'classnames';

import { Typography } from '../typography/Typography';
import { BikeStatus } from './status/Status';

import css from './bikeList.module.css';

export const BikeList = ({ bikes, handleUpdateStatus }) => {
  return (
    <section>
      <ul className={css.list}>
        {bikes &&
          bikes.map(bike => {
            return (
              <li
                key={bike.id}
                className={classNames({
                  [css.item]: bike.stats === 'available',
                  [css.itemBusy]: bike.stats === 'busy',
                  [css.itemUn]: bike.stats === 'unavailable',
                })}>
                <div>
                  <div
                    className={classNames({
                      [css.wraperName]: bike.stats,
                      [css.wraperNameUn]: bike.stats === 'unavailable',
                    })}>
                    <Typography bold={'bold'} element={'p'}>
                      {bike.name}
                    </Typography>

                    <Typography bold={'regular'} element={'p'}>
                      - <span className={css.space}>{bike.type}</span>(
                      {bike.color})
                    </Typography>
                  </div>
                  <div>
                    <Typography bold={'light'} element={'p'}>
                      ID: {bike.id}
                    </Typography>
                  </div>
                  <div className={css.wraperStats}>
                    <Typography bold={'regular'} element={'p'}>
                      status:
                    </Typography>
                    <BikeStatus
                      id={bike._id}
                      initialValue={bike.stats}
                      onUpdateStatus={handleUpdateStatus}
                    />
                  </div>
                </div>

                <div>
                  <Typography
                    bold={'price'}
                    element={'p'}
                    className={classNames({
                      [css.wraperPriceUn]: bike.stats === 'unavailable',
                    })}>
                    00.00 UAH/
                    <span className={css.spanHr}>hr</span>
                  </Typography>
                </div>
              </li>
            );
          })}
      </ul>
    </section>
  );
};
