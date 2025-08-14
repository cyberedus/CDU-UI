import React from 'react';
import { m, LazyMotion, domAnimation } from 'framer-motion';

interface MotionLazyProps {
  children: React.ReactElement[];
}
const MotionLazy = ({ children }: MotionLazyProps) => (
  <LazyMotion features={domAnimation}>
    <m.div style={{ height: '100vh' }}>{children}</m.div>
  </LazyMotion>
);

export default MotionLazy;
