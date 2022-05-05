import useSWR from 'swr'

import { apiURL } from "../config";

export const getProduct = (id) => {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    return useSWR(`${apiURL}/product/${id}`, fetcher);
}

export const getProducts = () => {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    return useSWR(`${apiURL}/product/`, fetcher);
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