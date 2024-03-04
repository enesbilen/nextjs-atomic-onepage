import { useEffect, useState } from 'react';
import { createTicket } from '@/utils/actions'; // createTicket fonksiyonunu içe aktarın
import { MdEditor } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import styles from './ticketform.module.scss';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const TicketForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    descstr: '',
    users_ids: '',
    desc: [],
    image: null,
    Status: 'Açık',
    Priority: '',
  });


  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handlePriorityChange = (e) => {
    setFormData({ ...formData, Priority: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedFormData = { ...formData, users_ids: Cookies.get('id') };
      await createTicket(updatedFormData);
    } catch (error) {
      console.error('Ticket oluşturulurken bir hata oluştu:', error);
    }

    toast.success("Başarıyla Destek Talebiniz Oluşturuldu!");

    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Ticket Oluştur</h2>
      <div className={styles.formGroup}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Başlık"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <select id="priority" className={styles.selectBox} onChange={handlePriorityChange} value={formData.Priority}>
          <option value="" disabled>Öncelik Sırasını Seçiniz</option>
          <option value="Öneri">Öneri</option>
          <option value="İyileştirme">İyileştirme</option>
          <option value="Değişiklik İsteği">Değişiklik İsteği</option>
          <option value="Kusur">Kusur</option>
          <option value="Hata">Hata</option>
          <option value="Acil">Acil</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <MdEditor
          language="en-US" previewTheme="arknights"
          modelValue={formData.descstr}
          onChange={(value) => setFormData({ ...formData, descstr: value })}
        />
      </div>
      <div className={styles.formGroup}>
        <input type="file" name="image" id="" onChange={handleChange} />
      </div>
      <button type="submit">Ticket Oluştur</button>
    </form>
  );
};

export default TicketForm;
