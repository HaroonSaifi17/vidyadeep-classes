export type ProgramKey = "foundation" | "boards" | "seniors";

export interface Stream {
  name: string;
  subjects: string[];
}

export interface Program {
  label: string;
  title: string;
  summary: string;
  subjects?: string[];
  focus: string[];
  streams?: Stream[];
}

export interface ExamTrack {
  name: string;
  tag: string;
  line: string;
  points: string[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Course {
  number: string;
  name: string;
  details: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export const NAV_SECTIONS = [
  { label: "Method", href: "#method" },
  { label: "Programs", href: "#programs" },
  { label: "Exam Prep", href: "#exams" },
  { label: "Skill Lab", href: "#lab" },
  { label: "Campus", href: "#campus" },
  { label: "FAQ", href: "#faq" },
];

export const TICKER_ITEMS = [
  "Classes 6 – 8 · Foundation",
  "Classes 9 – 10 · Boards",
  "Classes 11 – 12 · Science · Commerce · Arts",
  "NEET",
  "JEE Main + Advanced",
  "CUET",
  "NDA",
  "Tally Prime + GST",
  "Video Editing",
  "Digital Marketing",
];

export const METHOD_STEPS = [
  {
    number: "01",
    title: "Concept class",
    description: "Interactive sessions built on understanding — never rote memorisation.",
  },
  {
    number: "02",
    title: "Daily practice",
    description: "Ten questions per subject, every day, solved together in class.",
  },
  {
    number: "03",
    title: "Weekly test",
    description: "Chapter-wise tests, marked and analysed — gaps are caught early.",
  },
  {
    number: "04",
    title: "Parent update",
    description: "Marks, attendance and next steps — shared with you, honestly, every month.",
  },
];

export const PROGRAM_KEYS: ProgramKey[] = ["foundation", "boards", "seniors"];

export const PROGRAMS: Record<ProgramKey, Program> = {
  foundation: {
    label: "Class 6 – 8",
    title: "Foundation years",
    summary:
      "Where study habits are built. All subjects, taught for understanding, with daily supervision.",
    subjects: [
      "Mathematics",
      "Science",
      "English",
      "Social Science",
      "Hindi",
      "Computer",
    ],
    focus: [
      "Concept building over memorisation",
      "Daily homework supervision",
      "Quarterly progress reports",
    ],
  },
  boards: {
    label: "Class 9 – 10",
    title: "Board preparation",
    summary:
      "Structured board-focused coaching with detailed concept work and exam-oriented practice.",
    subjects: ["Mathematics", "Science", "English", "Social Science", "Hindi"],
    focus: [
      "Chapter-wise tests & sample papers",
      "Answer-writing practice",
      "Pre-board exam series",
    ],
  },
  seniors: {
    label: "Class 11 – 12",
    title: "Streams that go deep",
    summary:
      "Specialist faculty for higher secondary, aligned to boards and competitive exams.",
    focus: [
      "Board + entrance alignment",
      "Expert stream faculty",
      "Practical & project support",
    ],
    streams: [
      {
        name: "Science",
        subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
      },
      {
        name: "Commerce",
        subjects: ["Accountancy", "Business Studies", "Economics"],
      },
      {
        name: "Arts",
        subjects: [
          "Political Science",
          "History",
          "Geography",
          "Sociology",
          "English",
        ],
      },
    ],
  },
};

export const EXAM_TRACKS: ExamTrack[] = [
  {
    name: "NEET",
    tag: "Medical",
    line: "Physics · Chemistry · Biology, built for MCQ accuracy.",
    points: [
      "Full-syllabus MCQ drills",
      "Test series + PYQ analysis",
      "Biology diagram & NCERT focus",
      "Performance tracking per test",
    ],
  },
  {
    name: "JEE Main + Advanced",
    tag: "Engineering",
    line: "PCM with serious problem-solving, not shortcuts.",
    points: [
      "Concept-first PCM teaching",
      "Advanced problem sets",
      "Timed mock examinations",
      "Error-log & revision system",
    ],
  },
  {
    name: "CUET",
    tag: "Universities",
    line: "Domain subjects, language sections and the General Test.",
    points: [
      "Updated CUET syllabus coverage",
      "Section-wise practice",
      "Full-length mocks",
      "University & course guidance",
    ],
  },
  {
    name: "NDA",
    tag: "Defence",
    line: "Maths, GAT and English — plus SSB readiness.",
    points: [
      "Mathematics & GAT coaching",
      "GK and current affairs",
      "English improvement",
      "SSB interview guidance",
    ],
  },
];

export const TRACK_RECORD_STATS: Stat[] = [
  { value: 7, suffix: "+", label: "Years of mentorship behind this campus" },
  { value: 4, suffix: "", label: "Competitive exam tracks guided" },
  { value: 24, suffix: "", label: "Maximum students in one batch" },
  { value: 12, suffix: "", label: "Subjects taught across streams" },
];

export const COURSES: Course[] = [
  { number: "01", name: "Basic Computer", details: "Fundamentals · MS Office · Internet & email" },
  { number: "02", name: "DTP & Graphic Design", details: "Photoshop · CorelDRAW · Illustrator" },
  { number: "03", name: "Tally Prime with GST", details: "Vouchers · GST · Payroll · Reports" },
  { number: "04", name: "IT & Networking", details: "Operating systems · Hardware · Troubleshooting" },
  { number: "05", name: "Video Editing", details: "Premiere Pro · CapCut · Reels & YouTube" },
  { number: "06", name: "Digital Marketing", details: "SEO · Google & Meta Ads · Lead generation" },
  { number: "07", name: "E-Commerce", details: "Amazon · Flipkart · Meesho seller setup" },
];

export const FACILITIES = [
  "Smart classrooms",
  "Air-conditioned rooms",
  "High-speed internet",
  "Computer lab",
  "Library & study material",
  "CCTV surveillance",
  "Digital attendance",
  "Regular parent meetings",
];

export const FAQS: Faq[] = [
  {
    question: "Which classes do you teach?",
    answer:
      "We coach Classes 6 to 12 across all major boards, with dedicated streams for Science, Commerce and Arts in senior classes.",
  },
  {
    question: "Which competitive exams do you prepare students for?",
    answer:
      "NEET, JEE (Main & Advanced), CUET and NDA — each with its own test series and study plan.",
  },
  {
    question: "Do you offer computer courses?",
    answer:
      "Yes. Basic Computer, DTP & Design, Tally Prime with GST, IT & Networking, Video Editing, Digital Marketing and E-Commerce.",
  },
  {
    question: "How are students tested?",
    answer:
      "Weekly chapter tests, monthly assessments and full mock exams — every result is analysed and shared with parents.",
  },
  {
    question: "Is study material included?",
    answer: "Notes, practice assignments and question banks are provided for every enrolled course.",
  },
  {
    question: "What is the batch size?",
    answer: "Batches are capped at 24 students so that every learner gets genuine, personal attention.",
  },
];

export const COURSE_OPTIONS = [
  "Class 6 – 8 Coaching",
  "Class 9 – 10 Coaching",
  "Class 11 – 12 Coaching",
  "NEET Preparation",
  "JEE Preparation",
  "CUET Preparation",
  "NDA Preparation",
  "Computer Courses",
];

/* SWAP: replace with the client's real address and phone number */
export const CONTACT = {
  address: "Vidyadeep Classes Campus, Main Road, Near City Bus Stand",
  phone: "+91 98765 43210",
  timings: "Monday – Saturday · 8:00 AM to 7:00 PM",
};