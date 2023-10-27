import { useDispatch } from 'react-redux';
import classes from './UserProfile.module.css';
import { authActions } from '../store/auth';

const UserProfile = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      <button onClick={logoutHandler}>Logout</button>
    </main>
  );
};

export default UserProfile;
