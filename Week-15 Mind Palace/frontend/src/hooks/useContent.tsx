import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../Config";

export default function useContent() {
    const [contents, setContents] = useState([]);

    async function fetchData() {
        const response = await axios.get(BACKEND_URL + "/content", {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });
        setContents(response.data.content);
    }

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 1*1000);

        return () => {
            clearInterval(interval);
        }
    }, [])
    return [contents, fetchData];
}