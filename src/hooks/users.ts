import { useRecoilValue } from "recoil";
import { usersAtom } from "../store/users";

export const useUser = (id: number) => {
  const users = useRecoilValue(usersAtom);
  return users.find((u) => u.id === id);
};
