import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const schema = yup.object({
  fullName: yup.string().required("Full name is required."),
  email: yup.string().email("Email is invalid.").required("Email is required."),
  password: yup
    .string()
    .required("Please enter a password.")
    .min(12, "Password must contain 12 or more characters.")
    .matches(/[0-9]/, "Password requires a number.")
    .matches(/[a-z]/, "Password requires a lowercase letter.")
    .matches(/[A-Z]/, "Password requires an uppercase letter.")
    .matches(/[^\w]/, "Password requires a special character."),
  confirmPassword: yup
    .string()
    .nullable()
    // https://github.com/jquense/yup/issues/104#issuecomment-1181309236
    .oneOf(
      [yup.ref("password"), null],
      "Password and Confirm Password are not a match."
    )
    .required("Password and Confirm Password are not a match."),
});

type FormData = yup.InferType<typeof schema>;

export default function SignUp() {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => console.log(data);

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="fullName"
                // defaultValue prop is required in order to prevent React error "A component is changing an uncontrolled input to be controlled."
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    {...register("fullName")}
                    required
                    label="Full Name"
                    fullWidth
                    autoFocus
                  />
                )}
              />
              <Typography variant="inherit" color="error">
                {errors.fullName?.message}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="email"
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    {...register("email")}
                    required
                    fullWidth
                    label="Email Address"
                    autoFocus
                  />
                )}
              />
              <Typography variant="inherit" color="error">
                {errors.email?.message}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="password"
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    {...register("password")}
                    required
                    fullWidth
                    label="Password"
                    type="password"
                  />
                )}
              />
              <Typography variant="inherit" color="error">
                {errors.password?.message}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="confirmPassword"
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    {...register("confirmPassword")}
                    required
                    label="Confirm Password"
                    type="password"
                    fullWidth
                    autoComplete="current-password"
                  />
                )}
              />
              <Typography variant="inherit" color="error">
                {errors.confirmPassword?.message}
              </Typography>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
