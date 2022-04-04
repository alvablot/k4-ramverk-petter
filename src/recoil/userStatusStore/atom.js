import { atom } from "recoil";

export const userStatusStore = atom({
  key: "US",
  default: {
    loginStatus: "Du är inte inloggad",
  },
});
