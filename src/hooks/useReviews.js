import { useEffect, useState } from "react";

const useReviews = () => {
    const [reviews, setReview] = useState([])
    const [spinner, setSpinner] = useState(true);
    useEffect(()=>{
      fetch(`https://agile-atoll-48938.herokuapp.com/reviews`)
      .then(res=>res.json())
      .then(data=>setReview(data))
      .finally(() => setSpinner(false));
    }, [reviews])

    return {
        reviews,
        spinner
    }
};

export default useReviews;