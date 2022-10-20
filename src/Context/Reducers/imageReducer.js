import {
  UPLOAD_IMAGE,
  DELETE_IMAGE,
  UPDATE_IMAGE,
  READ_IMAGE,
} from "../action.types.js";

export const imageReducer = (state, action) => {
  switch (action.type) {
    case UPLOAD_IMAGE:
      return { ...state, file:action.payload.file };
    case DELETE_IMAGE:
      return { ...state };
    case UPDATE_IMAGE:
      return { ...state };
    case READ_IMAGE:
      return { ...state };
    default:
      return { ...state };
  }
};
