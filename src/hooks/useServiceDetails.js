import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
const useServiceDetails = () => {
    const {serviceID} = useParams()
    const [serviceDetails, setServiceDetails] = useState([])
    const [spinner, setSpinner] = useState(true);
    useEffect(()=>{
      fetch(`https://agile-atoll-48938.herokuapp.com/services/${serviceID}`)
      .then(res=>res.json())
      .then(data=>setServiceDetails(data))
      .finally(() => setSpinner(false));
    }, [serviceID])

    return {
        serviceDetails,
        spinner
    }
};

export default useServiceDetails;