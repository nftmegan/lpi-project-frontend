import useSWR from 'swr'
import { apiURL } from '../config'

import { getSession } from 'next-auth/react'

export const getCategory = (id) => {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    return useSWR(`${apiURL}/category/${id}`, fetcher);
}

export const getCategories = () => {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    return useSWR(`${apiURL}/category/`, fetcher);
}

export const createCategory = async (data) => {
    const session = await getSession()
    var token = "-";
    if(session)
        token = session.user.accessToken;

    try {
        const response = await fetch('http://localhost:8000/api/category/', {
            body: data,
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`
            },
            method: 'POST'
        })
        const result = await response.json();
        return result;
    }
    catch(error) {
        console.log(error);
    }
}

export const deleteCategory = async (id) => {
    const session = await getSession()
    var token = "-";
    if(session)
        token = session.user.accessToken;

    try {
        const response = await fetch(`http://localhost:8000/api/category/${id}`, {
            headers: {
                authorization: `Bearer ${token}`
            },
            method: 'DELETE'
        })
        const result = await response.json();
        return result;
    }
    catch(error) {
        console.log(error);
    }
}