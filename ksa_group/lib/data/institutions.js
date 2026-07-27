export const INSTITUTIONS = [
  {
    id: "nursing",
    slug: "kamarajar-college-of-nursing",
    name: "Kamarajar College of Nursing",
    shortName: "KCN",
    category: "Healthcare & Allied Sciences",
    tagline: "Empowering Compassionate Healthcare Leaders & Clinical Specialists",
    established: 2004,
    affiliation: "The Tamil Nadu Dr. M.G.R. Medical University",
    accreditation: "Indian Nursing Council (INC) & TNNC Approved | Grade 'A' Accredited",
    description: "Kamarajar College of Nursing is a premier healthcare education institution dedicated to nurturing clinical excellence, empathetic patient care, and cutting-edge medical research. Equipped with multi-specialty simulation labs and tie-ups with top super-specialty hospitals.",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600",
    campusImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { label: "Clinical Bed Tie-ups", value: "1,200+" },
      { label: "Graduation Placement Rate", value: "100%" },
      { label: "Specialized Labs", value: "8+" },
      { label: "Alumni Worldwide", value: "4,500+" }
    ],
    highlights: [
      "High-Fidelity Clinical Simulation Centers",
      "Direct Hospital Immersion & Intensive Internship",
      "Global Nursing Certification Coaching (NCLEX-RN, OET)",
      "State-of-the-Art Anatomy & Pediatric Labs"
    ],
    dean: {
      name: "Dr. Rachel V. Sundaram, Ph.D. (Nursing)",
      designation: "Principal & Dean",
      message: "Nursing is the backbone of modern healthcare. At Kamarajar College of Nursing, we combine rigorous academic theory with real-world bedside expertise to train international-standard nursing professionals.",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400"
    },
    programs: [
      {
        id: "bsc-nursing",
        name: "B.Sc Nursing (Basic)",
        level: "Undergraduate",
        duration: "4 Years",
        eligibility: "10+2 with Physics, Chemistry, Biology & English (Min 50%)",
        intake: 100,
        description: "A comprehensive degree course designed to develop knowledge, skill, and attitude necessary to provide quality clinical nursing care."
      },
      {
        id: "pb-bsc-nursing",
        name: "Post Basic B.Sc Nursing",
        level: "Undergraduate",
        duration: "2 Years",
        eligibility: "Diploma in General Nursing & Midwifery (GNM)",
        intake: 40,
        description: "Advanced program for registered nurses to upgrade academic qualification and administrative expertise."
      },
      {
        id: "msc-nursing",
        name: "M.Sc Nursing (Specializations)",
        level: "Postgraduate",
        duration: "2 Years",
        eligibility: "B.Sc Nursing with minimum 1 year clinical experience",
        intake: 25,
        description: "Specializations in Medical-Surgical Nursing, Obstetrics & Gynaecology, Pediatrics, Psychiatric, and Community Health Nursing."
      },
      {
        id: "gnm",
        name: "Diploma in General Nursing & Midwifery (GNM)",
        level: "Diploma",
        duration: "3 Years",
        eligibility: "10+2 in Science / Arts with 40% aggregate",
        intake: 60,
        description: "Hands-on vocational program focusing on fundamental nursing skills and maternity care."
      }
    ],
    contact: {
      phone: "+91 44 2745 8901",
      email: "nursing@ksagroup.edu.in",
      location: "KSA Healthcare Campus, Chennai South Outer Ring, TN"
    }
  },
  {
    id: "pharmacy",
    slug: "kamarajar-college-of-pharmacy",
    name: "Kamarajar College of Pharmacy",
    shortName: "KCP",
    category: "Pharmaceutical Sciences",
    tagline: "Advancing Pharmaceutical Innovation, Drug Discovery & Clinical Excellence",
    established: 2006,
    affiliation: "The Tamil Nadu Dr. M.G.R. Medical University",
    accreditation: "Pharmacy Council of India (PCI) & AICTE Approved | NIRF Ranked",
    description: "Kamarajar College of Pharmacy stands at the forefront of pharmaceutical education, research, and industrial formulation. With advanced instrumentation labs, pilot scale plant facilities, and active industry collaborations, we shape world-class pharmacists and drug researchers.",
    heroImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1600",
    campusImage: "https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { label: "Advanced Research Labs", value: "12+" },
      { label: "Pharma Industry MOUs", value: "35+" },
      { label: "Patents Filed", value: "18+" },
      { label: "Avg Placement Package", value: "₹6.5 LPA" }
    ],
    highlights: [
      "High-End Analytical Instrumentation (HPLC, UV-Vis, FTIR)",
      "Hospital & Clinical Pharmacy Residency Training",
      "Industrial Formulation & Manufacturing Prototype Unit",
      "Herbal Medicine & Pharmacognosy Botanical Garden"
    ],
    dean: {
      name: "Dr. K. Arunkumar, M.Pharm., Ph.D.",
      designation: "Principal & Director of Research",
      message: "The pharmaceutical sector is crucial to global health security. We empower our students with cutting-edge analytical tools, industrial exposure, and ethical research values to innovate life-saving therapeutics.",
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400"
    },
    programs: [
      {
        id: "b-pharm",
        name: "Bachelor of Pharmacy (B.Pharm)",
        level: "Undergraduate",
        duration: "4 Years",
        eligibility: "10+2 with Physics, Chemistry & Biology / Mathematics (Min 50%)",
        intake: 100,
        description: "Comprehensive core degree covering pharmaceutics, pharmacology, medicinal chemistry, and pharmacognosy."
      },
      {
        id: "pharm-d",
        name: "Doctor of Pharmacy (Pharm.D)",
        level: "Doctoral / Professional",
        duration: "6 Years (Incl 1 Year Clinical Internship)",
        eligibility: "10+2 with PCB/PCM or D.Pharm",
        intake: 30,
        description: "Intensive hospital-based clinical pharmacy program focusing on ward rounds, patient counseling, and therapeutic drug monitoring."
      },
      {
        id: "m-pharm",
        name: "Master of Pharmacy (M.Pharm)",
        level: "Postgraduate",
        duration: "2 Years",
        eligibility: "B.Pharm degree with valid GPAT / Entrance Score",
        intake: 36,
        description: "Advanced research degree with tracks in Pharmaceutics, Pharmacology, Pharmaceutical Analysis, and Regulatory Affairs."
      },
      {
        id: "d-pharm",
        name: "Diploma in Pharmacy (D.Pharm)",
        level: "Diploma",
        duration: "2 Years",
        eligibility: "10+2 in Science stream",
        intake: 60,
        description: "Foundation course qualifying candidates for retail/hospital registered pharmacist license."
      }
    ],
    contact: {
      phone: "+91 44 2745 8902",
      email: "pharmacy@ksagroup.edu.in",
      location: "KSA Knowledge City Campus, Chengalpattu Highway, TN"
    }
  },
  {
    id: "maritime",
    slug: "kamarajar-college-of-maritime",
    name: "Kamarajar College of Maritime",
    shortName: "KCM",
    category: "Maritime & Nautical Sciences",
    tagline: "Navigating Global Horizons with Elite Merchant Navy Training & Engineering",
    established: 2008,
    affiliation: "Indian Maritime University (IMU)",
    accreditation: "Directorate General of Shipping (DGS) Approved | Grade 'A1' Outstanding Rating",
    description: "Kamarajar College of Maritime is an elite merchant navy academy featuring a full-mission Ship Simulator, real engine workshop, swimming pool for sea survival, and a residential naval cadet lifestyle. Preparing officers and marine engineers for international shipping fleets.",
    heroImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1600",
    campusImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { label: "Ship Simulator Facility", value: "360° Full Mission" },
      { label: "Global Maritime Placement", value: "96%" },
      { label: "DGS Grade Rating", value: "A1 Outstanding" },
      { label: "Sailing Officer Alumni", value: "3,200+" }
    ],
    highlights: [
      "Transas 360-Degree Full Mission Bridge & Engine Room Simulator",
      "In-House Engine Workshop & Heavy Marine Machining Lab",
      "STCW 2010 Mandatory Safety & Survival Training Center",
      "Strict Cadet Discipline & Officers' Mess Residential Life"
    ],
    dean: {
      name: "Capt. S. Rajendra Prasad, Master Mariner",
      designation: "Principal & Director of Maritime Studies",
      message: "A career in maritime transportation offers unmatched adventure, leadership opportunities, and global financial rewards. We instill rock-solid nautical discipline and modern navigation skills in every cadet.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    },
    programs: [
      {
        id: "bsc-nautical-science",
        name: "B.Sc Nautical Science",
        level: "Undergraduate",
        duration: "3 Years Fully Residential",
        eligibility: "10+2 with PCM (Min 60%) & English (Min 50%) + IMU CET Qualified",
        intake: 80,
        description: "Rigorous cadet training for deck officers, covering navigation, cargo handling, meteorology, ship stability, and maritime law."
      },
      {
        id: "be-marine-engineering",
        name: "B.E. Marine Engineering",
        level: "Undergraduate",
        duration: "4 Years Fully Residential",
        eligibility: "10+2 with PCM (Min 60%) & English + IMU CET Qualified",
        intake: 80,
        description: "Specialized engineering program focused on main propulsion machinery, auxiliary systems, marine electricals, and naval architecture."
      },
      {
        id: "gp-rating",
        name: "Pre-Sea Training for General Purpose (GP) Rating",
        level: "Certificate",
        duration: "6 Months Residential",
        eligibility: "10th Standard with 40% aggregate and 40% in English",
        intake: 50,
        description: "Intensive practical seamanship training preparing deck and engine room ratings for merchant vessels."
      },
      {
        id: "electro-technical-officer",
        name: "Electro-Technical Officer (ETO) Course",
        level: "Certificate / Advanced",
        duration: "4 Months Residential",
        eligibility: "Diploma / B.E. in Electrical / Electronics / EEE",
        intake: 40,
        description: "Specialized training in modern ship automation, high-voltage equipment, and electronic control systems."
      }
    ],
    contact: {
      phone: "+91 44 2745 8903",
      email: "maritime@ksagroup.edu.in",
      location: "KSA Oceanside Marine Campus, East Coast Road (ECR), Chennai, TN"
    }
  }
];

export const INSTITUTION_CATEGORIES = [
  "All Institutions",
  "Healthcare & Allied Sciences",
  "Pharmaceutical Sciences",
  "Maritime & Nautical Sciences"
];
