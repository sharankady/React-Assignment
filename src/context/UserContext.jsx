import { createContext, useEffect, useState } from "react";
import randomUser from "../API/randomUser";
import { debounce } from "lodash";
import { ErrorBoundary } from "react-error-boundary";


export const UserContext  =createContext()

export const UserContextProvider =(props) => {
  
const [error, setError] = useState(null);
const [userData,setUserData] =useState([])
const [search, setSearch] = useState('');
const [filteredGender, setfilteredGender] = useState('all');
const [filteredAge, setFilteredAge] = useState('all');
const [isLoading,setIsLoading] =useState(false)

const [count,setCount] =useState(500)

   useEffect(() =>{
    const fetchData =async() => {
        setIsLoading(true)
        try {
            const response = await randomUser.get('/',{
                params: {
                    results: count
                }
            }
            )
            setUserData(response.data.results)
            
        }catch (err) {
            setError(err)
        }finally {
            setIsLoading(false)
        }
    }
    fetchData()
   },[])

   return <UserContext.Provider value={{
    userData,
    filteredGender,
    filteredAge,
    setFilteredAge,
    setfilteredGender,
    search,
    setSearch,
    isLoading,
    error

   }}>
     {props.children}

   </UserContext.Provider>
}