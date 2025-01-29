import { Box, Container, Typography, styled } from '@mui/material';
import {ReactComponent as Vodafone} from '../../assets/landing-page/vodafone.svg';
import {ReactComponent as Intel} from '../../assets/landing-page/intel.svg';
import {ReactComponent as Tesla} from '../../assets/landing-page/tesla.svg';
import {ReactComponent as Amd} from '../../assets/landing-page/amd.svg';
import {ReactComponent as Talkit} from '../../assets/landing-page/talkit.svg';

const CompanyLogo = styled(Box)({
  opacity: 0.5,
  transition: 'opacity 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.8,
  },
});

const companies = [
  { name: 'Vodafone', logo: <Vodafone width={200} height={100} /> },
  { name: 'Intel', logo: <Intel width={100} height={60} /> },
  { name: 'Tesla', logo: <Tesla width={200} height={100} /> },
  { name: 'AMD', logo: <Amd width={120} height={100} /> },
  { name: 'Talkit', logo: <Talkit width={120} height={100} /> },
];

const CompaniesHelped = () => {
  return (
    <Box
      sx={{
        bgcolor: '#202430',
        py: 4,
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          sx={{
            color: '#6B7280',
            
            textAlign: 'left',
          }}
        >
          Companies we helped grow
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 4,
            color: '#6B7280',
          }}
        >
          {companies.map((company, index) => (
            <CompanyLogo key={index} component="a"  aria-label={company.name}>
              {company.logo}
            </CompanyLogo>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CompaniesHelped;
