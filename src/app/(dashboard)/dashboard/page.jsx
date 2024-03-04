"use client"
import React, { useEffect, useState } from 'react';
import styles from './admin.module.scss';
import CreateTicketPage from '@/components/organisms/createTicketPage';
import ListTicketPage from '@/components/organisms/listTicketPage';
import AnswerTicketForm from '@/components/organisms/answerTicketForm';
import Cookies from 'js-cookie';
import Button from '@/components/atoms/Button';

const Dashboard = () => {
  const [isCreateTicketVisible, setIsCreateTicketVisible] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const isUsername = Cookies.get('username');
    const isAdminCookie = Cookies.get('isAdmin');
    setIsAdmin(isAdminCookie === 'true');
    setUsername(isUsername);
  }, []);

 
  const toggleCreateTicketVisibility = () => {
    setIsCreateTicketVisible(!isCreateTicketVisible);
  };

  return (
    <div className={styles.container}>
      <div className="content">
        <div className={styles.inner}>
          <p className={styles.head}>Hoş Geldin <strong>{username}</strong></p>
          <div className={styles.button}>
            {!isAdmin &&
              <Button onClick={toggleCreateTicketVisibility} variant={isCreateTicketVisible ? "info" : "success"}>
                {isCreateTicketVisible ? "Vazgeç" : "Destek Talebi Oluştur"}
              </Button>
            }
          </div>

          <ListTicketPage username={username} isAdmin={isAdmin} />

          <AnswerTicketForm />
          {isCreateTicketVisible && <CreateTicketPage />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
