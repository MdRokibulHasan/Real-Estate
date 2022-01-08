import { useEffect, useState } from "react";

const useBlogs = () => {
    const [blogs, setBlogs] = useState([])
    const [spinner, setSpinner] = useState(true);
    useEffect(()=>{
      fetch(`https://agile-atoll-48938.herokuapp.com/blogs`)
      .then(res=>res.json())
      .then(data=>setBlogs(data))
      .finally(() => setSpinner(false));
    }, [blogs])

    return {
        blogs,
        spinner
    }
};

export default useBlogs;