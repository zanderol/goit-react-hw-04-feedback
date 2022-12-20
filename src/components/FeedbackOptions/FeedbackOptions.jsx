import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsBtn = Object.keys(options);

  return (
    <ul className={css.btnList}>
      {optionsBtn.map(option => (
        <li key={option}>
          <button
            className={css.btn}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option[0].toUpperCase() + option.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
  onLeaveFeedback: PropTypes.func,
};
