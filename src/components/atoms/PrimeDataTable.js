import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { FaPencil, FaMagnifyingGlass, FaCircleXmark } from "react-icons/fa6";
import AnswerTicketForm from "../organisms/answerTicketForm";
import { deletedTickets, updatedTickets } from "@/utils/actions"
import './primedatatable.scss';

const PrimeDataTable = ({ getPushTickets, isAdmin }) => {
    const [selectedRowData, setSelectedRowData] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const [statusOptions, setStatusOptions] = useState([]);
    const [priorityOptions, setPriorityOptions] = useState([]);
    //console.log(getPushTickets[0]?.attributes?.createdAt);

    useEffect(() => {
        // Statü seçeneklerini ayarla
        const statusOptions = [
            { label: 'Açık', value: 'Açık' },
            { label: 'Bekelemede', value: 'Bekelemede' },
            { label: 'Çözüldü', value: 'Çözüldü' },
            { label: 'Kapalı', value: 'Kapalı' },
            // Diğer statü seçeneklerini buraya ekleyebilirsiniz
        ];
        setStatusOptions(statusOptions);

        // Priority seçeneklerini ayarla
        const priorityOptions = [
            { label: 'Öneri', value: 'Öneri' },
            { label: 'İyileştirme', value: 'İyileştirme' },
            { label: 'Değişiklik İsteği', value: 'Değişiklik İsteği' },
            { label: 'Acil', value: 'Acil' },
            { label: 'Hata', value: 'Hata' },
            { label: 'Kusur', value: 'Kusur' },
            // Diğer priority seçeneklerini buraya ekleyebilirsiniz
        ];
        setPriorityOptions(priorityOptions);
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('tr-TR', options);
    };

    const editRow = (rowData) => {
        setSelectedRowData(rowData);
    };

    const header = (
        <div className="headerContent">
            <h4 className="m-0">Destek Listesi</h4>
            <span className="inputLeft">
                <FaMagnifyingGlass className='searchIcon' />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Ara..." />
            </span>
        </div>
    );

    const handleStatusChange = async (e, rowData) => {
        const ticketId = rowData.id;
        const status = e.value;
        const Priority = rowData.attributes.Priority;
        //console.log("handleStatusChange", ticketId, status, priority)
        await updatedTickets(status, Priority, ticketId);
        // Biletler yenilenebilir, API yanıtına göre değişebilir
        // getPushTickets işlevini yenilemek için bir yöntem kullanın
    };

    const handlePriorityChange = async (e, rowData) => {
        const ticketId = rowData.id;
        const Status = rowData.attributes.Status;
        const priority = e.value;

        await updatedTickets(Status, priority, ticketId);
        // Biletler yenilenebilir, API yanıtına göre değişebilir
        // getPushTickets işlevini yenilemek için bir yöntem kullanın
    };

    const deleteRow = async (rowData) => {
        const ticketId = rowData.id;
        await deletedTickets(ticketId);
    }

    const getStatusClassName = (status) => {
        switch (status) {
            case 'Açık':
                return 'success';
            case 'Bekelemede':
                return 'warning';
            case 'Çözüldü':
                return 'info';
            case 'Kapalı':
                return 'danger';
            default:
                return '';
        }
    };


    const getUsername = (rowData) => rowData.attributes.users_ids?.data[0]?.attributes?.username || "";
    const getEmail = (rowData) => rowData.attributes.users_ids?.data[0]?.attributes?.email || "";
    const getStatus = (rowData) => rowData.attributes.Status || "";
    const getPriority = (rowData) => rowData.attributes.Priority || "";


    return (
        <div className="card">
            <DataTable
                value={getPushTickets}
                selection={selectedRowData}
                onSelectionChange={(e) => setSelectedRowData(e.value)}
                dataKey="id"
                paginator rows={10}
                rowsPerPageOptions={[5, 10, 25]}
                globalFilter={globalFilter}
                header={header}>
                <Column selectionMode="multiple" exportable={false}></Column>
                <Column field="id" header="ID" sortable filter filterPlaceholder="Search" />
                <Column field="attributes.title" header="Title" />
                <Column field="attributes.createdAt" header="Created At" body={(rowData) => formatDate(rowData.attributes.createdAt)} />
                <Column field={getUsername} header="Username" />
                <Column field={getEmail} header="Email" />
                <Column header="Statü" body={(rowData) => (
                    isAdmin !== true ? (
                        // isAdmin false olduğunda burası çalışır
                        <span className={getStatusClassName(getStatus(rowData))}>{getStatus(rowData)}</span>
                    ) : (
                        // isAdmin true olduğunda burası çalışır
                        <Dropdown
                            value={getStatus(rowData)}
                            options={statusOptions}
                            optionLabel="label"
                            optionValue="value"
                            onChange={(e) => {
                                handleStatusChange(e, rowData)
                                const newData = [...getPushTickets];
                                const rowIndex = newData.findIndex(item => item.id === rowData.id);
                                newData[rowIndex].attributes.Status = e.value;
                                setSelectedRowData(newData[rowIndex]);
                            }} />
                    )
                )} />
                <Column header="Durumu" body={(rowData) => (
                    isAdmin !== true ? (
                        // isAdmin false olduğunda burası çalışır
                        <span>{getPriority(rowData)}</span>
                    ) : (
                        // isAdmin true olduğunda burası çalışır
                        <Dropdown
                            value={getPriority(rowData)}
                            options={priorityOptions}
                            optionLabel="label"
                            optionValue="value"
                            onChange={(e) => {
                                handlePriorityChange(e, rowData)
                                const newData = [...getPushTickets];
                                const rowIndex = newData.findIndex(item => item.id === rowData.id);
                                newData[rowIndex].attributes.Priority = e.value;
                                setSelectedRowData(newData[rowIndex]);
                            }} />
                    )
                )} />
                <Column header="Actions" body={(rowData) => (
                    <div className="actionBtn">
                        <Button className="p-button p-button-success" onClick={() => editRow(rowData)}>
                            <FaPencil />
                        </Button>
                        <Button className="p-button p-button-danger" onClick={() => deleteRow(rowData)}>
                            <FaCircleXmark />
                        </Button>

                    </div>
                )}></Column>
            </DataTable>
            {selectedRowData && <AnswerTicketForm selectedRowData={selectedRowData} />}
        </div>
    );
};

export default PrimeDataTable;