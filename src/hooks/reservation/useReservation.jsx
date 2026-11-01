import { useState } from "react";
import { API_URL } from "../../config";

function useReservation() {
  const [error, setError] = useState(null);

  const reservation = async (formData) => {
    setError(null);

    try {
      const response = await fetch(`${API_URL}reservation`, {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(
          `Error al realizar la reservación, por favor intente de nuevo,
          ${response.status}`,
        );
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.error("Error al retornar la reservación");
      setError(error);
      return null;
    }
  };
  return { error, reservation };
}

export default useReservation;
