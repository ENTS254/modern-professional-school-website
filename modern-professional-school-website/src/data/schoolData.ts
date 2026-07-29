// ============================================================================
// Central content/data store for Enkakenya Ng'ejuk Testimony School website.
// Keeping content here makes it easy to later wire up to a real backend/CMS.
// ============================================================================

export const SCHOOL = {
  name: "Enkakenya Ng'ejuk Testimony School",
  shortName: "Enkakenya Testimony School",
  motto: "Where Every Sunrise Sparks Potential",
  tagline: "Lets get the best education for your child",
  phone: "+254 119 126 378",
  phoneRaw: "+254119126378",
  whatsapp: "https://wa.me/254119126378",
  email: "info@enkakenyatestimonyschool.ac.ke",
  address: "Opposite Healing River Church, Suswa Town, Kenya",
  officeHours: "Monday – Friday: 7:30 AM – 5:00 PM | Saturday: 8:00 AM – 1:00 PM",
  logo: "/images/logo.png",
  levels: ["Play-Group", "PP1", "PP2", "Grade 1", "Grade 2", "Grade 3 - 9 (Junior School)"],
  socials: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    youtube: "#",
  },
};

// ---------------------------------------------------------------------------
// Images (sourced as high quality stock photography, categorized for reuse
// across Home, About, Academics, School Life and Gallery pages)
// ---------------------------------------------------------------------------
export const IMAGES = {
  heroHome:
    "https://images.pexels.com/photos/28593051/pexels-photo-28593051.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
  heroAdmissions:
    "https://images.pexels.com/photos/8927011/pexels-photo-8927011.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
  heroAbout:
    "https://images.pexels.com/photos/25457343/pexels-photo-25457343.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
  heroAcademics:
    "https://images.pexels.com/photos/5905488/pexels-photo-5905488.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
  heroSchoolLife:
    "https://images.pexels.com/photos/8927020/pexels-photo-8927020.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
  heroGallery:
    "https://images.pexels.com/photos/36467878/pexels-photo-36467878.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
  heroNews:
    "https://images.pexels.com/photos/34711388/pexels-photo-34711388.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
  heroContact:
    "https://images.pexels.com/photos/8617974/pexels-photo-8617974.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",

  welcome:
    "https://images.pexels.com/photos/35610368/pexels-photo-35610368.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  ctaBg:
    "https://images.pexels.com/photos/36916934/pexels-photo-36916934.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
  aboutStory:
    "https://images.pexels.com/photos/28638752/pexels-photo-28638752.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  aboutMission:
    "https://images.pexels.com/photos/5905919/pexels-photo-5905919.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  library:
    "https://images.pexels.com/photos/8926887/pexels-photo-8926887.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  scienceLab:
    "https://images.pexels.com/photos/8471855/pexels-photo-8471855.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  computerLab:
    "https://images.pexels.com/photos/5530520/pexels-photo-5530520.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  sports:
    "https://images.pexels.com/photos/8927020/pexels-photo-8927020.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  schoolBus:
    "https://images.pexels.com/photos/35105982/pexels-photo-35105982.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  graduation:
    "https://images.pexels.com/photos/30562665/pexels-photo-30562665.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  admissionsIllustration:
    "https://images.pexels.com/photos/26855714/pexels-photo-26855714.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
};

// Real photos supplied by the school (uploaded gallery images)
export const SCHOOL_PHOTOS = {
  buildingFront: "/images/school-building-front.jpg",
  buildingSide: "/images/school-building-side.jpg",
  studentWalking: "/images/student-walking.jpg",
  studentUniform: "/images/student-uniform.jpg",
};

// ---------------------------------------------------------------------------
// Gallery — categorized images for the filterable lightbox gallery
// ---------------------------------------------------------------------------
export type GalleryCategory =
  | "Classrooms"
  | "Sports"
  | "Graduation"
  | "Events"
  | "Library"
  | "Laboratory"
  | "School Buildings";

