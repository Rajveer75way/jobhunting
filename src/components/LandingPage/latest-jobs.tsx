import React, { ReactElement } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  Grid, 
  Button,
  Avatar,
  Chip,
  styled 
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {ReactComponent as Terraform} from '../../assets/landing-page/Terraform Enterprise.svg'
import {ReactComponent as Nomad} from '../../assets/landing-page/Nomad.svg'
import {ReactComponent as Netlify} from '../../assets/landing-page/Netlify.svg'
import {ReactComponent as Dropbox} from '../../assets/landing-page/Dropbox.svg'
import {ReactComponent as Maze} from '../../assets/landing-page/Maze.svg'
import {ReactComponent as Udacity} from '../../assets/landing-page/Udacity.svg'
import {ReactComponent as Packer} from '../../assets/landing-page/Packer.svg'
import {ReactComponent as Webflow} from '../../assets/landing-page/Webflow.svg'

// Custom styled components
const JobCard = styled(Card)({
  padding: '24px',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '16px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  }
});

const StyledChip = styled(Chip)<{ variant: 'fullTime' | 'marketing' | 'design' }>(({ variant }) => ({
  borderRadius: '16px',
  height: '28px',
  ...(variant === 'fullTime' && {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    color: '#10B981',
    border: 'none',
  }),
  ...(variant === 'marketing' && {
    backgroundColor: 'transparent',
    color: '#F59E0B',
    border: '1px solid #F59E0B',
  }),
  ...(variant === 'design' && {
    backgroundColor: 'transparent',
    color: '#6366F1',
    border: '1px solid #6366F1',
  }),
}));

interface Job {
  company: {
    name: string;
    logo: ReactElement;
    location: string;
  };
  title: string;
  tags: string[];
}

const jobs: Job[] = [
  {
    company: {
      name: 'Nomad',
      logo: <Nomad />,
      location: 'Paris, France'
    },
    title: 'Social Media Assistant',
    tags: ['Full-Time', 'Marketing', 'Design']
  },
  {
    company: {
      name: 'Netlify',
      logo: <Netlify />,
      location: 'Paris, France'
    },
    title: 'Social Media Assistant',
    tags: ['Full-Time', 'Marketing', 'Design']
  },
  {
    company: {
      name: 'Dropbox',
      logo: <Dropbox />,
      location: 'San Fransisco, USA'
    },
    title: 'Brand Designer',
    tags: ['Full-Time', 'Marketing', 'Design']
  },
  {
    company: {
      name: 'Maze',
      logo: <Maze />,
      location: 'San Fransisco, USA'
    },
    title: 'Brand Designer',
    tags: ['Full-Time', 'Marketing', 'Design']
  },
  {
    company: {
      name: 'Terraform',
      logo: <Terraform />,
      location: 'Hamburg, Germany'
    },
    title: 'Interactive Developer',
    tags: ['Full-Time', 'Marketing', 'Design']
  },
  {
    company: {
      name: 'Udacity',
      logo: <Udacity />,
      location: 'Hamburg, Germany'
    },
    title: 'Interactive Developer',
    tags: ['Full-Time', 'Marketing', 'Design']
  },
  {
    company: {
      name: 'Packer',
      logo: <Packer />,
      location: 'Lucern, Switzerland'
    },
    title: 'HR Manager',
    tags: ['Full-Time', 'Marketing', 'Design']
  },
  {
    company: {
      name: 'Webflow',
      logo: <Webflow />,
      location: 'Lucern, Switzerland'
    },
    title: 'HR Manager',
    tags: ['Full-Time', 'Marketing', 'Design']
  },
];

const LatestJobs = () => {
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
            Latest <span style={{ color: '#60A5FA' }}>jobs open</span>
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

        <Grid container spacing={2}>
          {jobs.map((job, index) => (
            <Grid item xs={12} md={6} key={index}>
              <JobCard>
              {job.company.logo} {/* Render the logo component */}

                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" sx={{ mb: 0.5 }}>
                    {job.title}
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: '#6B7280',
                      mb: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    {job.company.name} • {job.company.location}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <StyledChip 
                      label="Full-Time" 
                      variant="fullTime"
                    />
                    <StyledChip 
                      label="Marketing" 
                      variant="marketing"
                    />
                    <StyledChip 
                      label="Design" 
                      variant="design"
                    />
                  </Box>
                </Box>
              </JobCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LatestJobs;
