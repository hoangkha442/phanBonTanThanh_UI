import axios from "axios";
// import { useHistory } from 'react-router-dom';
import { adminLocalStorage } from "./LocalService";
export const https = axios.create(
    {
        baseURL: 'http://localhost:8080',
        headers:{
            Authorization:"Bearer " +  adminLocalStorage.get(), 
        }
    }
)

               