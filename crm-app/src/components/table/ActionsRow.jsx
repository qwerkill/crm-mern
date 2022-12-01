import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const ActionsRow = ({ params,fetchInvoices }) => {


    const handleDelete = (e) => {
        e.stopPropagation();
        fetch(`http://localhost:8000/api/invoices/${params.row._id}`, {
            method: "delete",
        })
        .then(res => res.json())
        .then(()=> {
            fetchInvoices();
    }
        ) 
    }


    return (
        <Box display="flex" justifyContent="space-around">
            <Link  to={`/invoices/${params.row._id}`}>
                <Button variant="contained" color="primary" size="small" >
                    Editer
                </Button>
            </Link>
                <Button variant="contained" color="secondary" size="small" sx={{ ml: 2 }} onClick={handleDelete}>
                    Supprimer
                </Button>
        </Box>
    );
}

export default ActionsRow;