import useSWR from 'swr'

import { apiURL } from "../config";

import { getSession } from 'next-auth/react'

export const getUser = async (id) => {
    const session = await getSession()
    var token = "-";
    if(session)
        token = session.user.accessToken;

    try {
        const response = await fetch(`${apiURL}/user/${id}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${token}`
            },
        })
        const result = await response.json();
        return result;
    }
    catch(error) {
        console.log(error);
    }
}

/*
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
}*/