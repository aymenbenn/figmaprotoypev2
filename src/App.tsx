import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
// Import all page components
import { Dashboard } from './pages/Dashboard';
import { Production } from './pages/Production';
import { Procurement } from './pages/Procurement';
import { Inventory } from './pages/Inventory';
import { Orders } from './pages/Orders';
import { Users } from './pages/Users';
import { Logistics } from './pages/Logistics';
import { QC } from './pages/QC';
import { Maintenance } from './pages/Maintenance';
import { Reports } from './pages/Reports';
export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/production" element={<Production />} />
          <Route path="/procurement" element={<Procurement />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/users" element={<Users />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/qc" element={<QC />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Layout>
    </BrowserRouter>);

}