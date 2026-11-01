import { useState } from "react";
import { API_URL } from "../../config";

function useRegisterUser() {
  const [error, setError] = useState(null);

  const registerUser = async (formData) => {
    setError(null);

    try {
      const response = await fetch(`${API_URL}user`, {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(
          `Error al registrar al usuario, por favor intente de nuevo,
          ${response.status}`,
        );
      }

      const data = await response.json();

      const { password: _, ...userWithoutPassword } = data;

      return userWithoutPassword;
    } catch (error) {
      console.error("Error al registrar usuario");
      setError(error);
      return null;
    }
  };
  return { error, registerUser };
}

export default useRegisterUser;
