import useSWR from 'swr'
import { isFunction } from 'util';

import { apiURL } from "../config";

export const getProduct = (id) => {
    const fetcher = (url) => fetch(url).then((res) => res.json() );
    return useSWR(`${apiURL}/product/${id}`, fetcher);
}

export const getProducts = (query?) => {
    var fetch_url = `${apiURL}/product`

    if(query) {
        query.forEach((q) => {
            fetch_url = fetch_url.concat("?" + q.key + "=" + q.value);
        })
    }

    console.log(fetch_url)
    
    const fetcher = (url) => fetch(url).then((res) => res.json());
    return useSWR(fetch_url, fetcher);
}

export const createProduct = async (data) => {
    try {
        const response = await fetch(`${apiURL}/product/`, {
            body: data,
            method: 'POST',
        })
        const result = await response.json();
        return result;
    }
    catch(error) {
        console.log(error);
    }
}

export const deleteProduct = async (id) => {
    console.log(id);

    try {
        const response = await fetch(`${apiURL}/product/${id}`, {
            method: 'DELETE'
        })
        const result = await response.json();
        return result;
    }
    catch(error) {
        console.log(error);
    }
}