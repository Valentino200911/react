import { useState } from "react";
import { API_URL } from "../../config";

function useContact() {
  const [error, setError] = useState(null);

  const contact = async (formData) => {
    setError(null);

    try {
      const response = await fetch(`${API_URL}contact`, {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(
          `Error al contactarse, por favor intente de nuevo,
          ${response.status}`,
        );
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.error("Error al retornar el contacto");
      setError(error);
      return null;
    }
  };
  return { error, contact };
}

export default useContact;
