import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { AppDispatch } from 'src/redux';
import { DashboardContent } from 'src/layouts/dashboard';
import { getAllBlogsAsync } from 'src/redux/index.async';

import DialogSlide from 'src/components/dialog/slide-dialog';
import { LoadingScreen } from 'src/components/loading-screen';

import { BlogItem } from '../blog-item';
import BlogDetails from '../blog-details';

const titleVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const subtitleVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
};

export function BlogView() {
  // const [sortBy, setSortBy] = useState('latest');
  const dispatch = useDispatch<AppDispatch>();
  const [allBlogsList, setAllBlogsList] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<Blog>();
  const [openBlog, setOpenBlog] = useState(false);

  const getDefaultBlogs = async () => {
    setLoading(true);
    const res = await dispatch(getAllBlogsAsync());
    if (res.meta.requestStatus === 'fulfilled') {
      const blogsData = res.payload.data;
      setAllBlogsList(blogsData);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDefaultBlogs();
  }, []);

  const handleBlogClick = (blog: Blog) => {
    setSelectedBlog(blog);
    setOpenBlog(true);
  };

  return (
    <DashboardContent sx={{ minHeight: 'calc(100vh - 100px)' }}>
      <Grid textAlign="center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={titleVariants}
        >
          <Grid container gap={1} justifyContent="center" alignItems="center">
            <Typography
              variant="h1"
              component="h1"
              sx={[
                (theme) => ({
                  background: `linear-gradient(to right, ${theme.vars.palette.secondary.dark},  ${theme.vars.palette.secondary.light})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  color: 'transparent',
                }),
              ]}
            >
              Blogs
            </Typography>
          </Grid>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={subtitleVariants}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 6,
              color: '#666',
              fontSize: {
                xs: 17.2,
                sm: 20.2,
              },
            }}
          >
            These blogs break down complex cybersecurity concepts into practical, easy-to-understand
            lessons for learners at all levels.
          </Typography>
        </motion.div>
      </Grid>
      {/* <Box
        sx={{
          mb: 5,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          Blog
        </Typography>
      </Box> */}
      {/* <Box
        sx={{
          mb: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <PostSearch posts={posts} />
        <PostSort
          sortBy={sortBy}
          onSort={handleSort}
          options={[
            { value: 'latest', label: 'Latest' },
            { value: 'popular', label: 'Popular' },
            { value: 'oldest', label: 'Oldest' },
          ]}
        />
      </Box> */}
      {loading ? (
        <LoadingScreen />
      ) : (
        <Grid container spacing={3}>
          {allBlogsList.map((blog: Blog, index: number) => {
            const latestPostLarge = index === 0;
            const latestPost = index === 1 || index === 2;
            return (
              <Grid
                key={blog.blog_id}
                size={{
                  xs: 12,
                  sm: latestPostLarge ? 12 : 6,
                  md: latestPostLarge ? 6 : 3,
                }}
              >
                <BlogItem
                  handleBlogClick={handleBlogClick}
                  blog={blog}
                  latestPost={latestPost}
                  latestPostLarge={latestPostLarge}
                />
              </Grid>
            );
          })}
        </Grid>
      )}

      <DialogSlide
        maxWidth="lg"
        id="blogDetails"
        open={openBlog}
        setOpen={setOpenBlog}
        title="Blog Details"
      >
        {openBlog ? <BlogDetails selectedBlog={selectedBlog} /> : <></>}
      </DialogSlide>

      {/* <Pagination count={10} color="primary" sx={{ mt: 8, mx: 'auto' }} /> */}
    </DashboardContent>
  );
}
