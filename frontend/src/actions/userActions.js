import axios from 'axios';
import { ORDER_LIST_RESET } from '../constants/orderConstants';
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_DETAILS_RESET,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_RESET,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_UPDATEDETAILS_REQUEST,
  USER_UPDATEDETAILS_SUCCESS,
  USER_UPDATEDETAILS_FAIL,
} from '../constants/userConstants';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const {
      data: {
        data: { user },
        token,
      },
    } = await axios({
      method: 'POST',
      url: '/api/v1/users/login',
      data: { email, password },
      config,
    });

    // const { user } = data.data;
    // console.log(user);
    // console.log(token);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      // payload: user,
      payload: { user, token },
    });

    // console.log(user, token);

    localStorage.setItem('userInfo', JSON.stringify({ user, token }));
    // localStorage.setItem('token', JSON.stringify(token));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('token');
  dispatch({
    type: USER_LOGOUT,
  });
  dispatch({ type: USER_DETAILS_RESET });
  dispatch({ type: ORDER_LIST_RESET });
  dispatch({ type: USER_LIST_RESET });
  console.log('Logged out successfully!');
};

export const signup = (data) => async (dispatch) => {
  try {
    dispatch({
      type: USER_SIGNUP_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const {
      data: {
        data: { user },
        token,
      },
    } = await axios({
      method: 'POST',
      url: '/api/v1/users/signup',
      data,
      config,
    });

    // const { user, token } = data.data;
    // console.log(data);
    // console.log('token:', token);

    dispatch({
      type: USER_SIGNUP_SUCCESS,
      payload: { user, token },
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: { user, token },
    });

    localStorage.setItem('userInfo', JSON.stringify({ user, token }));
  } catch (error) {
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    // console.log(userInfo.token);

    // const config = {
    //   'Content-Type': 'application/json',
    // };

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userInfo.token}`,
    };

    // const { user: { _id } } = userInfo;
    // console.log(_id);

    const { data } = await axios({
      method: 'GET',
      url: `/api/v1/users/${id}`,
      headers,
    });

    // console.log(data);
    const {
      data: { user },
    } = data;
    // console.log(user);

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: user,
    });
  } catch (error) {
    console.log({ error }, error.response);
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const getMyDetails = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    // console.log(userInfo.token);

    // const config = {
    //   'Content-Type': 'application/json',
    // };

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userInfo.token}`,
    };

    // const { user: { _id } } = userInfo;
    // console.log(_id);

    const { data } = await axios({
      method: 'GET',
      url: `/api/v1/users/me`,
      headers,
    });

    // console.log(data);
    const {
      data: { user },
    } = data;
    // console.log(user);

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: user,
    });
  } catch (error) {
    console.log({ error }, error.response);
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const updateUserDetails = (data, type) => async (dispatch, getState) => {
  let url = '';
  if (type === 'password') {
    url = '/api/v1/users/updatePassword';
  } else {
    url = '/api/v1/users/updateMe';
  }

  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
    });

    const {
      userLogin: {
        userInfo: { token },
      },
    } = getState();

    // console.log(token);

    // const config = {
    //   'Content-Type': 'application/json',
    // };

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    // console.log({ token, url });

    const {
      data: {
        data: { user },
      },
    } = await axios({
      method: 'PATCH',
      url,
      data,
      headers,
    });

    dispatch({
      type: USER_UPDATE_SUCCESS,
      payload: user,
    });

    localStorage.setItem('userInfo', JSON.stringify({ user, token }));
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const usersList = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    });

    const {
      userLogin: {
        userInfo: { token },
      },
    } = getState();

    // console.log(token);

    // const config = {
    //   'Content-Type': 'application/json',
    // };

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    // console.log({ token, url });

    const {
      data: {
        data: { users },
      },
    } = await axios({
      method: 'GET',
      url: '/api/v1/users',
      headers,
    });

    console.log({ users });

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: users,
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DELETE_REQUEST,
    });

    const {
      userLogin: {
        userInfo: { token },
      },
    } = getState();

    // console.log(token);

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    // console.log({ token, url });

    const { data } = await axios({
      method: 'DELETE',
      url: `/api/v1/users/${id}`,
      headers,
    });

    console.log('Data:', data);

    dispatch({
      type: USER_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: USER_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const updateUser = (id, data) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATEDETAILS_REQUEST,
    });

    const {
      userLogin: {
        userInfo: { token },
      },
    } = getState();

    // console.log(token);

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    // console.log({ token, url });

    const {
      data: { data: user },
    } = await axios({
      method: 'PATCH',
      url: `/api/v1/users/${id}`,
      data,
      headers,
    });

    console.log('Data:', user);

    dispatch({
      type: USER_UPDATEDETAILS_SUCCESS,
      payload: user,
    });
  } catch (error) {
    dispatch({
      type: USER_UPDATEDETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
