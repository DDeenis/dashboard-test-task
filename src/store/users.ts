import { atom } from "recoil";
import { UserExtended } from "../api/users";

export const usersAtom = atom<UserExtended[]>({
  key: "users",
  default: [],
});
