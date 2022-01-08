import { useEffect, useState } from "react";
const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [spinner, setSpinner] = useState(true);
    useEffect(()=>{
      fetch(`https://agile-atoll-48938.herokuapp.com/users`)
      .then(res=>res.json())
      .then(data=>setUsers(data))
      .finally(() => setSpinner(false));
    }, [])

    return {
        users,
        spinner
    }
};

export default useUsers;