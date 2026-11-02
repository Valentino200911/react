import { useState } from "react";
import { API_URL } from "../../config";
import { readToken } from "../../utils/readToken";

function useGetUserByEmail() {

  const [error, setError] = useState(null);

  
  const getUserByEmail = async (userEmail) => {

    const token = readToken()


    try {
      setError(null);

      const response = await fetch(`${API_URL}user? email=${userEmail}`,{
        method: "POST",
        headers: {
            ...({ "Content-Type": "application/json" }),
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      }
      );
      ;
      
      if (!response.ok) {
        throw new Error(
          `Error al traer al usuario por su email,
          ${response.status}`,
        );
      }

      const data = await response.json();

      return data
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  return { error, getUserByEmail };
}

export default useGetUserByEmail;
