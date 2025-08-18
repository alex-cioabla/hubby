import { useRef, useState } from 'react';
import { DataTable } from '@/Components/Partials/DataTable';
import { Modal } from '@/Components/Partials/Modal';
import { useGetCategoriesQuery, useInsertCategoryMutation } from '@/Store/Api/categoryApi';
import Alert from '@/Components/Partials/Alert';
import Toast from '@/Components/Partials/Toast';

const Categories = () => {

    const name = useRef('');
    const [toast, setToast] = useState({
        show: false,
        message: '',
        type: ''
    });
    const [modal, setModal] = useState({
        show: false,
        title: '',
        body: '',
        footer: '',
        reset: false
    });

    const [insert, { data: category, error: errorInsert }] = useInsertCategoryMutation();

    const handleInsert = async () => {

        try {
            const result = await insert({ name: name.current.value }).unwrap();
            setToast({
                show: true,
                message: result.message,
                type: 'success'
            });

            setModal(prev => ({ ...prev, show: false }));
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

    return (
        <>
            <div className="d-flex align-items-center pb-2 mb-3 border-bottom">
                <h1 className="h2">Categorie</h1>

                <button type="button" className="btn btn-primary ms-auto" data-bs-toggle="modal" data-bs-target="#categoryModal"
                    onClick={() => setModal({
                        show: true,
                        reset:true,
                        id: 'categoryModal',
                        title: 'Inserimento nuova categoria',
                        body: (                    <>
                        <label className="form-label" htmlFor="name">Nome</label>
                        <input name="category_name" type="text" className="form-control" id="category_name" ref={name}></input>
                        <Alert messages={errorInsert?.data?.errors?.name ? [errorInsert.data.errors.name] : []} />
                    </>),
                    footer: ( <>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Annulla
                        </button>
                        <button type="button" className="btn btn-success" onClick={() => handleInsert()}>
                            Inserisci
                        </button>
                    </>)
                    })}
                >
                    <i className="bi bi-plus-square"></i> Inserisci
                </button>
            </div>
            <DataTable data={useGetCategoriesQuery()} columns={
                [
                    { name: 'name' },
                    { name: 'inserito' },
                    { name: 'creato' },
                    { name: 'cancellato' }
                ]
            }></DataTable>

            <Modal
                show={modal.show}
                id={modal.id}
                title={modal.title}
                reset={modal.reset}
                body={modal.body}
                footer={modal.footer}
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
