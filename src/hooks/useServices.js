import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([])
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    fetch(`https://agile-atoll-48938.herokuapp.com/services`)
      .then(res => res.json())
      .then(data => setServices(data))
      .finally(() => setSpinner(false));
  }, [services])

  return {
    services,
    spinner
  }
};

export default useServices;