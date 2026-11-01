import { useState } from "react";
import { API_URL } from "../../config";

function useDeleteNature() {
  const [error, setError] = useState(null);

  const deleteNature = async (bioelementId) => {
    try {
      setError(null);

      const response = await fetch(
        `${API_URL}naturalElements/${bioelementId}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "Application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error(
          `Error al eliminar el elemento de Naturaleza,
          ${response.status}`,
        );
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };
  return { error, deleteNature };
}

export default useDeleteNature;
