import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { Box, Grid } from '@mui/material';

import { AppDispatch } from 'src/redux';
import { getBlogContentAsync } from 'src/redux/async/blogs/blogs.async';

import { LoadingScreen } from 'src/components/loading-screen';
import { SomethingWentWrong } from 'src/components/went-wrong';

import BlogDetailHeader from '../blog-details-header';

const defaultBlog: Blog = {
  blog_id: 0,
  title: '',
  meta_description: '',
  seo_keywords: [],
  content: '',
  tags: [],
  blog_image_url:
    'https://1602894.fs1.hubspotusercontent-na1.net/hub/1602894/hubfs/Resilient_Cybersecurity_Framework_cropped%20%281%29.webp?width=650&name=Resilient_Cybersecurity_Framework_cropped%20%281%29.webp',
  is_active: false,
  published_at: '14 August 2025',
  created_at: '',
  updated_at: '',
  author_id: null,
  author_name: null,
  author_email: null,
  profile_image_url: null,
  author_bio: null,
};

const BlogDetailsView = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { blogKey } = useParams();
  const [blogDetails, setBlogDetails] = useState<Blog>(defaultBlog);
  const [loading, setLoading] = useState(false);

  const getInitialBlogDetails = async () => {
    setLoading(true);
    const response = await dispatch(
      getBlogContentAsync({
        blog_key: blogKey,
      })
    );
    if (response.meta.requestStatus === 'fulfilled') {
      const blogData: Blog = response.payload.data[0];
      setBlogDetails(blogData);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (blogKey) {
      getInitialBlogDetails();
    }
  }, [blogKey]);
  return (
    <Box>
      {loading ? (
        <LoadingScreen sx={{ height: 800, minWidth: '200px' }} />
      ) : (
        <Grid container>
          {blogDetails ? <BlogDetailHeader blogData={blogDetails} /> : <SomethingWentWrong />}
        </Grid>
      )}
    </Box>
  );
};
export default BlogDetailsView;
