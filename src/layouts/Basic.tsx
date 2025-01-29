import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { createStyles } from "@mui/styles";
import Header from "../components/Header"; // Import your header component
import Footer from "../components/Footer"; // Import your footer component

const useStyle = () => createStyles({
  root: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column', // Ensure the content is laid out vertically
  },
  header: {
    // Add any styles specific to the header if needed
  },
  footer: {
    marginTop: 'auto', // Push footer to the bottom
  },
  content: {
    flex: 1, // Ensure content section takes available space between header and footer
  },
});

const Basic = () => {
  const styles = useStyle();

  return (
    <Box sx={styles.root}>
      {/* Header Section */}
      <Box sx={styles.header}>
        <Header />
      </Box>

      {/* Main Content Area */}
      <Box sx={styles.content}>
        <Outlet />
      </Box>

      {/* Footer Section */}
      <Box sx={styles.footer}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Basic;
