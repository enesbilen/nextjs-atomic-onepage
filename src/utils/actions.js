import { fetcher } from './api';

export const updatedTickets = async (Status, Priority, ticketId) => {
    console.log("gelenler :", Status, Priority, ticketId);
    try {
        const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}articles/${ticketId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: { Status, Priority } }),
        });

        console.log(response);

        if (!response.ok) {
            const errorMessage = `HTTP Hata Kodu: ${response.status}`;
            throw new Error(errorMessage);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error('Geçersiz yanıt türü. JSON bekleniyor.');
        }

        const responseData = await response.json();
        console.log('Bilet başarıyla güncellendi:', responseData);
        return responseData;
    } catch (error) {
        console.error('Bilet güncellerken bir hata oluştu:', error);
        throw error;
    }
}

export const deletedTickets = async (ticketId) => {
    console.log("gelenler :", ticketId);
    try {
        const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}articles/${ticketId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        console.log(response);

        if (!response.ok) {
            const errorMessage = `HTTP Hata Kodu: ${response.status}`;
            throw new Error(errorMessage);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error('Geçersiz yanıt türü. JSON bekleniyor.');
        }

        const responseData = await response.json();
        console.log('Destek başarıyla silindi:', responseData);
        return responseData;
    } catch (error) {
        console.error('Destek silinirken bir hata oluştu:', error);
        throw error;
    }
}
// Destek Talebi Oluşturma
export const createTicket = async (formData) => {
    try {
        // FormData oluştur
        const formDataObj = new FormData();
        formData.desc = [{ "type": "paragraph", "children": [{ "type": "text", "text": formData.descstr }] }];
        formDataObj.append('data', JSON.stringify(formData));

        if (formData.image) {
            formDataObj.append('files.image', formData.image);
        }

        // Strapi'ye POST isteği yap
        const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}articles`, {
            method: 'POST',
            body: formDataObj
        });

        console.log('Response:', response);
        console.log('FormData:', formData);
        console.log('Ticket oluşturuldu:', response.data);
        return response.data;
    } catch (error) {
        console.error('Ticket oluşturulurken bir hata oluştu:', error);
        throw error;
    }
};

export const createdTicketAnswer = async (formData) => {
    try {
        const formDataObj = new FormData();
        formDataObj.append('data', JSON.stringify({
            desc: [{ "type": "paragraph", "children": [{ "type": "text", "text": formData.detail }] }],
            ...formData
        }));

        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}answers`, {
            method: 'POST',
            body: formDataObj
        });

        if (!response.ok) {
            throw new Error('Failed to create ticket answer');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('An error occurred while creating ticket answer:', error);
        throw error;
    }
}


// Destek taleplerini getiren
export const getTicket = async () => {
    try {
        const res = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}articles?populate=*`);
        return res;
    } catch (error) {
        console.error('Makaleleri alma sırasında bir hata oluştu:', error);
        throw error;
    }
};

// Destek taleplerinin cevapları
export const getTicketAnswer = async () => {
    try {
        const res = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}answers?populate=*`);
        return res;
    } catch (error) {
        console.error('Makaleleri alma sırasında bir hata oluştu:', error);
        throw error;
    }
};

export const getUsers = async () => {
    try {
        const res = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}users?populate=*`);
        return res;
    } catch (error) {
        console.error('Makaleleri alma sırasında bir hata oluştu:', error);
        throw error;
    }
};
