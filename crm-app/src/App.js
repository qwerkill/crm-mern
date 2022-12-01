import InvoiceListPage from "./pages/InvoiceListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerListPage from "./pages/CustomerListPage";
import MainLayout from "./layout/MainLayout";
import InvoiceUpdate from "./pages/InvoiceUpdate";
import { useEffect, useState } from "react";
import CustomerUpdate from "./pages/CustomerUpdate";

function App() {

  const [invoices, setInvoices] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchInvoices();
    fetchCustomers();
  }, []);

  const fetchInvoices = async () => {
    fetch("http://localhost:8000/api/invoices")
      .then(response => response.json())
      .then(data => setInvoices(data));
  }

  const fetchCustomers = async () => {
    fetch("http://localhost:8000/api/customers")
      .then(response => response.json())
      .then(data => setCustomers(data));
  }

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<InvoiceListPage invoices={invoices} setInvoices={setInvoices} fetchInvoices={fetchInvoices} />} />
          <Route path="/customers" element={<CustomerListPage customers={customers} setCustomers={setCustomers} fetchCustomers={fetchCustomers}/>} />
          <Route path="/invoices/:id" element={<InvoiceUpdate invoices={invoices} setInvoices={setInvoices} fetchInvoices={fetchInvoices} />} />
          <Route path="/invoices" element={<InvoiceUpdate invoices={invoices} setInvoices={setInvoices} fetchInvoices={fetchInvoices}  />} />
          <Route path="/customers/:id" element={<CustomerUpdate customers={customers} setCustomers={setCustomers} fetchCustomers={fetchCustomers}/>} />
          <Route path="/customers/create" element={<CustomerUpdate customers={customers} setCustomers={setCustomers} fetchCustomers={fetchCustomers}/>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
