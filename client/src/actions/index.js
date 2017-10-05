import axios from 'axios';
import { FETCH_USER } from './types';

//don't need curly braces or 'return' if there's only 1 thing inside
export const fetchUser = () => async dispatch =>
  dispatch({
    type: FETCH_USER,
    payload: (await axios.get('/api/current_user')).data
  });