export interface GalleryImage {
  id: number;
  src: string;
  category: GalleryCategory;
  alt: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: "/images/school-building-front.jpg", category: "School Buildings", alt: "Enkakenya Ng'ejuk Testimony School entrance" },
  { id: 2, src: "/images/school-building-side.jpg", category: "School Buildings", alt: "School compound wall and classrooms" },
  { id: 3, src: "https://images.pexels.com/photos/32024231/pexels-photo-32024231.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", category: "School Buildings", alt: "Modern school building" },
  { id: 4, src: "https://images.pexels.com/photos/11618563/pexels-photo-11618563.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", category: "School Buildings", alt: "Rural school classroom exterior" },

  { id: 5, src: "https://images.pexels.com/photos/28593051/pexels-photo-28593051.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", category: "Classrooms", alt: "Students learning in classroom" },
  { id: 6, src: "https://images.pexels.com/photos/25457343/pexels-photo-25457343.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", category: "Classrooms", alt: "Children seated at their desks" },
  { id: 7, src: "https://images.pexels.com/photos/35610368/pexels-photo-35610368.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", category: "Classrooms", alt: "Teacher guiding young learners" },
  { id: 8, src: "https://images.pexels.com/photos/30058879/pexels-photo-30058879.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", category: "Classrooms", alt: "Student writing in class" },
  { id: 9, src: "/images/student-walking.jpg", category: "Classrooms", alt: "Pupil walking to class" },

  { id: 10, src: "https://images.pexels.com/photos/8927011/pexels-photo-8927011.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", category: "Sports", alt: "Children playing football" },
  { id: 11, src: "https://images.pexels.com/photos/8927020/pexels-photo-8927020.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", category: "Sports", alt: "Sports day activities" },
  { id: 12, src: "https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", category: "Sports", alt: "Team building on the field" },
  { id: 13, src: "https://images.pexels.com/photos/8813572/pexels-photo-8813572.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", category: "Sports", alt: "Football in the park" },

  { id: 14, src: "https://images.pexels.com/photos/28896831/pexels-photo-28896831.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", category: "Graduation", alt: "Graduating class celebration" },
  { id: 15, src: "https://images.pexels.com/photos/30562665/pexels-photo-30562665.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", category: "Graduation", alt: "Joyful graduation celebration" },
  { id: 16, src: "https://images.pexels.com/photos/20738436/pexels-photo-20738436.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", category: "Graduation", alt: "Students at graduation ceremony" },
  { id: 17, src: "https://images.pexels.com/photos/8093039/pexels-photo-8093039.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", category: "Graduation", alt: "Holding graduation caps" },

  { id: 18, src: "https://images.pexels.com/photos/34711388/pexels-photo-34711388.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", category: "Events", alt: "School drum corps performance" },
  { id: 19, src: "https://images.pexels.com/photos/35316806/pexels-photo-35316806.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", category: "Events", alt: "Cultural day performance" },
  { id: 20, src: "https://images.pexels.com/photos/12374479/pexels-photo-12374479.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", category: "Events", alt: "Students dancing at school event" },
  { id: 21, src: "https://images.pexels.com/photos/36812561/pexels-photo-36812561.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", category: "Events", alt: "Welcome ceremony with children" },

  { id: 22, src: "https://images.pexels.com/photos/8500625/pexels-photo-8500625.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", category: "Library", alt: "Students reading in the library" },
  { id: 23, src: "https://images.pexels.com/photos/8926887/pexels-photo-8926887.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", category: "Library", alt: "Group reading session in library" },
  { id: 24, src: "https://images.pexels.com/photos/8926840/pexels-photo-8926840.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", category: "Library", alt: "Two girls enjoying books" },
  { id: 25, src: "https://images.pexels.com/photos/35551010/pexels-photo-35551010.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", category: "Library", alt: "Children exploring a globe in the library" },

  { id: 26, src: "https://images.pexels.com/photos/8471855/pexels-photo-8471855.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", category: "Laboratory", alt: "Science laboratory experiment" },
  { id: 27, src: "https://images.pexels.com/photos/8471946/pexels-photo-8471946.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", category: "Laboratory", alt: "Student using a microscope" },
  { id: 28, src: "/images/computer-lab.jpg", category: "Laboratory", alt: "Computer laboratory at Enkakenya Testimony School" },
  { id: 29, src: "https://images.pexels.com/photos/5530520/pexels-photo-5530520.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", category: "Laboratory", alt: "Students in the computer lab" },
];

