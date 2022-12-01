import { Box, Button, TextField, Typography } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import ActionsRow from "../components/table/ActionsRow";
import CreatedAtRow from "../components/table/CreatedAtRow";
import StatusRow from "../components/table/StatusRow";






const InvoiceListPage = ({ invoices, setInvoices, fetchInvoices }) => {


    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        {
            field: 'customer', headerName: 'Client', width: 130,
            valueGetter: (params) => `${params.row.customer?.firstName} ${params.row.customer?.lastName}`,

        },
        {
            field: 'createdAt', headerName: 'Date d\'envoie', width: 250,
            renderCell: (params) => <CreatedAtRow params={params} />
        },
        {
            field: 'status', headerName: 'status', width: 90,
            renderCell: (params) => <StatusRow params={params} />,
        },
        {
            field: 'amount', headerName: 'Montant', width: 160,
            valueGetter: (params) => `${params.row.amount} €`,
        },
        {
            headerName: 'Actions', width: 300,
            renderCell: (params) => <ActionsRow params={params} fetchInvoices={fetchInvoices} />
        },
    ];



    return (
        <Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Typography variant="h2">Liste des factures</Typography>
                <Link to="/invoices">
                    <Button variant="contained">Nouvelle facture</Button>
                </Link>
            </Box>
            <Box components='form'>
                <TextField
                    variant='outlined'
                    label='Rechercher'
                    sx={{ width: "100%" }}
                />
            </Box>
            <Box
                sx={{
                    height: 400,
                    width: '100%',
                    mt: 4,
                }}
            >
                <DataGrid
                    rows={invoices}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    getRowId={(row) => row._id}
                />
            </Box>
        </Box>

    );
}

export default InvoiceListPage;