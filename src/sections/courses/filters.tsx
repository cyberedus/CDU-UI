import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { Box, Select, MenuItem, TextField, FormControl, InputAdornment, Grid } from '@mui/material';

interface FilterProps {
  courseList: CourseList;
  onFilterChange: (arg: CourseList) => void;
}
const CourseFilter = ({ courseList = [], onFilterChange }: FilterProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  // Extract unique categories and levels from courseList
  const categories = [
    'All',
    ...new Set(courseList.map((course: Course) => course.course_category)),
  ];
  const levels = ['All', ...new Set(courseList.map((course: Course) => course.level))];

  useEffect(() => {
    const currentFilteredCourses = courseList.filter((course: Course) => {
      const matchesSearch = course.course_name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All' || course.course_category === selectedCategory;
      const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
      return matchesSearch && matchesCategory && matchesLevel;
    });

    if (onFilterChange) {
      onFilterChange(currentFilteredCourses);
    }
  }, [searchTerm, selectedCategory, selectedLevel, courseList]);

  const handleSearchChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSelectedCategory(event.target.value);
  };

  const handleLevelChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSelectedLevel(event.target.value);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      component={motion.div}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        p: 2,
        mb: 5,
        borderRadius: 2,
        boxShadow: '5px 5px 15px #bebebe, -5px -5px 15px #ffffff', // Soft shadow
        alignItems: 'center',
        justifyContent: { xs: 'center', md: 'flex-start' }, // Center on small screens, left-align on larger
      }}
    >
      <Grid container width={1} spacing={2}>
        <Grid
          size={{
            xs: 12,
            sm: 8,
          }}
        >
          <motion.div variants={itemVariants}>
            <TextField
              label="Search courses..."
              variant="outlined"
              size="small"
              value={searchTerm}
              onChange={handleSearchChange}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{ minWidth: 250, width: 1 }}
            />
          </motion.div>
        </Grid>
        <Grid
          size={{
            xs: 12,
            sm: 2,
          }}
        >
          <motion.div variants={itemVariants}>
            <FormControl size="small" sx={{ minWidth: 150, width: 1 }}>
              <Select
                value={selectedCategory}
                onChange={handleCategoryChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                {categories.map((course_category) => (
                  <MenuItem key={course_category} value={course_category}>
                    {course_category === 'All' ? 'All Categories' : course_category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </motion.div>
        </Grid>
        <Grid
          size={{
            xs: 12,
            sm: 2,
          }}
        >
          <motion.div variants={itemVariants}>
            <FormControl size="small" sx={{ minWidth: 150, width: 1 }}>
              <Select
                value={selectedLevel}
                onChange={handleLevelChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                {levels.map((level) => (
                  <MenuItem key={level} value={level}>
                    {level === 'All' ? 'All Levels' : level}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CourseFilter;
