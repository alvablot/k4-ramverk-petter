import { atom } from "recoil";

export const allUsersState = atom({
  key: "users",
  default: [],
});
