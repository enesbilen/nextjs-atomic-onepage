import React, { useEffect, useState } from 'react';
import { getTicket, getTicketAnswer } from '@/utils/actions';
import PrimeDataTable from '@/components/atoms/PrimeDataTable';

const ListTicketPage = ({ username, isAdmin }) => {
    const [ticketData, setTicketData] = useState([]);
    const [answerData, setAnswerData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (isAdmin) {
                    // Eğer isAdmin true ise tüm biletleri al
                    const response = await getTicket();
                    //console.log("ticketResponse", response);

                    // Tüm biletlerin doğru formatta olduğunu kontrol et
                    if (!response || !Array.isArray(response.data)) {
                        throw new Error('Invalid ticket data format');
                    }

                    // Tüm biletlerin cevaplarını al
                    const ticketIds = response.data.map(ticket => ticket.id);
                    const answerResponse = await getTicketAnswer(ticketIds);
                    //console.log("answerResponse", answerResponse);

                    // Cevap verilerinin doğru formatta olduğunu kontrol et
                    if (!answerResponse || !Array.isArray(answerResponse.data)) {
                        throw new Error('Invalid answer data format');
                    }

                    // Bilet ve cevap verilerini ayarla
                    setTicketData(response.data);
                    setAnswerData(answerResponse.data);
                } else {
                    // Eğer isAdmin false ise sadece kullanıcının biletlerini al
                    const response = await getTicket(username);
                    // console.log("ticketResponse", response);

                    // Kullanıcının biletlerinin doğru formatta olduğunu kontrol et
                    if (!response || !Array.isArray(response.data)) {
                        throw new Error('Invalid ticket data format');
                    }

                    // Kullanıcının biletlerini filtrele
                    const userTickets = response.data.filter(ticket => ticket.attributes.users_ids.data[0]?.attributes.username === username);

                    // Ticket verilerini ayarla
                    setTicketData(userTickets);

                    // İlk biletin cevaplarını al
                    if (userTickets.length > 0) {
                        const firstTicketId = userTickets[0].id;
                        const answerResponse = await getTicketAnswer(firstTicketId);
                        //console.log("answerResponse", answerResponse);

                        // Cevap verilerinin doğru formatta olduğunu kontrol et
                        if (!answerResponse || !Array.isArray(answerResponse.data)) {
                            throw new Error('Invalid answer data format');
                        }

                        // Cevap verilerini ayarla
                        setAnswerData(answerResponse.data);
                    }
                }
            } catch (error) {
                console.error('Hata oluştu:', error);
                setError(error);
            }
        };

        fetchData();
    }, [username, isAdmin]);

    if (error) {
        return <div>{`Hata oluştu: ${error.message}`}</div>;
    }

    return <PrimeDataTable getPushTickets={ticketData} isAdmin={isAdmin} />
};

export default ListTicketPage;
