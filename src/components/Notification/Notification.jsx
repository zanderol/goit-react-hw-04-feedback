import css from './Notification.module.css';

export const Notification = ({ message }) => (
  <h2 className={css.Notification}>{message}</h2>
);
