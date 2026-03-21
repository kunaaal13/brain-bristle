export const siteMetadata = {
  title: "Brain Bristle",
  description:
    "Brain Bristle advances autism inclusion in India through school-based intervention, educator support, advocacy, and emerging research.",
  url: "https://brainbristle.org",
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Impact", href: "/impact" },
  { name: "Research", href: "/research" },
  { name: "Careers", href: "/careers" },
  { name: "Media", href: "/media" },
  { name: "Teams", href: "/teams" },
  { name: "Donate", href: "/donate" },
] as const;

export const contentData = {
  contact: {
    email: "hello@brainbristle.org",
    founderEmail: "devangana@brainbristle.org",
    city: "Mumbai, India",
    hours: "Monday to Saturday",
  },
  home: {
    label: "Autism. Inclusion. Education. Equity.",
    headline: "Every child on the autism spectrum deserves education, inclusion, and opportunity.",
    description:
      "Today in India, 1 in every 68 children between 2 and 9 years of age is reportedly diagnosed on the autism spectrum. These children are in our classrooms, neighbourhoods, and families across every corner of the country. Brain Bristle exists to make sure none of them are left behind.",
    primaryCta: { label: "Donate", href: "/donate" },
    secondaryCta: { label: "Explore Impact", href: "/impact" },
    heroImage: {
      image: "/photos/hero-bb3.jpeg",
      alt: "A Brain Bristle team member supporting a child during a classroom learning activity",
      title: "One-to-one support in the classroom",
      caption: "A quiet, focused moment of guidance inside a learning space.",
    },
    gallery: [
      {
        image: "/photos/gallery-bb.jpeg",
        alt: "A caregiver and child working together on an art activity in a classroom",
        title: "Daily learning support",
        caption: "Individualized support can begin with very small, consistent moments.",
      },
      {
        image: "/photos/gallery-bb1.jpeg",
        alt: "Students and a Brain Bristle team member in a classroom discussion",
        title: "Classroom collaboration",
        caption: "Support takes shape inside real classrooms with real teachers and peers.",
      },
      {
        image: "/photos/gallery-bb2.jpeg",
        alt: "A mentor and child reading together at a classroom table",
        title: "Reading and routine",
        caption: "Intervention often lives inside ordinary school rituals and structured repetition.",
      },
      {
        image: "/photos/gallery-bb4.jpeg",
        alt: "Students seated in a classroom during instruction",
        title: "Shared classroom environments",
        caption: "Inclusion is built within the rooms children already inhabit together.",
      },
      {
        image: "/photos/gallery-bb5.jpeg",
        alt: "Students and a facilitator in a classroom conversation",
        title: "Guided group work",
        caption: "Careful facilitation helps participation become visible and sustained.",
      },
      {
        image: "/photos/gallery-bb6.jpeg",
        alt: "Students participating in a classroom support session",
        title: "Observation and learning",
        caption: "The work depends on noticing closely and responding with patience.",
      },
    ],
    proofPoints: [
      { value: "1 in 68", label: "children reportedly diagnosed" },
      { value: "70%+", label: "in public or affordable schools" },
      { value: "18", label: "low-income schools in 2026-27 plan" },
      { value: "300+", label: "high-needs students in direct intervention" },
    ],
    intro:
      "Brain Bristle was built around three core commitments: balanced ambition, equitable education, and inclusion. We approach every child in our schools of work and areas of impact with creativity, consistency, and kindness.",
    commitments: [
      {
        title: "Balanced ambition",
        description:
          "We believe children deserve goals that stretch possibility without losing sight of dignity, pace, and real developmental context.",
      },
      {
        title: "Equitable education",
        description:
          "Inclusive education should not depend on family income, school prestige, or postcode. The work belongs inside ordinary school systems.",
      },
      {
        title: "Inclusion",
        description:
          "Every student has their own way of learning, their own learning systems, and their own path forward. Our role is to support that path with care and structure.",
      },
    ],
    why:
      "\"Brain Bristle\" means toothbrushing a malleable mind. With gentle, consistent, deliberate effort, we believe an autistic child's brain can grow and stretch in beautiful new directions and learning outcomes. We believe every child on the autism spectrum holds enormous, often untapped potential. Our job is to help them on this journey of discovery.",
    modelSummary: [
      "Recruit and train Social Work Fellows from strong academic institutions.",
      "Place them inside low-income inclusive schools for a full academic year.",
      "Support students through classroom push-ins, pull-out sessions, and daily supervision.",
      "Carry the work outward through parent guidance, advocacy, and research translation.",
    ],
    problemStatements: [
      {
        title: "Diagnosed autism cases",
        description:
          "1 in 68 children under 10 years of age in India is reportedly on the autism spectrum. The number has risen steadily, and more than 70% of these children are in public or affordable private schools with little to no trained support.",
      },
      {
        title: "Demographic occurrence",
        description:
          "Autism occurs across all racial, ethnic, and socioeconomic groups. Inclusive support should be available to every family, everywhere, regardless of income or postcode.",
      },
      {
        title: "Gender occurrence",
        description:
          "Autism is diagnosed more than four times as often in boys as in girls, while many girls are still underdiagnosed. Every child deserves to be seen and understood.",
      },
      {
        title: "Causes",
        description:
          "Autism is primarily linked to genetics along with some environmental factors affecting neurodevelopment. Decades of research have found no link between childhood vaccines and autism.",
      },
    ],
    faqs: [
      {
        question: "Where does Brain Bristle work?",
        answer: "Brain Bristle works across low-income inclusive schools in Mumbai, India, while also engaging families, educators, and public audiences across the country.",
      },
      {
        question: "Why focus on schools?",
        answer:
          "Most autistic children in India are already learning in public or affordable private schools. Building support inside those systems is how inclusion becomes practical rather than aspirational.",
      },
      {
        question: "What does Brain Bristle actually provide?",
        answer:
          "The work combines direct student intervention, educator support, caregiver guidance, advocacy, and research-informed public communication.",
      },
      {
        question: "How can I stay connected?",
        answer:
          "Join the newsletter for updates on the organisation's field work, events, research notes, and advocacy efforts.",
      },
    ],
  },
  impact: {
    label: "Impact",
    headline: "Measured in changed classrooms, stronger school systems, and more visible autism advocacy.",
    description:
      "The 2026-27 impact frame is intentionally concrete: more schools, more classrooms, more direct student support, and wider public understanding shaped by practice.",
    metrics: [
      { value: "18", label: "low-income schools", note: "Projected intervention footprint for 2026-27." },
      { value: "80-100", label: "classrooms", note: "Classrooms reached across direct intervention settings." },
      { value: "300+", label: "high-needs students", note: "Students supported in direct educational intervention." },
      { value: "1 lac+", label: "people reached yearly", note: "Formal and informal advocacy reach across India." },
    ],
    pillars: [
      {
        title: "School Inclusion Program: Alag Par Ek",
        description:
          "Brain Bristle works in direct intervention across 18 schools, supporting 300+ students through one-to-one support in 100+ classrooms to help every child meet individual learning goals.",
      },
      {
        title: "Advocacy and awareness",
        description:
          "From university workshops to parent sessions and nationwide events, Brain Bristle builds voice and visibility for autism in every space that matters.",
      },
      {
        title: "Research",
        description:
          "More than 4,000 people already follow the organisation's research-facing communication, and the next phase is a dedicated research vertical grounded in on-ground work.",
      },
    ],
    visuals: [
      {
        image: "/placeholders/impact-classrooms.svg",
        alt: "Placeholder collage representing school classrooms impacted by the program",
        label: "School inclusion in practice",
      },
      {
        image: "/placeholders/impact-advocacy.svg",
        alt: "Placeholder image representing advocacy and public awareness work",
        label: "Advocacy and awareness",
      },
      {
        image: "/placeholders/impact-research.svg",
        alt: "Placeholder image representing research and communication output",
        label: "Research and communication",
      },
    ],
  },
  careers: {
    label: "Work With Us",
    headline: "Join a mission that asks for patience, rigor, and a long commitment to inclusion.",
    description:
      "Brain Bristle's team spans programs, communications, HR and finance, research, and social work fellows. The organisation is built for people who want serious, field-facing work with real human consequence.",
    principles: [
      "Children and families deserve seriousness, not sentimentality.",
      "Compassion must be matched by documentation, consistency, and follow-through.",
      "Professional development should prepare people for long-term work in schools, organisations, and public systems.",
    ],
    roleFamilies: [
      "Leadership",
      "Communications",
      "HR & Finance",
      "Research",
      "Social Work Fellows",
    ],
    fellowship: [
      {
        title: "Recruitment",
        description:
          "Social Work Fellows come from institutions such as St Xavier's College, TISS, SNDT University, and NMIMS. Fellows commit to one academic year, working four hours daily at a low-income inclusive school with a stipend of Rs. 12,000 plus resources.",
      },
      {
        title: "Placement and On-Going Training",
        description:
          "Each fellow is placed in a low-income school and continues training through adjunct faculty, peer organisations, and the in-house team, with grounding in the Teacher's College Autism Program and selected ABA principles.",
      },
      {
        title: "On-Ground School Intervention",
        description:
          "Inside the classroom, fellows support individualized curricular and social goals through push-ins, pull-out sessions, and daily guidance from Social Work Team Leads.",
      },
      {
        title: "Parent Advocacy",
        description:
          "The work continues beyond the school gate through caregiver training, home behaviour guidance, and practical protocols that carry progress from classroom to home.",
      },
      {
        title: "Placement Post Fellowship",
        description:
          "After the year concludes, fellows are connected to schools, organisations, corporates, and NGOs across Mumbai and beyond so their training finds a meaningful long-term home.",
      },
    ],
    applicationCta: "Applications for the 2027-28 year are open.",
    callout:
      "If no listed role matches, thoughtful notes from practitioners and collaborators aligned with the mission are still welcome.",
  },
  research: {
    label: "Research",
    headline: "Research is the bridge between lived school realities and what can responsibly be shared or scaled.",
    description:
      "Brain Bristle shares findings from academia, hosts advocacy panels, circulates its organisational newsletter, and is building a dedicated research vertical grounded in its work on the ground.",
    themes: [
      {
        title: "Why research matters",
        description:
          "Research helps the organisation describe autism support more honestly, evaluate what is working, and communicate better with educators, families, donors, and collaborators.",
      },
      {
        title: "What Brain Bristle shares now",
        description:
          "The team already publishes newsletters, translates academic work for broader audiences, and uses advocacy conversations to widen public understanding.",
      },
      {
        title: "What comes next",
        description:
          "The next step is a dedicated vertical that captures field observations, links them with scholarship, and produces accessible knowledge rooted in Indian school realities.",
      },
    ],
    workflow: [
      "Capture recurring school-based observations from intervention and supervision.",
      "Compare those observations with academic literature and practitioner knowledge.",
      "Translate findings into explainers, panels, newsletters, and public-facing resources.",
      "Use what is learned to improve programs, advocacy, and future research design.",
    ],
    journal: [
      { title: "Brain Bristle: Parts of a Whole", date: "March 2026" },
      { title: "Autism, From Then to Now", date: "February 2026" },
      { title: "Our Years of Schrodinger's Cat", date: "January 2026" },
      { title: "Toward Abundance", date: "November 2025" },
      { title: "Metres and Measures of Hard Work", date: "October 2025" },
      { title: "The I Rise When We Rise Special", date: "September 2025" },
    ],
    visual: {
      image: "/placeholders/research-editorial.svg",
      alt: "Placeholder editorial illustration representing research notes and reports",
      label: "The research vertical in formation",
    },
  },
  media: {
    label: "Media",
    headline: "Films, events, and selected press that carry the work beyond the classroom.",
    description:
      "Brain Bristle uses film, public conversation, and media coverage to deepen how autism is understood across education, family life, and public culture.",
    gallery: [
      {
        image: "/placeholders/media-film.svg",
        alt: "Placeholder still representing documentary work",
        label: "Film and documentary work",
      },
      {
        image: "/placeholders/media-event.svg",
        alt: "Placeholder still representing a live event or conversation",
        label: "Events and conversations",
      },
      {
        image: "/placeholders/media-press.svg",
        alt: "Placeholder still representing press coverage and public writing",
        label: "Press and public voice",
      },
    ],
    films: [
      {
        title: "Embracing Autism",
        description:
          "This film was made by Saurabh Monga and Arun Wolf and produced with the support of Max Hospitals, the Delhi Government, and Action for Autism, India.",
        videoId: "4MZW94uRdrU",
      },
      {
        title: "Making Room in the Classroom",
        description:
          "Our social work team builds education and inclusion for autism across Mumbai's low-income schools. This is a glimpse into the work the team does daily inside designated schools.",
        videoId: "T5o8C1vrhis",
      },
      {
        title: "I Rise When We Rise",
        description:
          "Shot at Puroshottam High School, this film follows Maitreya Matale's musical journey and lived experience with autism.",
        videoId: "hFbvrAx8sYk",
      },
      {
        title: "Autism in India",
        description:
          "A lecture by Devangana Mishra for DePaul University on autism in India, connecting lived realities, systems gaps, and public understanding.",
        videoId: "dummy4",
      },
    ],
    events: [
      {
        speaker: "Aalap",
        topic: "Neurodiversity and the Nuances",
        description:
          "A conversation with a creative entrepreneur on culture, purpose, and the complexity of neurodiversity.",
      },
      {
        speaker: "Pete Wharmby",
        topic: "UnTypical",
        description:
          "A discussion on education, autistic identity, and what it takes to communicate difference well.",
      },
      {
        speaker: "Pierre Novellie",
        topic: "A Comedian's Guide to Autism",
        description:
          "A public conversation on diagnosis, humor, and making autism narratives more legible to wider audiences.",
      },
      {
        speaker: "Mugdha Kalra",
        topic: "Parenting with Mugdha Kalra",
        description:
          "An exchange on family life, public voice, and the work of raising autistic children in systems still catching up.",
      },
      {
        speaker: "Dr Elizabeth Micci",
        topic: "Educational Strategy",
        description:
          "A conversation on designing stronger educational structures and strategies across public and private school systems.",
      },
      {
        speaker: "Maitreya Matale",
        topic: "A Chat with Maitreya",
        description:
          "A conversation on autism, schooling, music, and the shape of everyday aspiration and adulthood.",
      },
    ],
    press: [
      {
        publication: "Mid-Day",
        title: "Unleashing potential: Devangana Mishra, CEO and Founder Brain Bristle on Autism",
        url: "https://www.mid-day.com/brand-media/article/unleashing-potential-devangana-mishra-ceo-and-founder-brain-bristle-on-autism-23295767",
      },
      {
        publication: "Times of India",
        title: "Why do we see such few disruptions in the space of autism?",
        url: "https://timesofindia.indiatimes.com/blogs/voices/why-do-we-see-such-few-disruptions-in-the-space-of-autism/",
      },
      {
        publication: "Times Now News",
        title: "Children with autism don't need sympathy, keep it simple and natural for them",
        url: "https://www.timesnownews.com/lifestyle/parenting/toddler-beyond/children-with-autism-dont-need-sympathy-keep-it-simple-and-natural-for-them-article-104813028",
      },
      {
        publication: "UNESCO",
        title: "All Education is Special Education",
        url: "https://mgiep.unesco.org/article/all-education-is-special-education",
      },
      {
        publication: "CXO Today",
        title: "Unveiling the simplicity of Artificial Intelligence and bridging the gap",
        url: "https://www.cxotoday.com/interviews/unveiling-the-simplicity-of-artificial-intelligence-devangana-mishra-ceo-and-founder-brainbristle-explores-bridging-the-gap-between-humans-and-ai/",
      },
      {
        publication: "YourStory",
        title: "Woman spent 14 years of life with autistic children",
        url: "https://yourstory.com/herstory/2022/02/woman-spent-14-years-life-autistic-children-devangana-mishra-brain-bristle/amp",
      },
    ],
    pressReleases: [
      {
        publication: "Press release",
        title: "The BrainBristle Foundation",
        url: "https://www.kron4.com/business/press-releases/ein-presswire/681407393/the-brainbristle-foundation/",
        meta: "January 2024",
      },
      {
        publication: "Press release",
        title: "Brain Bristle Press Release",
        url: "https://www.sciencetimesobserver.com/article/597745998-a-letter-from-the-ceo-of-brainbristle-changing-global-autism-narratives-tick-by-tick",
        meta: "November 2021",
      },
    ],
  },
  teams: {
    label: "Teams",
    headline: "The work is powered by people across leadership, communications, finance, research, and field intervention.",
    description:
      "This page is structured for real portraits and bios, but for now it shows the shape of the organisation and the roles that hold the work together.",
    founder: {
      name: "Devangana Mishra",
      role: "Founder and CEO",
      bio: "Devangana Mishra holds a dual master's in Autism and Intellectual Disabilities, received the Elise Todden Scholarship, and has conducted autism research at Teachers College, Columbia University in New York.",
      image: "/placeholders/team-founder.svg",
    },
    imageRow: [
      "/placeholders/team-grid-1.svg",
      "/placeholders/team-grid-2.svg",
      "/placeholders/team-grid-3.svg",
    ],
    categories: [
      {
        title: "Leadership",
        people: [
          { name: "Placeholder Leader", role: "Founder and Strategy", summary: "Shapes long-range direction, partnerships, and public vision.", image: "/placeholders/team-portrait-a.svg" },
        ],
      },
      {
        title: "Communications",
        people: [
          { name: "Placeholder Communicator", role: "Communications", summary: "Carries the voice of the organisation across media, writing, and campaigns.", image: "/placeholders/team-portrait-b.svg" },
        ],
      },
      {
        title: "HR & Finance",
        people: [
          { name: "Placeholder Operations Lead", role: "HR & Finance", summary: "Builds the systems that let compassionate work stay stable and accountable.", image: "/placeholders/team-portrait-c.svg" },
        ],
      },
      {
        title: "Research",
        people: [
          { name: "Placeholder Research Lead", role: "Research", summary: "Translates field insights into stronger public knowledge and evidence-led planning.", image: "/placeholders/team-portrait-d.svg" },
        ],
      },
      {
        title: "Social Work Fellows",
        people: [
          { name: "Placeholder Fellow", role: "Social Work Fellow", summary: "Works inside schools to support student learning, classroom participation, and inclusion.", image: "/placeholders/team-portrait-e.svg" },
        ],
      },
    ],
    values: [
      "Evidence with humility",
      "Care that respects family reality",
      "Systems thinking over one-off interventions",
      "Communication that is clear, respectful, and public-minded",
    ],
  },
  donate: {
    label: "Donate",
    headline: "Alag Par Ek: #Make-A-School-Autism-Inclusive",
    description:
      "Your contribution can help make more low-income schools inclusive, equitable, and accessible for autistic and special-needs students while also strengthening Brain Bristle's voice and research capacity.",
    cta: {
      label: "Donate now",
      href: "mailto:hello@brainbristle.org?subject=Donate%20to%20Brain%20Bristle",
    },
    campaign: "Make-A-School-Autism-Inclusive",
    context:
      "Brain Bristle needs support to reach its goals: making more low-income schools inclusive, growing its work and voice globally, and helping build research for the country.",
    allocations: [
      "Help make more low-income schools inclusive, equitable, and accessible for autistic and special-needs students.",
      "Help Brain Bristle grow its voice and work globally.",
      "Help build research that is useful for the country and grounded in on-ground realities.",
      "Support on-ground spending in line with the objectives of the organisation.",
    ],
    taxInfo:
      "Your donation will be eligible for tax exemption under Section 80G of the Income Tax Act, 1961. All donations will be utilised as per on-ground needs and in line with the objectives of the organisation.",
    taxHighlights: [
      "Eligible for tax exemption under Section 80G of the Income Tax Act, 1961.",
      "Donations are directed toward on-ground work and organisational objectives.",
      "Suitable for individual supporters, families, and institutional giving conversations.",
    ],
    donors: [
      {
        name: "Mr V. Vaidynathan and Rukmani Social Welfare Trust",
        role: "Lead supporters",
        description: "Chief supporters and long-term believers in the work.",
      },
      {
        name: "Mr Sudhir Shenoy and Able Together",
        role: "Mentors and supporters",
        description: "Partners who have championed the organisation's growth and direction.",
      },
      {
        name: "Dr and Mrs Gadodia",
        role: "School funding supporters",
        description: "Funded one low-income school for an entire year.",
      },
      {
        name: "Inner Wheel Imperial Club of Pune",
        role: "Community donors",
        description: "Helped fund a quarter of the work with one Mumbai school.",
      },
      {
        name: "Gayatri Dhumatkar Agarwal",
        role: "School inclusion supporter",
        description: "Helped make one more low-income school inclusive in Mumbai.",
      },
      {
        name: "The Geli Family",
        role: "Early capacity supporters",
        description: "Provided generous seed funding to help build capacity for one social worker.",
      },
    ],
  },
} as const;
