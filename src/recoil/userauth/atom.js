import { atom } from "recoil";

export const userState = atom({
  key: "UserToken",
  default: {
    token: null,
    userId: null,
  },
});