export const GALLERY_CATEGORIES: ("All" | GalleryCategory)[] = [
  "All",
  "Classrooms",
  "Sports",
  "Graduation",
  "Events",
  "Library",
  "Laboratory",
  "School Buildings",
];

// ---------------------------------------------------------------------------
// Why Choose Us
// ---------------------------------------------------------------------------
export const WHY_CHOOSE_US = [
  {
    title: "Qualified Teachers",
    description: "Certified, caring and experienced educators dedicated to nurturing every learner's potential.",
    icon: "teacher",
  },
  {
    title: "Modern Learning Environment",
    description: "Bright, secure classrooms and facilities designed for effective, comfortable learning.",
    icon: "building",
  },
  {
    title: "Digital Learning",
    description: "A fully equipped computer laboratory that builds 21st-century digital skills from an early age.",
    icon: "computer",
  },
  {
    title: "Sports & Co-curricular Activities",
    description: "A vibrant programme of sports, clubs and talent development beyond the classroom.",
    icon: "ball",
  },
  {
    title: "Excellent Academic Performance",
    description: "A CBC-aligned curriculum and proven track record of strong academic results.",
    icon: "medal",
  },
  {
    title: "Safe School Environment",
    description: "A secure, fenced compound with caring staff ensuring every child's safety and wellbeing.",
    icon: "shield",
  },
];

// ---------------------------------------------------------------------------
// Statistics (animated counters)
// ---------------------------------------------------------------------------
export const STATS = [
  { label: "Happy Students", value: 350, suffix: "+" },
  { label: "Qualified Teachers", value: 22, suffix: "+" },
  { label: "Years of Excellence", value: 8, suffix: "+" },
  { label: "Graduation Rate", value: 98, suffix: "%" },
];

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------
export const TESTIMONIALS = [
  {
    name: "Mama Naserian",
    role: "Parent of a Grade 2 Learner",
    quote:
      "Enkakenya Ng'ejuk Testimony School has transformed my son's confidence. The teachers are patient, caring, and truly invested in every child's success.",
  },
  {
    name: "Mr. Kipruto",
    role: "Parent of a PP2 Learner",
    quote:
      "Affordable fees, quality education, and a safe compound — exactly what we wanted for our daughter. We are proud to be part of this school community.",
  },
  {
    name: "Sankale L.",
    role: "Grade 1 Learner",
    quote:
      "I love my school! My teacher helps me read new books every day and we play football during break time.",
  },
  {
    name: "Mrs. Wanjiru",
    role: "Parent of a Play-Group Learner",
    quote:
      "From the moment we visited, we knew this was the right place. The staff are welcoming and the compound is safe and clean for young children.",
  },
];

// ---------------------------------------------------------------------------
// News & Announcements
// ---------------------------------------------------------------------------
export const NEWS = [
  {
    id: 1,
    title: "2026 Admissions Now Open for All Classes",
    date: "January 12, 2026",
    category: "Admissions",
    excerpt:
      "We are excited to announce that admissions for Play-Group through Grade 2 are now open. Secure your child's spot today.",
    image:
      "https://images.pexels.com/photos/26855714/pexels-photo-26855714.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100",
  },
  {
    id: 2,
    title: "New Computer Laboratory Officially Opened",
    date: "November 3, 2025",
    category: "Facilities",
    excerpt:
      "Our learners now have access to a fully equipped computer laboratory to strengthen digital literacy from an early age.",
    image: "/images/computer-lab.jpg",
  },
  {
    id: 3,
    title: "Annual Sports Day a Huge Success",
    date: "October 18, 2025",
    category: "School Life",
    excerpt:
      "Pupils, parents, and staff came together for a thrilling day of athletics, football, and team-building games.",
    image:
      "https://images.pexels.com/photos/8927011/pexels-photo-8927011.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100",
  },
  {
    id: 4,
    title: "End of Year Graduation Ceremony",
    date: "November 29, 2025",
    category: "Events",
    excerpt:
      "We celebrated our graduating PP2 class as they proudly transition into Grade 1 with a colourful graduation ceremony.",
    image:
      "https://images.pexels.com/photos/30562665/pexels-photo-30562665.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100",
  },
  {
    id: 5,
    title: "Parents' Meet & Greet Day",
    date: "September 6, 2025",
    category: "Community",
    excerpt:
      "Parents and guardians visited the school to meet teachers, tour our facilities, and learn more about our curriculum.",
    image:
      "https://images.pexels.com/photos/36812561/pexels-photo-36812561.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100",
  },
  {
    id: 6,
    title: "Cultural Day Celebrations",
    date: "August 15, 2025",
    category: "Events",
    excerpt:
      "Our learners showcased Kenya's rich cultural heritage through song, dance, and traditional attire.",
    image:
      "https://images.pexels.com/photos/35316806/pexels-photo-35316806.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100",
  },
];

