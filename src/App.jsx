import AuthProvider from "./AuthProvider";
import Login from "./Login";
import Page1 from "./Page1";
import Page2 from "./Page2";
import ProtectedPage from "./ProtectedPage";
import Menu from "./Menu";
import { Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <AuthProvider>
      <Menu />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/page-1"
          element={
            <ProtectedPage>
              <Page1 />
            </ProtectedPage>
          }
        />
        <Route
          path="/page-2"
          element={
            <ProtectedPage>
              <Page2 />
            </ProtectedPage>
          }
        />
        <Route path="*" element={<Navigate replace to="/page-1" />} />
      </Routes>
    </AuthProvider>
  );
}
