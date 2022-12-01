import { Box, Button, TextField, Typography } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import ActionsRowCustomer from "../components/table/ActionsRowCustomer";





const CustomerListPage = ({customers,setCustomers,fetchCustomers}) => {
    
    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        {
            field: 'firstName', headerName: 'Prénom', width: 130,
        },
        {
            field: 'lastName', headerName: 'Nom', width: 250,
        },
        {
            field: 'invoices', headerName: 'Liste des Factures', width: 90,
            valueGetter: (params) => `${params.row.invoices.length}`,
        },
        {
            headerName: 'Actions', width: 300,
            renderCell: (params) => <ActionsRowCustomer params={params} fetchCustomers={fetchCustomers}/>
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
                <Typography variant="h2">Listes des Clients</Typography>
                <Link to="/customers/create">
                <Button variant="contained">Nouveau Client</Button>
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
                    rows={customers}
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

export default CustomerListPage;