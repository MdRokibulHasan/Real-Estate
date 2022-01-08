import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const useProjectDetails = () => {
    const {peojectID} = useParams()
    const [projectDetails, setProjectDetails] = useState([])
    const [spinner, setSpinner] = useState(true);
    useEffect(()=>{
      fetch(`https://agile-atoll-48938.herokuapp.com/projects/${peojectID}`)
      .then(res=>res.json())
      .then(data=>setProjectDetails(data))
      .finally(() => setSpinner(false));
    }, [peojectID])

    return {
        projectDetails,
        spinner
    }
};

export default useProjectDetails;