import { Avatar, Box, Button, Card, Chip, Container, Grid, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled } from '@mui/material/styles';
import { ReactComponent as Logo1 } from '../../assets/landing-page/1.svg';
import { ReactComponent as Logo2 } from '../../assets/landing-page/2.svg';
import { ReactComponent as Logo3 } from '../../assets/landing-page/3.svg';
import { ReactComponent as Logo4 } from '../../assets/landing-page/4.svg';
import { ReactComponent as Logo5 } from '../../assets/landing-page/5.svg';
import { ReactComponent as Logo6 } from '../../assets/landing-page/6.svg';
import { ReactComponent as Logo7 } from '../../assets/landing-page/7.svg';
import { ReactComponent as Logo8 } from '../../assets/landing-page/8.svg';
const JobCard = styled(Card)({
    padding: '24px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    }
  });
  const StyledChip = styled(Chip)<{ chiptype: 'fullTime' | 'marketing' | 'design' | 'business' | 'technology' }>(({ chiptype }) => ({
    height: '28px',
    ...(chiptype === 'fullTime' && {
      backgroundColor: '#EEF2FF',
      color: '#6366F1',
      border: '1px solid #6366F1',
    }),
    ...(chiptype === 'marketing' && {
      backgroundColor: 'rgba(245, 158, 11, 0.1)',
      color: '#F59E0B',
    }),
    ...(chiptype === 'design' && {
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      color: '#10B981',
    }),
    ...(chiptype === 'business' && {
      backgroundColor: '#EEF2FF',
      color: '#6366F1',
    }),
    ...(chiptype === 'technology' && {
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
      color: '#EF4444',
    }),
  }));
  interface Job {
    logo: any;
    position: string;
    company: string;
    location: string;
    description: string;
    tags: Array<{
      label: string;
      type: 'fullTime' | 'marketing' | 'design' | 'business' | 'technology';
    }>;
  }
  const jobs: Job[] = [
    {
      logo: <Logo1 />,
      position: 'Email Marketing',
      company: 'Revolut',
      location: 'Madrid, Spain',
      description: 'Revolut is looking for Email Marketing to help team ma...',
      tags: [
        { label: 'Full Time', type: 'fullTime' },
        { label: 'Marketing', type: 'marketing' },
        { label: 'Design', type: 'design' }
      ]
    },
    {
      logo: <Logo2 />,
      position: 'Brand Designer',
      company: 'Dropbox',
      location: 'San Fransisco, US',
      description: 'Dropbox is looking for Brand Designer to help the team t...',
      tags: [
        { label: 'Full Time', type: 'fullTime' },
        { label: 'Design', type: 'design' },
        { label: 'Business', type: 'business' }
      ]
    },
    {
      logo: <Logo3 />,
      position: 'Email Marketing',
      company: 'Pitch',
      location: 'Berlin, Germany',
      description: 'Pitch is looking for Customer Manager to join marketing t...',
      tags: [
        { label: 'Full Time', type: 'fullTime' },
        { label: 'Marketing', type: 'marketing' }
      ]
    },
    {
      logo: <Logo4 />,
      position: 'Visual Designer',
      company: 'Blinklist',
      location: 'Granada, Spain',
      description: 'Blinkist is looking for Visual Designer to help team desi...',
      tags: [
        { label: 'Full Time', type: 'fullTime' },
        { label: 'Design', type: 'design' },
      ]
    },
    {
      logo: <Logo5 />,
      position: 'Product Designer',
      company: 'ClassPass',
      location: 'Manchestor, UK',
      description: 'ClassPass is looking for Product Designer to help us...',
      tags: [
        { label: 'Full Time', type: 'fullTime' },
        { label: 'Marketing', type: 'marketing' },
        { label: 'Design', type: 'design' }
      ]
    },
    {
      logo: <Logo6 />,
      position: 'Lead Designer',
      company: 'Canva',
      location: 'Ontario,Canada',
      description: 'Canva is looking for Lead Engineer to help develop n...',
      tags: [
        { label: 'Full Time', type: 'fullTime' },
        { label: 'Design', type: 'design' },
        { label: 'Business', type: 'business' }
      ]
    },{
      logo: <Logo7 />,
      position: 'Brand Strategist',
      company: 'GoDaddy',
      location: 'Marseillt, France',
      description: 'GoDaddy is looking for Brand Strategist to join the team...',
      tags: [
        { label: 'Full Time', type: 'fullTime' },
        { label: 'Marketing', type: 'marketing' },
      ]
    },
    {
      logo: <Logo8 />,
      position: 'Data Analyst',
      company: 'Twitter',
      location: 'San Diego, US',
      description: 'Twitter is looking for Data Analyst to help team desi...',
      tags: [
        { label: 'Full Time', type: 'fullTime' },
        { label: 'Technology', type: 'technology' }
      ]
    },
    // Add other jobs here...
  ];
  const FeaturedJobs = () => {
    return (
      <Box sx={{ bgcolor: '#202430', py: 8,paddingX:"7%" }}>
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
              Featured <span style={{ color: '#60A5FA' }}>jobs</span>
            </Typography>
            <Button
              endIcon={<ArrowForwardIcon />}
              sx={{
                color: '#6366F1',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'transparent',
                }
              }}
            >
              Show all jobs
            </Button>
          </Box>
          <Grid container spacing={3}>
            {jobs.map((job, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <JobCard>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Avatar
                      sx={{
                        width: 48,
                        height: 48,
                        backgroundColor: 'white',
                      }}
                    >
                      {job.logo}
                    </Avatar>
                    <Typography  sx={{ color: '#4640DE',border: '1px solid #4640DE'
                        ,padding:"7px",fontSize:"small"}}>
                      Full Time
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {job.position}
                    </Typography>
                    <Typography sx={{ color: '#6B7280', fontSize: '0.775rem' }}>
                      {job.company} • {job.location}
                    </Typography>
                  </Box>
                  <Typography sx={{ color: '#6B7280', flex: 1, fontSize: '0.775rem', mb: 2 }}>
                    {job.description}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {job.tags.slice(1).map((tag, idx) => (
                      <StyledChip
                        key={idx}
                        label={tag.label}
                        chiptype={tag.type}
                      />
                    ))}
                  </Box>
                </JobCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    );
  };
  export default FeaturedJobs;