// ---------------------------------------------------------------------------
// Admissions
// ---------------------------------------------------------------------------
export const ADMISSION_STEPS = [
  {
    step: "01",
    title: "Take a Tour",
    description:
      "Take a tour of our school and explore the vibrant learning environment, modern facilities, and welcoming community.",
    icon: "tour",
  },
  {
    step: "02",
    title: "Submit Application",
    description:
      "Submit your application to our school today and secure a bright future for your child. Enrollment is now open.",
    icon: "form",
  },
  {
    step: "03",
    title: "Meet and Greet",
    description:
      "Join us for a meet and greet at our school. Connect with teachers, staff, and fellow students.",
    icon: "handshake",
  },
  {
    step: "04",
    title: "Secure a Spot",
    description:
      "Secure a spot in our school and give your child a bright future filled with opportunities and success.",
    icon: "check",
  },
];

export const REQUIRED_DOCUMENTS = [
  { title: "Birth Certificate", icon: "certificate" },
  { title: "Passport Photos", icon: "photo" },
  { title: "Emergency Medical Authorization", icon: "medical" },
  { title: "Filled Online Application Form", icon: "form" },
];

export const CLASSES_OFFERED = [
  "Play-Group",
  "PP1",
  "PP2",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
];

// ---------------------------------------------------------------------------
// Academics
// ---------------------------------------------------------------------------
export const ACADEMIC_PROGRAMS = [
  {
    title: "Early Years (Play-Group & PP1–PP2)",
    description:
      "A nurturing, play-based foundation that builds curiosity, motor skills, and a love for learning in a safe environment.",
    image:
      "https://images.pexels.com/photos/28638752/pexels-photo-28638752.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1000",
  },
  {
    title: "Lower Primary (Grade 1 – Grade 3)",
    description:
      "Competency-Based Curriculum (CBC) instruction focused on literacy, numeracy, and essential life skills.",
    image:
      "https://images.pexels.com/photos/35610368/pexels-photo-35610368.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1000",
  },
  {
    title: "Upper Primary (Grade 4 – Grade 6)",
    description:
      "Building on strong fundamentals with sciences, technology, creative arts and leadership opportunities.",
    image:
      "https://images.pexels.com/photos/5905488/pexels-photo-5905488.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1000",
  },
  {
    title: "Junior School (Grade 7 – Grade 9)",
    description:
      "Advanced learning pathways preparing students academically and socially for senior school and beyond.",
    image:
      "https://images.pexels.com/photos/8617974/pexels-photo-8617974.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1000",
  },
];

export const FACILITIES = [
  { title: "Science Laboratory", image: IMAGES.scienceLab, description: "Hands-on experiments that bring science concepts to life." },
  { title: "Computer Laboratory", image: "/images/computer-lab.jpg", description: "Modern computers helping learners build digital skills early." },
  { title: "Library", image: IMAGES.library, description: "A quiet, well-stocked space to nurture a love for reading." },
  { title: "School Transport", image: IMAGES.schoolBus, description: "Safe and reliable transport for learners to and from school." },
];
