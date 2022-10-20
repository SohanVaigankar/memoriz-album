import { OPEN_IMAGE_MODAL, CLOSE_IMAGE_MODAL } from "../action.types";

export const modalReducer = (state, action) => {
  switch (action.type) {
    case OPEN_IMAGE_MODAL:
      return {
        ...state,
        isEnabled: true,
        imageDetails: action.payload.imageDetails,
      };
    case CLOSE_IMAGE_MODAL:
      return { ...state, isEnabled: false, imageDetails: {} };
    default:
      return { ...state };
  }
};



