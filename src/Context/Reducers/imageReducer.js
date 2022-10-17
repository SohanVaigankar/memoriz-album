// export const UPLOAD_IMAGE,
// export const DELETE_IMAGE,
// export const UPDATE_IMAGE = "UPDATE_IMAGE";
// export const READ_IMAGE = "READ_IMAGE";
// export const UPLOAD_IMAGE_DATA = "UPLOAD_IMAGE_DATA";
// export const DELETE_IMAGE_DATA = "DELETE_IMAGE_DATA";
// export const UPDATE_IMAGE_DATA = "UPDATE_IMAGE_DATA";
// export const READ_IMAGE_DATA = "READ_IMAGE_DATA";
// export const CREATE_USER = "CREATE_USER";
// export const UPDATE_USER = "UPDATE_USER";
// export const READ_USER = "READ_USER";
// export const DELETE_USER = "DELETE_USER";

import {
  UPLOAD_IMAGE,
  DELETE_IMAGE,
  UPDATE_IMAGE,
  READ_IMAGE,
  UPLOAD_IMAGE_DATA,
  DELETE_IMAGE_DATA,
  UPDATE_IMAGE_DATA,
  READ_IMAGE_DATA,
  CREATE_USER,
  UPDATE_USER,
  READ_USER,
  DELETE_USER,
} from "./action.types.js";

export default (state, action) => {
  switch (action.type) {
    case "UPLOAD_IMAGE":
      return state;
    case "DELETE_IMAGE":
      return state;
    case "UPDATE_IMAGE":
      return state;
    case "READ_IMAGE":
      return state;
    case "UPLOAD_IMAGE_DATA":
      return state;
    case "DELETE_IMAGE_DATA":
      return state;
    case "UPDATE_IMAGE_DATA":
      return state;
    case "READ_IMAGE_DATA":
      return state;
    case "CREATE_USER":
      return state;
    case "UPDATE_USER":
      return state;
    case "READ_USER":
      return state;
    case "DELETE_USER":
      return state;
    default:
      state;
  }
};
