import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { Box, Grid } from '@mui/material';

import { AppDispatch } from 'src/redux';
import { getBlogContentAsync } from 'src/redux/async/blogs/blogs.async';

import { LoadingScreen } from 'src/components/loading-screen';

import { BlogItem } from 'src/sections/common/blog/blog-item';

const defaultBlog: Blog = {
  blog_id: 0,
  title: '',
  meta_description: '',
  seo_keywords: [],
  content: '',
  tags: [],
  blog_image_url: '',
  is_active: false,
  published_at: '',
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
    console.log(blogDetails);
  };

  useEffect(() => {
    if (blogKey) {
      getInitialBlogDetails();
    }
  }, [blogKey]);
  return (
    <Box>
      {loading ? (
        <LoadingScreen sx={{ height: 60, minWidth: '200px' }} />
      ) : (
        <Grid container>
          <BlogItem blog={blogDetails} sx={{ width: 1, height: '500px' }} />
        </Grid>
      )}
    </Box>
  );
};
export default BlogDetailsView;
