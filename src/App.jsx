import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import { useSupabaseAuth } from "./integrations/supabase/auth.jsx";
import { Button } from "@chakra-ui/react";

function App() {
  const { session, logout } = useSupabaseAuth();

  return (
    <Router>
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "1rem" }}>
        {session ? (
          <Button onClick={logout}>Logout</Button>
        ) : (
          <Button as="a" href="/login">Login</Button>
        )}
      </div>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;