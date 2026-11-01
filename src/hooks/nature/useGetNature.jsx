import { useState } from "react";
import { API_URL } from "../../config";
import { useEffect } from "react";

//getNature = getProducts, useGetNature = useGetProducts

function useGetNature() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bioelements, setBioelements] = useState([]);

  const getNature = async (url) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `Error con los registros de Naturaleza,
          ${response.status}`,
        );
      }

      const data = await response.json();

      setBioelements(data);
    } catch (error) {
      console.error(error);
      setError(error);
      setBioelements([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNature(`${API_URL}naturalElements`);
  }, []);

  return { error, bioelements, loading };
}

export default useGetNature;
