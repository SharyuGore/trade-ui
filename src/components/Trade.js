import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';

import { useEffect, useState } from 'react';

const columns = [
    { field: 'tradeid', headerName: 'Trade ID', width: 170, sortable: false, filterable: false, disableColumnMenu: true },
    { field: 'version', headerName: 'Version', width: 170, sortable: false, filterable: false, disableColumnMenu: true, getApplyQuickFilterFn: undefined },
    { field: 'counterPartyId', headerName: 'Counter-Party Id', width: 170, sortable: false, filterable: false, disableColumnMenu: true, getApplyQuickFilterFn: undefined },
    { field: 'bookId', headerName: 'Book-Id', width: 170, sortable: false, filterable: false, disableColumnMenu: true, getApplyQuickFilterFn: undefined },
    { field: 'maturityDate', headerName: 'Maturity Date', width: 170, sortable: false, filterable: false, disableColumnMenu: true, getApplyQuickFilterFn: undefined },
    { field: 'createdDate', headerName: 'Created Date', width: 170, sortable: false, filterable: false, disableColumnMenu: true, getApplyQuickFilterFn: undefined },
    { field: 'expired', headerName: 'Expired', width: 170, sortable: false, filterable: false, disableColumnMenu: true, getApplyQuickFilterFn: undefined },
   
];

function QuickSearchToolbar() {
    return (
        <Box
            sx={{ textAlign: 'left' }}
        >
            <GridToolbarQuickFilter />
        </Box>
    );
}

function Trade() {
    const [tableData, setTableData] = useState([]);

    const fetchData = () => {
        return fetch("http://localhost:8080/getAllTrades")
            .then((response) => response.json())
            .then((data) => setTableData(data));
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <Box sx={{ height: 400, width: 1 }}>
                <DataGrid
                    rows={tableData}
                    columns={columns}
                    getRowId={(row) => row.version + row.tradeid}
                    components={{ Toolbar: QuickSearchToolbar }}
                    initialState={{
                        pagination: {
                            pageSize: 10,
                        },
                    }}

                />

            </Box>
        </>
    )
}

export default Trade