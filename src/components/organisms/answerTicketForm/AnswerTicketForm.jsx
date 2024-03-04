import React, { useEffect, useState } from 'react';
import styles from './answerTicketForm.module.scss';
import Markdown from 'react-markdown';
import { createdTicketAnswer, getTicketAnswer } from '@/utils/actions';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { FaFileLines } from "react-icons/fa6";
import Image from 'next/image'

const AnswerTicketForm = ({ selectedRowData }) => {
    const [answerText, setAnswerText] = useState('');
    const [cookieId, setCookieId] = useState('');
    const [ticketAnswers, setTicketAnswers] = useState([]);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return new Date(dateString).toLocaleDateString('tr-TR', options);
    };

    useEffect(() => {
        const fetchDataAnswer = async () => {
            try {
                if (!selectedRowData || !selectedRowData.id) return;
                const ticketAnswerData = await getTicketAnswer(selectedRowData.id);
                const filteredAnswers = ticketAnswerData.data.filter(answer => answer.attributes.article.data.id === selectedRowData.id);
                setTicketAnswers(filteredAnswers);
            } catch (error) {
                console.error('Error fetching ticket answers:', error);
            }
        };

        fetchDataAnswer();
    }, [selectedRowData]);

    useEffect(() => {
        const idFromCookie = Cookies.get('id');
        setCookieId(idFromCookie);
    }, []);

    const handleChange = (e) => {
        setAnswerText(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = {
                detail: answerText,
                article: selectedRowData.id,
                users_id: cookieId
            };
            await createdTicketAnswer(formData);
            setAnswerText('');
            console.log('Yanıt başarıyla gönderildi.');
            fetchDataAnswer(); // Yanıt gönderdikten sonra verileri yeniden getir
        } catch (error) {
            console.error('Yanıt gönderilirken bir hata oluştu:', error);
        }
        toast.success("Başarıyla mesajınız gönderildi!");

        // Yanıt gönderdikten sonra sayfayı yenilemek için bir bekleme süresi ekle
        setTimeout(() => {
            window.location.reload();
        }, 500);
    };

    if (!selectedRowData || !selectedRowData.attributes) {
        return null; // Eğer selectedRowData veya attributes yoksa, bileşen null döndürür
    }

    const { id, attributes } = selectedRowData;
    const { title, createdAt, desc, answers, users_id, image } = attributes;

    const userData = selectedRowData?.attributes?.users_ids?.data[0]?.attributes;

    const backendUrl = `http://localhost:1337`;
    const imgName = selectedRowData?.attributes?.image?.data?.attributes?.name;
    const imgFormat = selectedRowData?.attributes?.image?.data?.attributes?.formats;

    const markdownDesc = desc && desc.length > 0 ? desc[0].children[0].text : '';
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.box}>
                    <div className={styles.ticketInfo}>
                        <div className={styles.col}>
                            <div className={styles.head}>
                                <span className={styles.icon}><FaFileLines /></span>
                                <div className={styles.detail}>
                                    <h2>{title} #{id}</h2>
                                    <div className={styles.info}>
                                        <p>Yazan: <span>{userData?.username ? userData?.username : 'N/A'}</span></p>
                                        <p>Eposta: <span>{userData?.email ? userData?.email : 'N/A'}</span></p>
                                        <p>Tarih: <span>{formatDate(createdAt ? createdAt : 'N/A')}</span></p>
                                        <p>Cevap: <span>{answers && answers.data.length} adet</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.answersInfo}>
                        <div className={styles.ticketMessage}>
                            <h3>Destek Mesajı,</h3>
                            <p><Markdown>{markdownDesc}</Markdown></p>
                            {imgFormat && (
                                <div className={styles.images}>
                                    <Image
                                        loader={() => `${backendUrl}${imgFormat.medium.url}`}
                                        src={`${backendUrl}${imgFormat.medium.url}`}
                                        alt={imgName}
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            )}
                        </div>
                        <div className={styles.answersBox}>
                            {ticketAnswers.map(answer => (
                                <div key={answer.id} className={styles.detail}>
                                    <div className={styles.mb}>
                                        <div className={styles.head}>
                                            <span className={styles.figure}>{answer.attributes?.users_id?.data[0]?.attributes?.username.substring(0, 1)}</span>
                                            <div className={styles.alt}>
                                                <div className={styles.ust}>
                                                    <p><strong>{answer.attributes?.users_id?.data[0]?.attributes?.username}</strong></p>
                                                    <p>{answer.attributes?.users_id?.data[0]?.attributes?.email}</p>
                                                </div>
                                                <p className={styles.date}>{formatDate(answer.attributes?.createdAt)}</p>
                                            </div>
                                        </div>
                                        <p>{answer.attributes?.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <textarea
                                name="answerText"
                                id="answerText"
                                rows="3"
                                placeholder="Yanıtla"
                                value={answerText}
                                onChange={handleChange}
                            ></textarea>
                            <button type="submit">Gönder</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnswerTicketForm;
