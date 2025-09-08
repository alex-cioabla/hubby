import { useRef, useState } from 'react';
import { DataTable } from '@/Components/Partials/DataTable';
import { Modal } from '@/Components/Partials/Modal';
import {
    useGetCategoriesQuery,
    useInsertCategoryMutation,
    useDeleteCategoryMutation,
    useUpdateCategoryMutation
} from '@/Store/Api/categoryApi';
import Alert from '@/Components/Partials/Alert';
import Toast from '@/Components/Partials/Toast';
import { usePopup } from '@/Hooks/Popup';

const Categories = () => {

    const name = useRef('');
    const modal = useRef('');
    const [toast, setToast] = useState({
        show: false,
        message: '',
        type: ''
    });
    const [category, setCategory] = useState(null);

    const { popupPromise } = usePopup();
    const [insertCategory, { error: errorInsert, reset: resetInsert }] = useInsertCategoryMutation();
    const [deleteCategory, { error: errorDelete, reset: resetDelete }] = useDeleteCategoryMutation();
    const [updateCategory, { error: errorUpdate, reset: resetUpdate }] = useUpdateCategoryMutation();

    const handleInsert = async () => {

        try {
            const result = await insertCategory({ name: name.current.value }).unwrap();
            setToast({
                show: true,
                message: result.message,
                type: 'success'
            });

            modal.current.close();
        } catch (error) {
            if (error.status >= 500) {
                setToast({
                    show: true,
                    message: error.data?.message,
                    type: 'error'
                });
            }
        }
    };

    const handleUpdate = async () => {

        try {
            const result = await updateCategory({id: category.id, name: name.current.value}).unwrap();
            setToast({
                show: true,
                message: result.message,
                type: 'success'
            });
            modal.current.close();
        } catch (error) {
            if (error.status > 500) {
                setToast({
                    show: true,
                    message: error.data?.message,
                    type: 'error'
                });
            }
        }
    }

    const handleDelete = async () => {

        const confirm = await popupPromise({
            title: 'Elimina categoria',
            message: 'Confermi l\'eliminazione categoria',
            confirmText: 'Cancella',
            cancelText: 'Annulla',
            confirmType: 'danger'
        });

        if (confirm) {
            try {
                const result = await deleteCategory(category.id).unwrap();
                setToast({
                    show: true,
                    message: result.message,
                    type: 'success'
                });

            } catch (error) {
                if (error.status >= 500) {
                    setToast({
                        show: true,
                        message: error.data?.message,
                        type: 'error'
                    });
                }
            }
        }
    };

    return (
        <>
            <div className="d-flex align-items-center pb-2 mb-3 border-bottom">
                <h1 className="h2">Categorie</h1>

                <button type="button" className="btn btn-primary ms-auto" onClick={() => { resetInsert(); setCategory(null); modal.current.open(); }} >
                    <i className="bi bi-plus-square"></i> Inserisci
                </button>
            </div>

            <DataTable
                data={useGetCategoriesQuery()}
                columns={[
                    { name: 'name', header: 'Nome' },
                    { name: 'create', header: 'Creazione', accessor: (row) => row.creator ? `Creato da: ${row.creator.profile.name} ${row.creator.profile.surname} | il: ${row.created_at}` : '' },
                    { name: 'update', header: 'Aggiornamento', accessor: (row) => row.updater ? `Aggiornato da: ${row.updater?.profile.name} ${row.updater?.profile.surname} | il: ${row.update_at}` : '' },
                    { name: 'deleted_at', header: 'Cancellato' }
                ]}
                actions={[{
                    button: 'btn-outline-primary',
                    icon: 'bi-pencil',
                    event: (row) => { resetUpdate(); setCategory(row); modal.current.open(); }
                }, {
                    button: 'btn-outline-danger',
                    icon: 'bi-trash',
                    event: (row) => { resetDelete(); handleDelete(row.id) }
                }]}
            ></DataTable>

            <Modal
                ref={modal}
                reset={true}
                title={category ? 'Aggiornamento della categoria' : 'Inserimento nuova categoria'}
                body={<>
                    <label className="form-label" htmlFor="name">Nome</label>
                    <input name="category_name" type="text" className="form-control" id="category_name" ref={name} defaultValue={category ? category.name : ''}></input>
                    <Alert messages={errorInsert?.data?.errors?.name ? [errorInsert.data.errors.name] : []} />
                </>}
                footer={<>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                    >
                        Annulla
                    </button>
                    <button type="button" className="btn btn-primary" onClick={() => { category ? handleUpdate(category) : handleInsert() }}>
                        {category ? 'Aggiorna' : 'Inserisci'}
                    </button>
                </>}
            ></Modal>
            <Toast
                show={toast.show}
                message={toast.message}
                type={toast.type}
            ></Toast>
        </>
    );
};

export default Categories;
