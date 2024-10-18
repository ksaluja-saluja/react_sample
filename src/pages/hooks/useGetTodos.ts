import { useEffect, useState } from "react";
import { FetchTODO } from "../models/TODODetails";

const delay = () => {
  return new Promise((resolve) => setTimeout(resolve, 3000))
}

export const useGetTodos = (props: FetchTODO) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [total, setTotal] = useState<number | null>(null)
  const [todos, setTodos] = useState(null);
  const { url, id } = props

  useEffect(() => {
    if (url) {
      setLoading(true);
      const urlToFetch = id ? `${url}/${id}` : url
      console.log('FETCHING', urlToFetch)
      fetch(urlToFetch)
        .then((response) => response.json())
        .then((data) => {
          delay().then(() => {
            setTodos(data);
            setTotal(data?.length)
            setLoading(false);
          })
        })
    }
  }, [url, id])

  return { loading, todos, total }
}
