import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';
import css from './Statistics.module.css';

// import css from './Statistics.module.css';
export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <div className={css.statistics}>
      <h2 className={css.subtitle}>Statistics:</h2>
      {total ? (
        <>
          <div className={css.box}>
            <p className={css.item}>Good: {good}</p>
            <p className={css.item}>Neutral: {neutral}</p>
            <p className={css.item}>Bad: {bad}</p>
          </div>
          <p className={css.total}>Total: {total}</p>
          <p className={css.percent}>Positive feedback: {positive}%</p>
        </>
      ) : (
        <Notification message="There is no feedback..." />
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.number,
};
