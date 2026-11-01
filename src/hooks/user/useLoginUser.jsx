import { useState } from "react";
import useGetUserByEmail from "./useGetUserByEmail";

function useLoginUser() {
  const [error, setError] = useState(null);

  const { getUserByEmail } = useGetUserByEmail();

  const loginUser = async (email, password) => {
    setError(null);

    try {
      const users = await getUserByEmail(email);

      if (!users || users.length === 0) {
        setError("Credenciales No Autorizadas");

        return null;
      }

      const userFound = users[0];

      if (userFound.password !== password) {
        setError("Credenciales No Autorizadas");

        return null;
      }

      const { password: _, ...userWithoutPassword } = userFound;

      return userWithoutPassword;
    } catch (error) {
      console.error("Error al ingresar como usuario", error);

      setError(error);

      return null;
    }
  };
  return { error, loginUser };
}

export default useLoginUser;
