import { useState } from "react";
import { useAsync } from "react-use";
import axios from "axios";

const useTeasersData = defaultUrl => {
  const [url, setUrl] = useState(defaultUrl);
  const [teasersData, setTeasersData] = useState([]);

  const state = useAsync(async () => {
    return await axios
      .get(url)
      .then(response => {
        console.log(response);

        if (
          response.status === 200 &&
          response.data &&
          response.data.data &&
          Array.isArray(response.data.data)
        ) {
          setTeasersData(response.data.data);
        }
      })
      .catch(error => {
        console.error(error);
        return error.text();
      });
  }, [url]);

  return {
    setUrl,
    isLoading: state.loading,
    hasError: state.error,
    teasersData
  };
};

export default useTeasersData;
