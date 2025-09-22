import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Wallet } from "./screens/Wallet/Wallet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cars } from "./screens/Cars";
import { FinancialReports } from "./screens/FinancialReports";
import { WalletReports } from "./screens/WalletReports";
import { MoneyRefundRequests } from "./screens/MoneyRefundRequests/MoneyRefundRequests";
import { WalletChargeRequests } from "./screens/ChargeRequests/WalletChargeRequests";
import { PerolifeStationLocations } from "./screens/PerolifeStationLocations/perolifestationlocations";

createRoot(document.getElementById("app") as HTMLElement).render(
  // <StrictMode>
  //   <Wallet />
  // </StrictMode>
  <Router>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/financialreports" element={<FinancialReports />} />
      <Route path="/walletreports" element={<WalletReports />} />
      <Route path="/moneyrefundrequests" element={<MoneyRefundRequests />} />
      <Route path="/walletchargerequests" element={<WalletChargeRequests />} />
      <Route
        path="/perolifestationlocations"
        element={<PerolifeStationLocations />}
      />
    </Routes>
  </Router>
);
