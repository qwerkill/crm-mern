import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const ActionsRowCustomer = ({fetchCustomers,params}) => {
    const handleDelete = (e) => {
        e.stopPropagation();
        fetch(`http://localhost:8000/api/customers/${params.row._id}`, {
            method: "delete",
        })
        .then(res => res.json())
        .then(()=> {
            fetchCustomers();
    }
        ) 
    }


    return (
        <Box display="flex" justifyContent="space-around">
            <Link  to={`/customers/${params.row._id}`}>
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
 
export default ActionsRowCustomer;