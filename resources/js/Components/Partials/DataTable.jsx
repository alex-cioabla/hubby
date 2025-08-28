import { useMemo, useState } from 'react';
import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    flexRender,
} from '@tanstack/react-table';
import * as utils from '@/Utils/functions';
import Spinner from '@/Components/Partials/Spinner';

export const DataTable = (props) => {

    const [sorting, setSorting] = useState([]);
    const [filtering, setFiltering] = useState('');

    const { data, error, isLoading } = props.data;

    const columns = useMemo(() => {

        const config = props.columns.map((col) => ({
            ...(col.accessor ? { accessorFn: col.accessor } : { accessorKey: col.name }),
            header: col.header,
            meta: {
                headerClassName: 'text-start',
                cellClassName: 'text-start',
            },
        }));

        const buttons = {
            id: 'actions',
            header: '',
            cell: ({ row }) => (
                <div className="btn-group" role="group">
                    {props.actions.map((action, index) =>
                    <button key={index} className={`btn btn-sm ${action.button}`} onClick={() => action.event(row.original)}>
                        <i className={`bi ${action.icon}`}></i>
                    </button> )}
                </div>
            ),
        };

        return [...config, buttons];
    }, [props.columns]);

    const table = useReactTable({
        data: data ?? [],
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        state: {
            sorting,
            globalFilter: filtering,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering,
    });

    if (isLoading) {
        return <Spinner show={true}></Spinner>
    }

    if (error) {
        return <div>Errore: {error}</div>
    }

    return (
        <>
            <div className="row mb-3">
                <div className="col-12 col-sm-3">
                    {/* Search Bar */}
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Cerca..."
                        value={filtering}
                        onChange={(e) => setFiltering(e.target.value)}
                    />
                </div>
            </div>

            {/* Table */}
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="table-dark">
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th
                                        key={header.id}
                                        className={header.column.columnDef.meta?.headerClassName || ''}
                                        style={{ cursor: header.column.getCanSort() ? 'pointer' : 'default' }}
                                        onClick={header.column.getToggleSortingHandler()}
                                    >
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                        {header.column.getIsSorted() && (
                                            <i className={`bi ${header.column.getIsSorted() === 'asc' ? 'bi-arrow-up' : 'bi-arrow-down'} ms-1`}></i>
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id}
                                        className={cell.column.columnDef.meta?.cellClassName || ''}
                                    >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <nav>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        Pagina {table.getState().pagination.pageIndex + 1} di {table.getPageCount()}
                    </div>
                    <div className="btn-group">
                        <button
                            className="btn btn-outline-primary"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            <i className="bi bi-chevron-left"></i> Precedente
                        </button>
                        <button
                            className="btn btn-outline-primary"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            Successiva <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );

}
