import { atom } from "recoil";

export const activeUserState = atom({
  key: "activeUser",
  default: "",
});
