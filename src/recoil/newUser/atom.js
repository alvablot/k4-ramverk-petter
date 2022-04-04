import { atom } from "recoil";

export const createUserState = atom({
  key: "createNewUser",
  default: [],
});
