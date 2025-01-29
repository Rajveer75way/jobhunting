import { 
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  styled
} from '@mui/material';
import { ReactComponent as Logo }  from '../../assets/logo.svg'
import styles from './style.module.css'

const CustomAppBar = styled(AppBar)({
  backgroundColor: '#202430',
  boxShadow: 'none',
});




const JobSearchLanding = () => {
  return (
    <Box sx={{ bgcolor: '#202430', minHeight: '17vh', color: 'white' }}>
      <CustomAppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mr: 4 }}>
                <Logo height={40} width={40} className={styles.logo} />
                <Typography variant="h6" component="div">
                  JobHuntly
                </Typography>
              </Box>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
                <Button color="inherit">Find Jobs</Button>
                <Button color="inherit">Browse Companies</Button>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button 
                color="primary" 
                sx={{ color: '#818CF8' }}
              >
                Login
              </Button>
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: '#4F46E5',
                  '&:hover': { bgcolor: '#4338CA' },
                  textTransform: 'none',
                }}
              >
                Sign Up
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </CustomAppBar>

      
    </Box>
  );
};

export default JobSearchLanding;