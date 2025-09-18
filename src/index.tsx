import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Wallet } from "./screens/Wallet/Wallet";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Wallet />
  </StrictMode>
);
