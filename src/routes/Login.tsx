import Box from "@mui/material/Box";
import TextInput from "../components/TextInput";
import Typography from "@mui/material/Typography";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <Typography variant="h2">Login</Typography>
        <TextInput label="Login" type="text" dataTestId="loginInput" />
        <TextInput
          label="Password"
          type="password"
          dataTestId="passwordInput"
        />
      </Box>
    </Box>
  );
};

export default Login;
