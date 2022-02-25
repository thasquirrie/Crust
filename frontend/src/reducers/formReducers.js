import {
  CREATE_FORM_FAIL,
  CREATE_FORM_REQUEST,
  CREATE_FORM_SUCCESS,
  FORM_DETAILS_FAIL,
  FORM_DETAILS_REQUEST,
  FORM_DETAILS_RESET,
  FORM_DETAILS_SUCCESS,
  FORM_LIST_FAIL,
  FORM_LIST_REQUEST,
  FORM_LIST_SUCCESS,
} from '../constants/formConstants';

export const formListReducer = (state = { form: [] }, action) => {
  switch (action.type) {
    case FORM_LIST_REQUEST:
      // console.log(action);
      return { loading: true, forms: [] };
    case FORM_LIST_SUCCESS:
      // console.log({ action });
      return {
        loading: false,
        forms: action.payload,
      };
    case FORM_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const formDetailsReducer = (state = { forms: {} }, action) => {
  switch (action.type) {
    case FORM_DETAILS_REQUEST:
      // console.log(action);
      return { ...state, loading: true };
    case FORM_DETAILS_SUCCESS:
      // console.log({ action });
      return {
        loading: false,
        form: action.payload,
      };
    case FORM_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case FORM_DETAILS_RESET:
      return {
        form: {},
      };
    default:
      return state;
  }
};

export const formCreateReducer = (state = { forms: {} }, action) => {
  switch (action.type) {
    case CREATE_FORM_REQUEST:
      // console.log(action);
      return { loading: true };
    case CREATE_FORM_SUCCESS:
      // console.log({ action });
      return {
        loading: false,
        success: true,
        form: action.payload,
      };
    case CREATE_FORM_FAIL:
      return { loading: false, error: action.payload };
    // case CREATE_FORM_RESET:
    //   return {
    //     form: {},
    //   };
    default:
      return state;
  }
};
