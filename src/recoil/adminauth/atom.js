import { atom } from "recoil";

export const adminState = atom({
  key: "AdminToken",
  default: {
    userId: null,
    token: null,
  },
});
