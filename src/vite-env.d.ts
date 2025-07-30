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
  DEV_TOOLS: string;
}

interface CustomToastProps {
  message: string;
  type: TypeOptions; // 'info', 'success', 'warning', 'error', 'default'
  title?: string; // Optional title for the alert
  toastId?: Id; // React-toastify's ID for programmatic closing
  onClose?: () => void; // Function to call when the toast is closed
}

interface CurriculumItem {
  topic_title: string;
  subtopics: string[];
}

interface CourseBatch {
  batch_id: number;
  batch_name: string;
  start_date: string; // ISO date string, can be parsed with Date if needed
  end_date: string; // ISO date string
  mode: 'Online' | 'Offline' | 'Hybrid'; // Use union if you know all possible values
  timing: string;
  instructor_name: string;
  seats_available: number;
  created_at: string; // ISO timestamp
}

interface Course {
  id: number;
  course_name: string;
  course_tagline: string;
  course_description: string;
  level: string;
  duration: string;
  price: string; // could also be number if it's stored as a number
  certificate_included: boolean;
  syllabus_link: string | null;
  course_image_link?: string | null;
  tags: string[];
  on_dashboard: boolean;
  topics_count: number;
  course_category: string;
  overview_points: string[];
  what_you_will_learn: string[];
  career_opportunities: string[];
  tools_and_technologies: string[];
  curriculum: CurriculumItem[];
  course_icon: string;
  batches: CourseBatch[];
  upcoming_batch_date?: string | null;
  available_seats?: number | null;
}

type CourseList = Course[];
interface CourseProps {
  course: Course;
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
  interestedCourseOptions: string[] | any[];
  dashboardCourseList: string[] | any[];
  interestedCouse: string | null;
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

interface signInData {
  email?: string;
  password?: string;
}

interface customError {
  name: string;
  response: {
    status: number;
    data: Record<string, number | string | any>;
    message: string;
    headers: Record<any, any>;
  };
  request: {
    responseType: string;
  };
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  toJSON: () => {};
  message?: string;
}

interface ContactInfo {
  id: number;
  address: string;
  email: string;
  alternate_email?: string | null;
  phone_number: string;
  alternate_phone_number?: string | null;
  office_hours: string;
}
interface ContactDetialsProps {
  conatctDetails: ContactInfo;
  loading?: boolean;
}
