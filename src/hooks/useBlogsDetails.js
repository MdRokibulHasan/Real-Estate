import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const useBlogsDetails = () => {
    const {blogID} = useParams()
    const [blogDetails, setProjectDetails] = useState([])
    const [spinner, setSpinner] = useState(true);
    useEffect(()=>{
      fetch(`https://agile-atoll-48938.herokuapp.com/blogs/${blogID}`)
      .then(res=>res.json())
      .then(data=>setProjectDetails(data))
      .finally(() => setSpinner(false));
    }, [blogID])

    return {
        blogDetails,
        spinner
    }
};

export default useBlogsDetails;