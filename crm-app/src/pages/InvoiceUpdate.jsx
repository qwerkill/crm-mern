import { Box, Button, FormControl, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

const InvoiceUpdate = ({ invoices, setInvoices, fetchInvoices }) => {
    const { id } = useParams();

    const navigate = useNavigate();

    const [creadanstials, setCreadanstials] = useState({});
    const [editModel, setEditModel] = useState(id ? true : false);

    console.log(id)


    useEffect(() => {
        editModel && fetch(`http://localhost:8000/api/invoices/${id}`)
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
            fetch(`http://localhost:8000/api/invoices/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(creadanstials)
            })
                .then(res => res.json())
                .then(() => {
                    fetchInvoices();
                })
                .then(() => navigate("/"));
        } else {
            fetch("http://localhost:8000/api/invoices", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(creadanstials)
            })
                .then(res => res.json())
                .then(() => {
                    fetchInvoices();
                })
                .then(() => navigate("/"));
        }
    }

    console.log(creadanstials)


    return (
        <Box>
            <Typography variant="h2">Modifier une facture</Typography>
            <Box component="form" onSubmit={(e) => handleSubmit(e)}>
                <FormControl>
                    <TextField
                        name="amount"
                        variant="outlined"
                        label="Montant"
                        sx={{ width: "100%" }}
                        onChange={handleChange}
                        value={creadanstials.amount || ""}
                    />
                    <TextField
                        name="status"
                        variant="outlined"
                        label="Status"
                        sx={{ width: "100%" }}
                        onChange={handleChange}
                        value={creadanstials.status || ""}
                    />
                    <Button variant="contained" color="primary" size="small" sx={{ mt: 2 }} type="submit">
                        Enregistrer
                    </Button>
                </FormControl>
            </Box>
        </Box>
    );
}

export default InvoiceUpdate;