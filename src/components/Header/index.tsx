

import React from 'react';
import { Box, Typography, Card, CardContent, Chip, Grid, Container, Button,
         TextField, IconButton, Stack, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import DriveFileRelocationIcon from '@mui/icons-material/DriveFileRelocation';
// Types
interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  tags: string[];
  logoUrl: string;
}
// JobCard Component
const JobCard: React.FC<Job> = ({ title, company, location, type, tags, logoUrl }) => (
  <Card sx={{ mb: 2, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
    <CardContent>
      <Box display="flex" alignItems="center" gap={2}>
        <Box
          component="img"
          src={logoUrl}
          alt={`${company} logo`}
          sx={{ width: 40, height: 40 }}
        />
        <Box flex={1}>
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
          <Typography color="text.secondary">
            {company} • {location}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" gap={1} mt={2}>
        <Chip
          label={type}
          sx={{
            backgroundColor: '#E6F7F4',
            color: '#2D9CDB',
            borderRadius: '16px'
          }}
        />
        {tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            sx={{
              backgroundColor: tag === 'Marketing' ? '#FFF4E5' : '#EEE5FF',
              color: tag === 'Marketing' ? '#F2994A' : '#9B51E0',
              borderRadius: '16px'
            }}
          />
        ))}
      </Box>
    </CardContent>
  </Card>
);
// JobBoard Component
const JobBoard: React.FC = () => {
  const jobs: Job[] = [
    {
      id: 1,
      title: 'Social Media Assistant',
      company: 'Nomad',
      location: 'Paris, France',
      type: 'Full-Time',
      tags: ['Marketing', 'Design'],
      logoUrl: '/path-to-nomad-logo.png'
    },
    // Add more job listings as needed
  ];
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" component="h1">
          Latest <span style={{ color: '#2D9CDB' }}>jobs open</span>
        </Typography>
        {/* <Button
          endIcon={<DriveFileRelocationIcon />}
          sx={{ color: '#2D9CDB' }}
        >
          Show all jobs
        </Button> */}
      </Box>
      <Grid container spacing={2}>
        {jobs.map(job => (
          <Grid item xs={12} md={6} key={job.id}>
            <JobCard {...job} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
// Footer Component
const Footer: React.FC = () => (
  <Box sx={{ bgcolor: '#202430', color: 'white', py: 6 }}>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Stack spacing={2}>
            <Box display="flex" alignItems="center" gap={1}>
              <Box
                component="img"
                src="/path-to-logo.png"
                alt="JobHuntly"
                sx={{ width: 32, height: 32 }}
              />
              <Typography variant="h6">JobHuntly</Typography>
            </Box>
            <Typography variant="body2" color="gray">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>About</Typography>
          <Stack spacing={1}>
            {['Companies', 'Pricing', 'Terms', 'Advice', 'Privacy Policy'].map((item) => (
              <Link
                key={item}
                href="#"
                color="inherit"
                sx={{ textDecoration: 'none', '&:hover': { color: '#2D9CDB' } }}
              >
                {item}
              </Link>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>Resources</Typography>
          <Stack spacing={1}>
            {['Help Docs', 'Guide', 'Updates', 'Contact Us'].map((item) => (
              <Link
                key={item}
                href="#"
                color="inherit"
                sx={{ textDecoration: 'none', '&:hover': { color: '#2D9CDB' } }}
              >
                {item}
              </Link>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>Get job notifications</Typography>
          <Typography variant="body2" gutterBottom>
            The latest job news, articles, sent to your inbox weekly.
          </Typography>
          <Box display="flex" gap={1} mt={2}>
            <TextField
              placeholder="Email Address"
              variant="outlined"
              size="small"
              sx={{ bgcolor: 'white', borderRadius: 1 }}
            />
            <Button
              variant="contained"
              sx={{ bgcolor: '#4F46E5', '&:hover': { bgcolor: '#4338CA' } }}
            >
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          mt: 6,
          pt: 4,
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2
        }}
      >
        <Typography variant="body2" color="gray">
          2021 © JobHuntly. All rights reserved.
        </Typography>
        <Stack direction="row" spacing={2}>
          {[FacebookIcon, InstagramIcon, TwitterIcon, LinkedInIcon].map((Icon, index) => (
            <IconButton
              key={index}
              sx={{ color: 'gray', '&:hover': { color: '#2D9CDB' } }}
            >
              <Icon />
            </IconButton>
          ))}
        </Stack>
      </Box>
    </Container>
  </Box>
);
export default { JobBoard, Footer };

