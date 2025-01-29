import { 
    Box,
    Button,
    Container,
    InputAdornment,
    MenuItem,
    TextField,
    Typography,
    styled
  } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {ReactComponent as LandingZigZagLines} from '../../assets/landing-page/home-zigzag-lines.svg';

import ExploreCategories from './explore-categories';
import FeaturedJobs from './featured-jobs';
import LatestJobs from './latest-jobs';
import CompaniesHelped from './companies-helped';
import {ReactComponent as JobPosting} from '../../assets/landing-page/home-job-posting.svg'
// Custom styled components
const StyledTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
    },
    flex: 1,
  });
  
  const SearchButton = styled(Button)({
    backgroundColor: '#4F46E5',
    padding: '12px 24px',
    borderRadius: '8px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#4338CA',
    },
  });
  const SearchBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '6px',
    marginTop: '48px',
  });
const index = () => {
  return (
    <Box>
    <Box sx={{ bgcolor: '#202430', minHeight: '100vh', color: 'white' }}>

    <Container maxWidth="lg" >
        <Box sx={{ maxWidth: '800px', mb: 4 }}>
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '48px', md: '64px' }, 
              fontWeight: 'bold',
              lineHeight: 1.2,
              mb: 2 
            }}
          >
            Discover<br />
            more than<br />
            <span style={{ color: '#60A5FA' }}>5000+ Jobs</span>
          </Typography>
          <LandingZigZagLines />
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#9CA3AF',
              mt: 4,
              mb: 6,
              fontWeight: '400',
            }}
          >
            Great platform for the job seeker that searching for<br />
            new career heights and passionate about startups.
          </Typography>

          <SearchBox>
            <StyledTextField
              placeholder="Job title or keyword"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: '#9CA3AF' }} />
                  </InputAdornment>
                ),
              }}
            />
            <Box 
              sx={{ 
                width: '1px', 
                height: '24px', 
                bgcolor: '#E5E7EB',
                mx: 2 
              }} 
            />
            <StyledTextField
              select
              defaultValue="Florence, Italy"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon sx={{ color: '#9CA3AF' }} />
                  </InputAdornment>
                ),
              }}
            >
              <MenuItem value="Florence, Italy">Florence, Italy</MenuItem>
            </StyledTextField>
            <SearchButton variant="contained">
              Search my job
            </SearchButton>
          </SearchBox>

          <Typography sx={{ mt: 3, color: '#9CA3AF' }}>
            Popular : 
            <span style={{ marginLeft: '8px' }}>
              UI Designer, UX Researcher, Android, Admin
            </span>
          </Typography>
        </Box>
        
      </Container>
      <CompaniesHelped />
      <ExploreCategories />
      <Box display="flex" justifyContent="center" alignItems="center" height="100%">
  <JobPosting />
</Box>
      <FeaturedJobs />
      <LatestJobs />
    </Box>
    </Box>
  )
}

export default index