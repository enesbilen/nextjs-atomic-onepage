import axios from 'axios';
import Cookies from 'js-cookie';

export const setToken = (data) => {
    
    if (typeof window === 'undefined') {
        return;
    }

    Cookies.set('id', data.user.id);
    Cookies.set('username', data.user.username);
    Cookies.set('jwt', data.jwt);
    Cookies.set('isAdmin', data.user.isAdmin);

    if (Cookies.get('username')) {

    }
};

export const unsetToken = () => {
    if (typeof window === 'undefined') {
        return;
    }
    Cookies.remove('id');
    Cookies.remove('jwt');
    Cookies.remove('username');
    Cookies.remove('isAdmin');
};

export const getUserFromLocalCookie = async () => {
    const jwt = getTokenFromLocalCookie();
    if (jwt) {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}users/me`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${jwt}`,
                },
            });
            return response.data.username;
        } catch (error) {
            console.error(error);
            throw error;
        }
    } else {
        return;
    }
};

export const getIdFromLocalCookie = async () => {
    const jwt = getTokenFromLocalCookie();
    if (jwt) {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}users/me`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${jwt}`,
                },
            });
            return response.data.id;
        } catch (error) {
            console.error(error);
            throw error;
        }
    } else {
        return;
    }
};

export const getTokenFromLocalCookie = () => {
    return Cookies.get('jwt');
};

export const getTokenFromServerCookie = (req) => {
    if (!req.headers.cookie || '') {
        return undefined;
    }
    const jwtCookie = req.headers.cookie
        .split(';')
        .find((c) => c.trim().startsWith('jwt='));
    if (!jwtCookie) {
        return undefined;
    }
    const jwt = jwtCookie.split('=')[1];
    return jwt;
};

export const getIdFromServerCookie = (req) => {
    if (!req.headers.cookie || '') {
        return undefined;
    }
    const idCookie = req.headers.cookie
        .split(';')
        .find((c) => c.trim().startsWith('id='));
    if (!idCookie) {
        return undefined;
    }
    const id = idCookie.split('=')[1];
    return id;
};
