import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Box, Button, Container, CssBaseline, Typography } from "@mui/material";
import { getProtectedResource } from "../services/user.service";
import { getCurrentUser, signout } from "../services/auth.service";

function ProtectedResource() {
  let navigate: NavigateFunction = useNavigate();
  const currentUser = getCurrentUser();
  const [message, setMessage] = useState<string>("");

  const handleSignOut = () => {
    signout();
    navigate("/signin");
    window.location.reload();
  };

  useEffect(() => {
    getProtectedResource().then(
      (response) => {
        setMessage(response.data);
      },
      (error) => {
        const _message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(_message);
      }
    );
  }, []);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        {currentUser && (
          <Button variant="contained" onClick={handleSignOut} sx={{ mb: 8 }}>
            Sign Out
          </Button>
        )}
        {!currentUser && (
          <Button
            variant="contained"
            onClick={() => navigate("/signin")}
            sx={{ mb: 8 }}
          >
            Sign In
          </Button>
        )}
        <Typography component="h3">{message}</Typography>
      </Box>
    </Container>
  );
}

export default ProtectedResource;
