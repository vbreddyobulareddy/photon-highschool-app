export type HSRecord = {
  dbn: string;
  school_name: string;
  boro: string;
  overview_paragraph: string;
  school_10th_seats?: number;
  academicopportunities1: string;
  academicopportunities2: string;
  ell_programs: string;
  neighborhood: string;
  language_classes?: string;
  building_code: string;
  location: string;
  phone_number: string;
  fax_number: string;
  school_email: string;
  website: string;
  subway: string;
  bus: string;
  grades2018: string;
  finalgrades: string;
  total_students: string;
  extracurricular_activities: string;
  school_sports: string;
  attendance_rate?: number;
  pct_stu_enough_variety?: number;
  pct_stu_safe?: number;
  school_accessibility_description?: number;
  directions1: string;
  requirement1_1: string;
  requirement2_1: string;
  requirement3_1: string;
  requirement4_1: string;
  requirement5_1: string;
  offer_rate1: string;
  program1: string;
  code1: string;
  interest1: string;
  method1: string;
  seats9ge1: number;
  grade9gefilledflag1: string;
  grade9geapplicants1: number;
  seats9swd1: number;
  grade9swdfilledflag1: string;
  grade9swdapplicants1: number;
  seats101: string;
  admissionspriority11: string;
  admissionspriority21: string;
  admissionspriority31: string;
  grade9geapplicantsperseat1: number;
  grade9swdapplicantsperseat1: number;
  primary_address_line_1: string;
  city: string;
  zip: number;
  state_code: string;
  latitude: number;
  longitude: number;
  community_board: number;
  council_district: number;
  census_tract: number;
  bin: number;
  bbl: number;
  nta: string;
  borough: string;
};

export interface HSCounterState {
  data: HSRecord[];
  total: number;
}
