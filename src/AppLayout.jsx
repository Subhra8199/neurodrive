// import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Gotham, sans-serif',
  },
});

export default function AppLayout() {
  return (
    <>
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <SideBar/>
      <Outlet/>
    </ThemeProvider>
    </>
    
  )
}


