import axios from "axios";
import { useEffect, useState } from "react";

export function useUsername(){
    let [username, setUsername] = useState('')
    useEffect(() => {
        axios.get('/username.json')
        .then((e) => {
            setUsername(e.data)
        })
    },[])


    return username
}