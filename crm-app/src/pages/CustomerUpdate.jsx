import { Box, Button, FormControl, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

const CustomerUpdate = ({fetchCustomers}) => {
    const { id } = useParams();

    const navigate = useNavigate();

    const [creadanstials, setCreadanstials] = useState({});
    const [editModel, setEditModel] = useState(id ? true : false);

    console.log(id)


    useEffect(() => {
        editModel && fetch(`http://localhost:8000/api/customers/${id}`)
            .then(res => res.json())
            .then(data => setCreadanstials(data))
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCreadanstials({
            ...creadanstials,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", editModel)
        if (editModel) {
            fetch(`http://localhost:8000/api/customers/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(creadanstials)
            })
                .then(res => res.json())
                .then(() => {
                    fetchCustomers();
                })
                .then(() => navigate("/customers"));
        } else {
            fetch("http://localhost:8000/api/customers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(creadanstials)
            })
                .then(res => res.json())
                .then(() => {
                    fetchCustomers();
                })
                .then(() => navigate("/customers"));
        }
    }

    console.log(creadanstials)


    return (
        <Box>
            <Typography variant="h2">Modifier la fiche client</Typography>
            <Box component="form" onSubmit={(e) => handleSubmit(e)}>
                <FormControl>
                    <TextField
                        name="firstName"
                        variant="outlined"
                        label="Prénom"
                        sx={{ width: "100%" }}
                        onChange={handleChange}
                        value={creadanstials.firstName || ""}
                    />
                    <TextField
                        name="lastName"
                        variant="outlined"
                        label="Nom"
                        sx={{ width: "100%" }}
                        onChange={handleChange}
                        value={creadanstials.lastName || ""}
                    />
                    <Button variant="contained" color="primary" size="small" sx={{ mt: 2 }} type="submit">
                        Enregistrer
                    </Button>
                </FormControl>
            </Box>
        </Box>
    );
}
 
export default CustomerUpdate;