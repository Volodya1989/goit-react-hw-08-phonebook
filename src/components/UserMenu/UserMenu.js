import { useDispatch } from "react-redux";
import { Wrapper, Username, Button } from "./UserMenu.styled";

import { logOut } from "redux/auth/operations";
import { useAuth } from "../../hooks";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Wrapper>
  );
};
