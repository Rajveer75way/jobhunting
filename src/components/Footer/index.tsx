import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from './style.module.css';
import { ReactComponent as Logo }  from '../../assets/logo.svg'

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#202430", color: "white", py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          {/* Brand Section */}
          <Grid item xs={12} md={3}>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
            <Logo height={40} width={40} className={styles.logo} />

              <Typography variant="h6">JobHuntly</Typography>
            </Box>
            <Typography variant="body2" color="grey.400" sx={{ mb: 3 }}>
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </Typography>
          </Grid>
          {/* About Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>About</Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              <Typography  color="grey.400">Companies</Typography>
              <Typography  color="grey.400">Pricing</Typography>
              <Typography  color="grey.400">Terms</Typography>
              <Typography color="grey.400">Advice</Typography>
              <Typography  color="grey.400">Privacy Policy</Typography>
            </Box>
          </Grid>
          {/* Resources Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>Resources</Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              <Typography color="grey.400">Help Docs</Typography>
              <Typography color="grey.400">Guide</Typography>
              <Typography color="grey.400">Updates</Typography>
              <Typography color="grey.400">Contact Us</Typography>
            </Box>
          </Grid>
          {/* Newsletter Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>Get job notifications</Typography>
            <Typography variant="body2" color="grey.400" sx={{ mb: 2 }}>
              The latest job news, articles, sent to your inbox weekly.
            </Typography>
            <Box display="flex" gap={1}>
              <TextField
                placeholder="Email Address"
                sx={{ bgcolor: "white", borderRadius: 1, width: "100%" }}
                
              />
              <Button variant="contained" sx={{ whiteSpace: "nowrap", width: "200px"  }}>
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
        {/* Bottom Section */}
        <Box
          sx={{
            mt: 8,
            pt: 3,
            borderTop: 1,
            borderColor: "grey.800",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2
          }}
        >
          <Typography variant="body2" color="grey.400">
            2021 © JobHuntly. All rights reserved.
          </Typography>
          <Box display="flex" gap={2}>
            <IconButton size="small" sx={{ color: "grey.400" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton size="small" sx={{ color: "grey.400" }}>
              <InstagramIcon />
            </IconButton>
            <IconButton size="small" sx={{ color: "grey.400" }}>
              <GitHubIcon />
            </IconButton>
            <IconButton size="small" sx={{ color: "grey.400" }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton size="small" sx={{ color: "grey.400" }}>
              <TwitterIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Footer;
