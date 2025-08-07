import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';

import { Box } from '@mui/material';

import { AppDispatch } from 'src/redux';
import { getBlogContentAsync } from 'src/redux/async/blogs/blogs.async';

import { LoadingScreen } from 'src/components/loading-screen';

interface BlogDetailsProps {
  selectedBlog?: Blog;
}

const BlogDetails = ({ selectedBlog }: BlogDetailsProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [blogDetails, setBlogDetails] = useState<Blog>();
  const [loading, setLoading] = useState(false);

  const getInitialBlogDetails = async () => {
    setLoading(true);
    const response = await dispatch(
      getBlogContentAsync({
        blog_id: selectedBlog?.blog_id,
      })
    );
    if (response.meta.requestStatus === 'fulfilled') {
      const blogData = response.payload.data;
      setBlogDetails(blogData);
      setLoading(false);
    } else {
      setLoading(false);
    }
    console.log(blogDetails);
  };

  useEffect(() => {
    if (selectedBlog) {
      getInitialBlogDetails();
    }
  }, [selectedBlog]);
  return (
    <Box>
      {loading ? (
        <LoadingScreen sx={{ height: 60, minWidth: '200px' }} />
      ) : (
        'dfdfsdf sdfsdf sdfsd asd asd asd asd sdf sdfsdf sdfsdf sdfsdf sdfsd fsdf sdfs dfsd f'
      )}
    </Box>
  );
};
export default BlogDetails;
