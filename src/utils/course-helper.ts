import { v4 } from 'uuid';

import {
  Hub as HubIcon,
  Code as CodeIcon,
  Cloud as CloudIcon,
  VpnKey as VpnKeyIcon,
  Storage as StorageIcon,
  TaskAlt as TaskAltIcon,
  Terminal as TerminalIcon,
  Security as SecurityIcon,
  BugReport as BugReportIcon,
  Assessment as AssessmentIcon,
  LocalLibrary as LocalLibraryIcon,
  DeveloperMode as DeveloperModeIcon,
} from '@mui/icons-material';

export const getCourseIcon = (courseCategory: string) =>
  (courseCategory === 'web' && CodeIcon) ||
  (courseCategory === 'mobile-app' && DeveloperModeIcon) ||
  (courseCategory === 'bug-bounty' && BugReportIcon) ||
  (courseCategory === 'cyber-security' && VpnKeyIcon) ||
  (courseCategory === 'ethical-hacking' && SecurityIcon) ||
  (courseCategory === 'data-science' && AssessmentIcon) ||
  (courseCategory === 'testing' && TaskAltIcon) ||
  (courseCategory === 'devops' && TerminalIcon) ||
  (courseCategory === 'cloud' && CloudIcon) ||
  (courseCategory === 'data' && StorageIcon) ||
  (courseCategory === 'ai-ml' && HubIcon) ||
  LocalLibraryIcon;

export const getCourseColor = (courseLevel: string) =>
  (courseLevel === 'Beginner' && 'success') ||
  (courseLevel === 'Intermediate' && 'primary') ||
  (courseLevel === 'Advanced' && 'warning') ||
  'secondary';

export const responsiveOptions = [
  {
    breakpoint: '1400px',
    numVisible: 5,
    numScroll: 1,
  },
  {
    breakpoint: '1230px',
    numVisible: 5,
    numScroll: 1,
  },
  {
    breakpoint: '1024px',
    numVisible: 5,
    numScroll: 1,
  },
  {
    breakpoint: '768px',
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: '575px',
    numVisible: 2,
    numScroll: 1,
  },
];

export const responsiveOptionsCourse = [
  {
    breakpoint: '2560px',
    numVisible: 4,
    numScroll: 1,
  },
  {
    breakpoint: '1536px',
    numVisible: 4,
    numScroll: 1,
  },
  {
    breakpoint: '1440px',
    numVisible: 4,
    numScroll: 1,
  },
  {
    breakpoint: '1230px',
    numVisible: 4,
    numScroll: 1,
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: '1024px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1,
  },
];

export const UIDV4 = () => v4();
