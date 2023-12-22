import { useEffect, useState } from "react";
import {
  AuthLeftStyled,
  AuthRightStyled,
  AuthStyled,
  LeftTextStyled,
} from "./styled";
import axios from "axios";
import { SignIn } from "../sign-in";
import { IUsers } from "../../types/users-types";

export const Authentication = () => {
  const [users, setUsers] = useState<IUsers[]>([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetch(`http://localhost:8080/users`);
        const response = await data.json();
        setUsers(response);
      } catch (e) {
        console.log(e);
      }
    };
    getUsers();
  }, []);

  console.log(users);

  return (
    <AuthStyled>
      <AuthLeftStyled>
        <LeftTextStyled>Next</LeftTextStyled>
      </AuthLeftStyled>
      <AuthRightStyled>
        <SignIn users={users && users!} />
      </AuthRightStyled>
    </AuthStyled>
  );
};

// "currentUser": null
