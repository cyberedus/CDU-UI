/// <reference types="vite/client" />

type leadsProps = {
  children: React.ReactNode;
};
type NavItem = {
  title: string;
  path: string;
  icon: React.ReactNode;
  info?: React.ReactNode;
  children?: NavItem[];
};

type infinityCarouselProps = {
  children: React.ReactNode[];
  width?: number;
  gap?: number;
};

// ******************************
// * 1. Type Definitions
// ******************************

// Define types for the payload passed to AxiosClient function
interface AxiosClientPayload {
  signal?: AbortSignal; // For explicit abort control
  isShowProgress?: boolean; // For showing progress indicators
  formData?: FormData; // For multipart form data
  onUploadProgress?: (progressEvent: any) => void;
  onDownloadProgress?: (progressEvent: any) => void;
  [key: string]: any; // Allow other arbitrary properties in payload
}

// Define types for the toolkit object (likely from Redux Toolkit's createAsyncThunk)
interface AsyncThunkToolkit {
  fulfillWithValue: (value: any) => any;
  rejectWithValue: (value: any) => any;
  dispatch: (action: any) => any; // More specific if you know all action types
  isRejectWithErrorMsg?: boolean; // Custom property as seen in your code
}

// Define the signature for the AxiosClient function
type AxiosMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';

type AxiosClientFunction = (
  type: AxiosMethod,
  api: string,
  payload: AxiosClientPayload | Record<string, any> | void, // Payload can be AxiosClientPayload or a generic object
  toolkit?: AsyncThunkToolkit,
  isRejectWithErrorMsg?: boolean,
  responseType?: string
) => Promise<any>; // Promise<any> as it can fulfill or reject with various values

// Custom error structure when rejecting with specific status code
interface CustomErrorResponse {
  message: string;
  statusCode?: number;
}

interface configTypes {
  API_URL: string;
}

interface CustomToastProps {
  message: string;
  type: TypeOptions; // 'info', 'success', 'warning', 'error', 'default'
  title?: string; // Optional title for the alert
  toastId?: Id; // React-toastify's ID for programmatic closing
  onClose?: () => void; // Function to call when the toast is closed
}

interface Course {
  id: number;
  course_name: string;
  course_overview: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced'; // Adjust as needed
  course_icon: string;
  lesson_count: number;
  mode: 'Online' | 'Offline' | string; // You can narrow or expand this union
  certificate_included: boolean;
  syllabus_link: string | null;
  on_dashboard: boolean;
  course_category: string;
  duration: string;
  instructor_name: string;
  start_date: string; // ISO format: "2025-07-02T18:30:00.000Z"
  batch_timing: string;
  duration: string;
  price: string; // Consider number if it's numeric: number;
  course_image_link: string | null;
  tags: string[] | null;
  tools_and_technologies: string[] | null;
  what_you_will_learn: string;
  curriculum: string;
  career_opportunities: string;
  course_description: string;
}

type CourseList = Course[];
interface CurriculumModule {
  title: string;
  topics: string[];
}

type Company = {
  id: number;
  logo_url: string;
  name: string;
  website_url: string;
};

type HiringPartnersProps = {
  hiringPartners: Company[];
};

type leadsFormData = {
  username: string;
  email: string;
  phone_number: string;
  course_interested: string;
  message: string;
  device_fingerprint: string;
};
// Slice Interface and type
interface DashboardState {
  loading: boolean;
  data: any;
  error: string | null;
}

interface appSettingState {
  appSettingLoader: boolean;
  data: any;
  error: string | null;
  visitorRelated: string | null;
  isRevisited: boolean;
  isOpenTalk: boolean;
}

// redux store
interface reduxState {
  appSettings: appSettingState;
  dashboardData: DashboardState;
}

interface downloadCourse {
  syllabus_link: string | null;
  resource_type: string;
}

interface getCoursePayload {
  id?: string | number;
}
interface FeatureCardProps {
  icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>> & { muiName: string }; // Type for MUI Icon Component
  title: string;
  description: string;
  buttonText?: string; // Optional button
  onClick?: () => void; // Optional click handler for the button
  iconColor?: string; // Optional color for the icon
}
