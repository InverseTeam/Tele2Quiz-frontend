import { useSelector } from "react-redux";

export function useAuth() {
  const { isLogged } = useSelector((state) => state.user);
  return isLogged;
}