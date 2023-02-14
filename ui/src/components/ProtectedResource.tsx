import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getProtectedResource } from "../services/user.service";

function ProtectedResource() {
  const [message, setMessage] = useState<string>("");

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
        <Typography component="h3">{message}</Typography>
      </Box>
    </Container>
  );
}

export default ProtectedResource;
