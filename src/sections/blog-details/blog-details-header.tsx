import React from 'react';
import DOMPurify from 'dompurify';
import { motion } from 'framer-motion';

import { Container, Typography, Box, Paper, Stack, Avatar, Chip, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

import { fDate } from 'src/utils';
import { useRouter } from 'src/routes/hooks';

const defaultUrl =
  'https://1602894.fs1.hubspotusercontent-na1.net/hub/1602894/hubfs/Resilient_Cybersecurity_Framework_cropped%20%281%29.webp?width=650&name=Resilient_Cybersecurity_Framework_cropped%20%281%29.webp';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: any = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

interface BogHeaderProps {
  blogData: Blog;
}

const BlogDetailHeader: React.FC<BogHeaderProps> = ({ blogData }) => {
  const router = useRouter();
  const sanitizedHtml = (userHtml: string) => DOMPurify.sanitize(userHtml);

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants}>
          <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" paddingBottom={2}>
            <IconButton
              color="inherit"
              onClick={() => {
                router.back();
              }}
            >
              <ArrowBack />
            </IconButton>
            {blogData.tags.map((tag) => (
              <Chip key={tag} label={tag} />
            ))}
          </Stack>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Typography variant="h3" component="h1" gutterBottom>
            {blogData.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" paragraph>
            Date: {fDate(blogData.published_at)}
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Paper elevation={3} sx={{ my: 4, overflow: 'hidden' }}>
            <Box
              component="img"
              src={blogData.blog_image_url ?? defaultUrl}
              alt={blogData.title}
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </Paper>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar
              alt="Edward Kost"
              src={blogData.profile_image_url ?? ''} // Replace with the actual path to the image
              sx={{ width: 56, height: 56 }}
            />
            <Stack>
              <Typography variant="body1" component="div" sx={{ fontWeight: 'bold' }}>
                {blogData.author_name ?? 'Unknown'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {fDate(blogData.created_at)}
              </Typography>
            </Stack>
          </Stack>
        </motion.div>
        <motion.div variants={itemVariants}>
          <div dangerouslySetInnerHTML={{ __html: sanitizedHtml(blogData.content ?? '') }} />
          {/* <Typography variant="body1">
            With data thefts, ransomware, and cyber-skirmishes becoming more common than ever,
            companies can no longer treat cybersecurity as an afterthought. It is not even the
            concern of the IT department anymore—it is a concern of everybody and everybody
            including the top down to the
          </Typography> */}
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default BlogDetailHeader;
