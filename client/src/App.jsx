import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import AuthForms from "./pages/auth-forms";
import GroupConversation from "./pages/group-conversation";
import ChatConversation from "./pages/chat-conversation";
import Fallback from "./components/fallback";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/conversations" replace />} />
        <Route
          path="/auth"
          element={
            <PublicRoutes>
              <AuthForms />
            </PublicRoutes>
          }
        />
        <Route
          path="/conversations"
          element={
            <ProtectedRoutes>
              <Layout>
                <Fallback />
              </Layout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/conversations/:conversationId"
          element={
            <ProtectedRoutes>
              <ChatConversation />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/groups"
          element={
            <ProtectedRoutes>
              <Layout>
                <Fallback />
              </Layout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/groups/:conversationId"
          element={
            <ProtectedRoutes>
              <GroupConversation />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

function ProtectedRoutes({ children }) {
  if (!localStorage.getItem("authToken")) {
    return <Navigate to="/auth" />;
  }
  return children;
}

function PublicRoutes({ children }) {
  if (localStorage.getItem("authToken")) {
    return <Navigate to="/conversations" replace />;
  }
  return children;
}

export default App;
