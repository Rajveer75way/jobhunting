
import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Card, 
  Button,
  styled 
} from '@mui/material';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import TimelineIcon from '@mui/icons-material/Timeline';
import CampaignIcon from '@mui/icons-material/Campaign';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ComputerIcon from '@mui/icons-material/Computer';
import CodeIcon from '@mui/icons-material/Code';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GroupsIcon from '@mui/icons-material/Groups';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Custom styled components
const CategoryCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
  '&.active': {
    backgroundColor: '#4F46E5',
    color: 'white',
    '& .MuiSvgIcon-root, & .MuiTypography-root': {
      color: 'white',
    }
  }
}));

const ArrowButton = styled(Button)({
  color: '#4F46E5',
  textTransform: 'none',
  padding: 0,
  minWidth: 'auto',
  '&:hover': {
    backgroundColor: 'transparent',
  }
});

const categories = [
  { icon: <DesignServicesIcon />, title: 'Design', jobs: 235 },
  { icon: <TimelineIcon />, title: 'Sales', jobs: 756 },
  { icon: <CampaignIcon />, title: 'Marketing', jobs: 140, active: true },
  { icon: <AccountBalanceWalletIcon />, title: 'Finance', jobs: 325 },
  { icon: <ComputerIcon />, title: 'Technology', jobs: 436 },
  { icon: <CodeIcon />, title: 'Engineering', jobs: 542 },
  { icon: <BusinessCenterIcon />, title: 'Business', jobs: 211 },
  { icon: <GroupsIcon />, title: 'Human Resource', jobs: 346 },
];

const ExploreCategories = () => {
  return (
    <Box sx={{ bgcolor: '#202430', py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          mb: 4 
        }}>
          <Typography variant="h3" sx={{ 
            color: 'white',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}>
            Explore by <span style={{ color: '#60A5FA' }}>category</span>
          </Typography>
          
          <ArrowButton 
            endIcon={<ArrowForwardIcon />}
            sx={{ color: '#6366F1' }}
          >
            Show all jobs
          </ArrowButton>
        </Box>

        <Grid container spacing={3}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <CategoryCard className={category.active ? 'active' : ''}>
                <Box sx={{ 
                  color: category.active ? 'white' : '#4F46E5',
                  '& .MuiSvgIcon-root': {
                    fontSize: 40,
                  }
                }}>
                  {category.icon}
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  {category.title}
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mt: 'auto'
                }}>
                  <Typography sx={{ 
                    color: category.active ? 'white' : '#6B7280',
                  }}>
                    {category.jobs} jobs available
                  </Typography>
                  <ArrowForwardIcon sx={{ 
                    fontSize: 20,
                    color: category.active ? 'white' : '#4F46E5'
                  }} />
                </Box>
              </CategoryCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ExploreCategories;