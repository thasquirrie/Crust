import axios from 'axios';
import {
  CREATE_FORM_FAIL,
  CREATE_FORM_REQUEST,
  CREATE_FORM_SUCCESS,
} from '../constants/formConstants';

export const createForm = (data) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_FORM_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userInfo.token}`,
    };

    const {
      data: { form },
    } = await axios({
      method: 'POST',
      url: `/api/v1/forms`,
      headers,
      data,
    });

    console.log({ form });

    dispatch({
      type: CREATE_FORM_SUCCESS,
      payload: form,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: CREATE_FORM_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.response,
    });
  }
};
