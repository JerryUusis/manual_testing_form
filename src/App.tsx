import { Routes, Route, BrowserRouter } from "react-router";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";
import CssBaseline from "@mui/material/CssBaseline";
import Login from "./routes/Login";
import CreateBugReportSurvey from "./routes/CreateBugReportSurvey";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/login" element={<Login />} />
          <Route path="/new" element={<CreateBugReportSurvey />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
