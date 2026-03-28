export const siteMetadata = {
  title: 'Brain Bristle',
  description:
    'Brain Bristle builds autism inclusion in India through school-based intervention, advocacy, research, and community work.',
  url: 'https://brainbristle.org',
}

export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Impact', href: '/impact' },
  { name: 'Research', href: '/research' },
  { name: 'Work With Us', href: '/work-with-us' },
  { name: 'Media', href: '/media' },
  { name: 'Donate', href: '/donate' },
] as const

export const themeTokens = {
  navy: '#152E4C',
  turquoise: '#5B938E',
  offWhite: '#FFFAF2',
  yellow: '#F5CA01',
  softSage: '#A0B9A3',
} as const

export const contentData = {
  contact: {
    email: 'hello@brainbristle.org',
    founderEmail: 'devangana@brainbristle.org',
    city: 'Mumbai, India',
    hours: 'Monday to Saturday',
  },
  home: {
    label: 'Autism. Inclusion. Education. Equity.',
    headline:
      'Every child on the autism spectrum must be provided an equitable education, inclusion and opportunity.',
    description:
      'Today in India, 1 in every 68 children between 2 and 9 years of age is reportedly diagnosed on the autism spectrum. These children are in our classrooms, neighbourhoods, and families across every corner of the country. Brain Bristle exists to make sure none of them are left behind.',
    primaryCta: { label: 'Donate', href: '/donate' },
    secondaryCta: { label: 'Work With Us', href: '/work-with-us' },
    heroImage: {
      image: '/photos/hero-bb3.jpeg',
      alt: 'A Brain Bristle team member supporting a child during a classroom learning activity',
      title: 'Support in the classroom',
      caption:
        'The work begins in ordinary school spaces, with careful one-to-one support and the long work of inclusion.',
    },
    problem: {
      label: 'The Problem',
      headline:
        'Autism numbers diagnosed are rising rapidly, and how we respond to the diagnosis today can change our tomorrow.',
      description:
        'Our children on the autism spectrum are in our public schools, our homes, our organizations, how we intervene becomes important.',
      stats: [
        {
          emphasis: '1 in 68',
          text: 'children in India on the Autism Spectrum',
        },
        {
          emphasis: '70%',
          text: 'are in our Public or Private Affordable Schools',
        },
        {
          text: 'Many admitted into our 5500+ registered Special Schools',
        },
        {
          text: 'Many remain homeschooled',
        },
      ],
      closing:
        'With effective intervention with our masses, we believe we can shift millions of autism life trajectories.',
      visual: {
        image: '/photos/problem-classroom.jpg',
        alt: 'Children seated together in a classroom with a Brain Bristle educator supporting from the floor',
        title:
          'Millions of Children on the Autism Spectrum Remain Unsupported.',
      },
    },
    why: {
      label: 'Why Brain Bristle?',
      headline: 'Brain Bristle means to bristle a tangled mind.',
      paragraphs: [
        'Brain Bristle currently works with minimally supported students on the autism spectrum & with other learning difficulties in identified and select low-income Mumbai schools through DIRECT INTERVENTION to EDUCATE & INCLUDE them into inclusion via trained Social Work Fellows.',
        'Brain Bristle’s work is also focused on advocacy building, community work, & awareness campaigns for public, educators, policy makers & families impacted or influenced by autism',
      ],
    },
    whatWeDo: {
      label: 'What We Do',
      headline: 'Our Work From the Ground Up',
      description:
        "We begin work at the most important level of intervention, with children on the autism spectrum across Mumbai's low income schools and then build voice and awareness for what is possible when children on the autism spectrum are provided equitable education, inclusion and support.",
      items: [
        {
          title: 'Recruiting Social Work Fellows',
          description:
            'Brain Bristle recruits Social Work Fellows (students studying MA Couns.,Psychol., Psychiatry, B.Ed or on a gap year) to work with students on the autism spectrum & learning needs for a minimum of 1 academic year for a Social Work- FieldWork position.',
          image: '/photos/school-group-celebration.jpg',
          alt: 'Children and Brain Bristle team members together inside a school corridor',
        },
        {
          title: 'Ongoing Training & Supervision',
          description:
            'Social Work Fellows are trained round the year in autism, teaching and leadership pedagogy. We also partner with other organizations for their training like The Circle India U, ASB and more.',
          image: '/photos/team-planning.jpg',
          alt: 'Two Brain Bristle team members reviewing notes together during a planning session outdoors',
        },
        {
          title: 'Academic Intervention',
          description:
            'Social Work Fellows work with an Individualized Education Plan (IEP) and Student Accommodation Plans (SAP) for student achievement goals for their school caseload.',
          image: '/photos/outdoor-learning.jpg',
          alt: 'Brain Bristle facilitators and children working together over learning sheets during an outdoor activity',
        },
        {
          title: 'Advocacy & Awareness',
          description:
            'We bring advocacy & awareness to life through ongoing research work and daily engagement with multiple stakeholders and organizations creating visibility, dialogue and planting seeds of inclusion.',
          image: '/photos/public-conversation.jpg',
          alt: 'A large audience gathered for a Brain Bristle public event and conversation',
        },
      ],
    },
    philosophy: {
      label: 'Philosophy',
      headline: 'Our Philosophy',
      description:
        'Our philosophy toward autism is rooted in balanced ambition, tailored support and optimal inclusion. We believe:',
      beliefs: [
        {
          title: 'Autism is a bell curve',
          description:
            'Symptoms and severity shift with intervention or the lack thereof.',
        },
        {
          title: 'Inclusive practices',
          description:
            'have shown to benefit students on the autism spectrum leading to worldwide movements advocating for children with ASD now attending mainstream schools.',
        },
        {
          title: 'Support is critical',
          description:
            'for managing stressors, behaviours, academic goals & helping students access social and educational opportunities & accommodations.',
        },
      ],
      visual: {
        image: '/photos/school-group-celebration.jpg',
        alt: 'Children and school staff gathered together during a Brain Bristle school visit',
        title: 'Inclusion, support, and educational access must move together',
      },
    },
    gallery: [
      {
        image: '/photos/gallery-bb.jpeg',
        alt: 'A caregiver and child working together on an art activity in a classroom',
        title: 'Daily learning support',
        caption:
          'Individualized support often begins with small, consistent moments inside existing classrooms.',
      },
      {
        image: '/photos/gallery-bb1.jpeg',
        alt: 'Students and a Brain Bristle team member in a classroom discussion',
        title: 'Classroom collaboration',
        caption:
          'Support takes shape inside real classrooms with real teachers and peers.',
      },
      {
        image: '/photos/gallery-bb2.jpeg',
        alt: 'A mentor and child reading together at a classroom table',
        title: 'Reading and routine',
        caption:
          'Intervention lives inside ordinary school rituals and repeated structures.',
      },
      {
        image: '/photos/gallery-bb4.jpeg',
        alt: 'Students seated in a classroom during instruction',
        title: 'Shared classroom environments',
        caption:
          'Inclusion is built inside the rooms children already inhabit together.',
      },
      {
        image: '/photos/gallery-bb5.jpeg',
        alt: 'Students and a facilitator in a classroom conversation',
        title: 'Guided group work',
        caption:
          'Facilitation helps participation become visible and sustained.',
      },
      {
        image: '/photos/gallery-bb6.jpeg',
        alt: 'Students participating in a classroom support session',
        title: 'Observation and learning',
        caption:
          'The work depends on noticing closely and responding with patience.',
      },
    ],
    newsletter: {
      label: 'Newsletter',
      headline: 'Sign up for our newsletter',
      description:
        "Join the mailing list for updates on field work, advocacy, research notes, and Brain Bristle's public voice around autism and inclusion.",
    },
    donateReference: {
      label: 'Reference Picture for a Donation Form',
      headline: 'Support the work through the Donate tab.',
      description:
        'The donation tab links directly to Milaap, where supporters can contribute to the work.',
      cta: {
        label: 'Go to Donate',
        href: '/donate',
      },
    },
    faqs: [
      {
        question: 'Where does Brain Bristle work?',
        answer:
          'Brain Bristle works across low-income inclusive schools in Mumbai while also engaging families, educators, and audiences across India through events, writing, and advocacy.',
      },
      {
        question: 'Why focus on school systems?',
        answer:
          'Most children on the autism spectrum are already learning inside ordinary school systems. Building support there makes inclusion practical rather than theoretical.',
      },
      {
        question: 'What does Brain Bristle provide?',
        answer:
          'The work combines direct intervention, training, educator partnership, caregiver guidance, advocacy, research communication, and long-form public storytelling.',
      },
    ],
  },
  impact: {
    label: 'Impact',
    headline:
      'Impact is measured in changed classrooms, stronger school systems, and more visible autism advocacy across the country.',
    description:
      'The 2026-27 impact frame is intentionally concrete: more schools, more classrooms, more direct intervention in education, and wider public understanding shaped by practice.',
    metrics: [
      {
        value: '18',
        label: 'low-income schools',
        note: 'Projected school footprint for 2026-27.',
      },
      {
        value: '80-100',
        label: 'classrooms',
        note: 'With 30 to 40 students in each setting.',
      },
      {
        value: '300+',
        label: 'high-needs students',
        note: 'Students in direct intervention in education.',
      },
      {
        value: '1 lac+',
        label: 'people reached yearly',
        note: 'Through advocacy and awareness spanning parent sessions, workshops, and nationwide events.',
      },
    ],
    pillars: [
      {
        title: 'School Inclusion Program: Alag Par Ek',
        description:
          'Brain Bristle works in direct intervention across 18 schools, supporting 300+ students daily through direct one-to-one support in 100+ classrooms to help every child with autism meet individual learning goals. This happens through its Tier 1 of work, where Social Work Fellows are trained to work at Mumbai’s low-income schools.',
      },
      {
        title: 'Advocacy and Awareness',
        description:
          'From university workshops to parent sessions and nationwide events, Brain Bristle’s formal and informal advocacy spans all of India and reaches over 1 lac people per year.',
      },
      {
        title: 'Research',
        description:
          'More than 4,000 people follow the organisation’s research across social media, newsletters, and public learning formats, and the next phase is a dedicated research vertical grounded in on-ground work.',
      },
    ],
    levers: [
      {
        title: 'Direct Intervention',
        description:
          'One-to-one student support in classrooms remains the clearest proof point of what equitable inclusion can look like in practice.',
        image: '/photos/outdoor-learning.jpg',
        alt: 'Facilitators and children engaging in guided learning together outdoors',
      },
      {
        title: 'Implementation',
        description:
          'The work is sustained through on-ground supervision, classroom adaptation, school partnership, and systems that keep practice consistent.',
        image: '/photos/team-planning.jpg',
        alt: 'Team members reviewing notes and planning together during a school-day session',
      },
      {
        title: 'Sharing learnings and blueprints',
        description:
          'Brain Bristle carries learnings outward through public dialogue, events, organisational writing, and the research practice now taking shape.',
        image: '/photos/public-conversation.jpg',
        alt: 'A Brain Bristle gathering with a large audience during a public event',
      },
    ],
    fellowGallery: [
      {
        image: '/photos/problem-classroom.jpg',
        alt: 'A Brain Bristle educator seated with children inside a classroom',
        title: 'School-based intervention',
        caption:
          'The work is rooted in classrooms where students are already learning and where support can quietly shift daily participation.',
      },
      {
        image: '/photos/outdoor-learning.jpg',
        alt: 'Children and facilitators working together over learning materials outdoors',
        title: 'Implementation across sites',
        caption:
          'Implementation depends on routine, coordination, and enough field presence to adapt support to each school context.',
      },
      {
        image: '/photos/public-conversation.jpg',
        alt: 'A crowded Brain Bristle event with speakers in front of a seated audience',
        title: 'Learning carried outward',
        caption:
          'What is learned on the ground has to travel outward through public conversations, writing, and shared language.',
      },
    ],
    closingLine:
      'Intervention, research, awareness, and advocacy must go hand-in-hand.',
  },
  research: {
    label: 'Research',
    headline:
      'Our growing practice of research building is to systemize and share the work we do on the ground and build more educational and inclusive interventions from those learnings.',
    description:
      "Brain Bristle's research practice is growing slowly and deliberately, shaped by field learning, public translation, and the need for more credible autism knowledge in the country.",
    intro: {
      label: 'Research Building',
      headline:
        'The goal is to systemize the work on the ground and turn observation into more usable systems.',
      description:
        'Brain Bristle currently shares its work with thousands of people through its monthly newsletter, advocacy and awareness panels, and a slowly growing research blueprint for the country.',
    },
    currentPractice: [
      {
        title: 'Monthly newsletters',
        description:
          'The monthly newsletter acts as a consistent public archive of ideas, reflections, field learning, and practical storytelling.',
      },
      {
        title: 'Panels and conversations',
        description:
          'Advocacy and awareness panels create public entry points into autism, inclusion, and educational thinking without flattening complexity.',
      },
      {
        title: 'A research blueprint in formation',
        description:
          'The next step is a research vertical that can hold practice notes, educational resources, and school-based learnings in a more systematic way.',
      },
    ],
    resources: {
      label: 'Research Papers',
      headline: 'A research archive and paper library is in progress.',
      description:
        'This section is being prepared as a future home for papers, field notes, educational resources, and linked research that supports the work.',
      links: [
        { title: 'Research archive coming soon', href: '#' },
        {
          title: 'Field notes and educational resources coming soon',
          href: '#',
        },
      ],
    },
    journal: [
      { title: 'Brain Bristle: Parts of a Whole', date: 'March 2026' },
      { title: 'Autism, From Then to Now', date: 'February 2026' },
      { title: "Our Years of Schrodinger's Cat", date: 'January 2026' },
      { title: 'Toward Abundance', date: 'November 2025' },
      { title: 'Metres and Measures of Hard Work', date: 'October 2025' },
      { title: 'The I Rise When We Rise Special', date: 'September 2025' },
    ],
    visual: {
      image: '/photos/classroom-note-taking.jpg',
      alt: 'A Brain Bristle team member writing notes inside a classroom while students work in the background',
      title: 'Research as a public-facing practice',
    },
  },
  workWithUs: {
    label: 'Work With Us',
    headline:
      'Join a mission that asks for patience, rigor, and a long commitment to inclusion.',
    description:
      "Brain Bristle's work spans direct intervention, training, communications, research, and organisational systems. This page brings together the people, roles, fellowship pathways, and questions behind that work.",
    team: {
      label: 'Our Team',
      headline:
        'The organisation is held together by multiple working groups and a shared field-facing ethic.',
      description:
        'The work is carried by a small team across leadership, training, communications, partnerships, and recruitment, with each role helping build more durable systems for inclusion.',
      photos: [
        {
          image: '/photos/team-planning.jpg',
          alt: 'Two Brain Bristle team members sitting outdoors while reviewing notes and planning together',
          label: 'Planning, reflection, and daily coordination shape the work behind the scenes.',
        },
        {
          image: '/photos/workshop-reading.jpg',
          alt: 'A Brain Bristle group event where team members are reading together in a workshop space',
          label: 'Workshops, readings, and collaborative learning remain part of the organisation’s internal rhythm.',
        },
      ],
      founder: {
        name: 'Devangana Mishra',
        role: 'Founder',
        image: '/team/devangana-mishra.jpeg',
        alt: 'Portrait of Devangana Mishra, founder of Brain Bristle',
        summary:
          'Devangana Mishra has spent the past 17 years building education, curriculum, equity, and inclusion for individuals on the autism spectrum and those with other learning needs across multiple geographies and systems.',
        bio: [
          'She holds a Master’s degree in Autism and Intellectual Disabilities from Teachers College, Columbia University, where she received the Elise Todden Scholarship and was a Fellow with the Opportunities and Outcomes Department.',
          'Since then, she has worked across private schools and organisations in New York, Indonesia, New Delhi, Hong Kong, and Mumbai. She is also a writer and artist, and spends her free hours with her family, friends, and her cat, Mari.',
        ],
      },
      groups: [
        {
          title: 'Training Team',
          description:
            'The training team grounds the fellowship in evidence-based practice, ethical support, and close supervision.',
          people: [
            {
              name: 'Ishika Jain',
              role: 'Qualified Behaviour Analyst',
              summary:
                'Ishika is a Qualified Behaviour Analyst with advanced training in Applied Behaviour Analysis. She has experience supporting children and adolescents with diverse developmental, behavioural, and learning needs across educational and clinical settings through school-based intervention, multidisciplinary collaboration, caregiver guidance, and individualized behaviour and skill-building programs.',
              image: '/team/ishika-jain.jpeg',
              alt: 'Portrait of Ishika Jain',
            },
            {
              name: 'Alisha Ganguly',
              role: 'Behaviour Therapist and Mental Health Professional',
              summary:
                'Alisha is a behaviour therapist and mental health professional with experience across Applied Behavior Analysis, clinical psychology, and social service settings. She has worked closely with children and adults from diverse backgrounds and holds a Master’s degree in Clinical Psychology from Mumbai University along with postgraduate certifications in Autism and Behavioural Sciences and in Addictions: Treatment and Prevention from Canada.',
              image: '/team/alisha-ganguly.jpeg',
              alt: 'Portrait of Alisha Ganguly',
            },
          ],
        },
        {
          title: 'Communications',
          description:
            "Communications and partnerships help Brain Bristle shape public narratives, build visibility, and create stronger bridges between the work and the audiences it needs to reach.",
          people: [
            {
              name: 'Samruddhi Bora',
              role: 'Partnerships and Public Affairs',
              summary:
                'Samruddhi works in partnerships and public affairs, with a focus on strategic communication, brand positioning, and relationship-led growth. Her work is rooted in building meaningful collaborations, shaping public narratives, and creating visibility through thoughtful media and partnership strategies.',
              image: '/team/samruddhi-bora.jpeg',
              alt: 'Portrait of Samruddhi Bora',
            },
            {
              name: 'Vani Mishra',
              role: 'Partnerships Associate',
              summary:
                'Vani works as a Partnerships Associate at Brain Bristle, where she focuses on building collaborations with schools, colleges, media platforms, and organisations to expand awareness around autism and inclusive education through expert talks, workshops, media collaborations, and awareness initiatives.',
              image: '/team/vani-mishra.jpeg',
              alt: 'Portrait of Vani Mishra',
            },
            {
              name: 'Sarah Thakur',
              role: 'Public Relations',
              summary:
                'Sarah holds a diploma in Public Relations from the Xavier Institute of Communications and brings over four years of PR experience across tech, lifestyle, and travel. Her work spans content writing, media outreach, reporting, and campaign ideation, and reflects an ongoing commitment to leadership and community engagement.',
              image: '/team/sarah-thakur.jpg',
              alt: 'Portrait of Sarah Thakur',
            },
            {
              name: 'Rhea Sumit Rane',
              role: 'Communications Associate',
              summary:
                'Rhea works as a Communications Associate at Brain Bristle, weaving together content, strategy, and storytelling to build awareness around autism and inclusive education. With a background in political science, international relations, and nonprofit communications, she helps shape digital outreach and campaigns that make social impact work feel more human.',
              image: '/team/rhea-sumit-rane.jpeg',
              alt: 'Portrait of Rhea Sumit Rane',
            },
          ],
        },
      ],
      notes: [
        {
          title: 'HR & Finance',
          description:
            'Shubham Kure currently supports Social Work Fellowship recruitment as part of the organisational backbone around hiring, administration, finance, and team continuity.',
        },
        {
          title: 'Research',
          description:
            'The research team section will remain blank for now while that vertical is still being shaped.',
        },
      ],
    },
    fellows: {
      label: 'Social Work Fellows 26-27',
      headline:
        "Social Work Fellows form the field-facing core of the organisation's school work.",
      description:
        'Social Work Fellows form the field-facing core of the organisation’s school work, and this section holds the place for the 2026-27 fellow cohort.',
      items: [
        {
          name: 'Fellow profile 01',
          role: 'Social Work Fellow',
          description:
            'Placeholder slot for a future fellow profile, name, and image from the 2026-27 cohort.',
          image: '/photos/problem-classroom.jpg',
          alt: 'Children seated in a classroom with a Brain Bristle educator supporting nearby',
        },
        {
          name: 'Fellow profile 02',
          role: 'Social Work Fellow',
          description:
            'Placeholder slot for a future fellow profile, name, and image from the 2026-27 cohort.',
          image: '/photos/outdoor-learning.jpg',
          alt: 'Children and facilitators seated together around learning sheets during a guided activity',
        },
        {
          name: 'Fellow profile 03',
          role: 'Social Work Fellow',
          description:
            'Placeholder slot for a future fellow profile, name, and image from the 2026-27 cohort.',
          image: '/photos/classroom-note-taking.jpg',
          alt: 'A Brain Bristle team member writing notes in a classroom while students work in the background',
        },
        {
          name: 'Fellow profile 04',
          role: 'Social Work Fellow',
          description:
            'Placeholder slot for a future fellow profile, name, and image from the 2026-27 cohort.',
          image: '/photos/team-planning.jpg',
          alt: 'Two Brain Bristle team members sitting outdoors with notes spread beside them',
        },
      ],
    },
    journey: [
      {
        title: 'Recruitment',
        description:
          'Brain Bristle recruits Social Work Fellows from counselling, psychology, education, psychiatry, and adjacent pathways to commit to school-based autism inclusion work for at least one academic year.',
      },
      {
        title: 'Placement and Ongoing Training',
        description:
          'Fellows are placed in low-income schools and continue receiving training, supervision, and practical learning throughout the year.',
      },
      {
        title: 'On-Ground School Intervention',
        description:
          'Fellows support children in classrooms, work alongside teachers, adapt materials, and help students access routines, participation, and educational goals.',
      },
      {
        title: 'Parent Advocacy',
        description:
          'The work continues beyond the classroom through conversations with families, behavioural guidance, and practical support for home-school continuity.',
      },
      {
        title: 'Placement Post Fellowship',
        description:
          'The fellowship is designed to open into a wider ecosystem of schools, organisations, and roles connected to inclusion, education, and social sector practice.',
      },
    ],
    jobOpenings: {
      label: 'Job Openings',
      headline:
        'Work With Us across organisational, field, and public-facing roles.',
      description:
        'The organisation needs people across multiple functions. These role clusters create the shape of the work even when current openings may change over time.',
      roles: [
        {
          title: 'Staff Roles',
          description:
            'Programs, operations, training, communications, and research all require dependable people who can combine care with follow-through.',
        },
        {
          title: 'Social Work Fellowship Roles',
          description:
            'Field roles are built around classroom presence, observation, relationship-building, and the stamina to work inside real school systems.',
        },
        {
          title: 'Social Work Fellow Applications 27-28',
          description:
            'The Social Work Fellowship remains one of the clearest entry points into the work, especially for people committed to inclusion in low-income educational settings.',
        },
      ],
    },
    application: {
      label: 'Applications',
      headline:
        'Social Work Fellow Applications 27-28 should feel accessible, serious, and easy to find.',
      description:
        'This CTA block is designed for a future external form link. Until then, Brain Bristle can route enquiries and early applications through email.',
      cta: {
        label: 'Request the application form',
        href: 'mailto:hello@brainbristle.org?subject=Social%20Work%20Fellowship%20Application',
      },
    },
    support: {
      label: 'Learn More',
      headline:
        'Questions about roles, the fellowship, or the organisation are always welcome.',
      description:
        'If you are exploring staff roles, fellowship pathways, or future collaboration, Brain Bristle can guide you toward the right next step by email.',
      cta: {
        label: 'Email the team',
        href: 'mailto:hello@brainbristle.org',
      },
    },
    faqs: [
      {
        question: 'What is the Social Work Fellow role at Brain Bristle?',
        answer:
          'Social Work Fellows are placed in schools to support children on the autism spectrum in classrooms, work alongside teachers to enable inclusion, build social, communication, and equitable learning skills, and act as a bridge between children, teachers, and families.',
      },
      {
        question: 'Where do Social Work Fellows work?',
        answer:
          'Social Work Fellows work in low-income and underserved schools across Mumbai and surrounding regions, directly within classrooms and school communities.',
      },
      {
        question: 'What does a typical day for a Fellow look like?',
        answer:
          'A Fellow may work one-to-one or in small groups with children for several hours a day, support classroom participation and routines, adapt learning materials, collaborate with teachers, and observe and document student progress.',
      },
      {
        question: 'What kind of training and support do Fellows receive?',
        answer:
          'Fellows receive training in autism and inclusive education, ongoing mentorship and supervision, exposure to classroom-based strategies and interventions, and additional training through partner organisations.',
      },
      {
        question: 'What skills are important for a Social Work Fellow?',
        answer:
          'Empathy, patience, strong observation, analytical thinking, comfort inside dynamic classroom environments, willingness to learn and adapt, and a serious commitment to inclusion and equity all matter.',
      },
      {
        question: 'What impact do Social Work Fellows create?',
        answer:
          'They help children access and participate in mainstream classrooms, help teachers build inclusive practices, and help schools become more supportive and responsive to diverse learners.',
      },
      {
        question: 'Who can apply for the Fellowship?',
        answer:
          'The role is suited to graduates or postgraduates in social work, psychology, education, or related fields who are willing to commit a few hours daily and are passionate about building inclusive systems in low-income sectors.',
      },
      {
        question: 'Is prior experience in autism required?',
        answer:
          'Not necessarily. Brain Bristle provides training, but a strong interest in working with children on the autism spectrum is essential.',
      },
      {
        question: 'How is this role different from a typical teaching role?',
        answer:
          'The fellowship focuses on inclusion, autism intervention, and advocacy for students rather than instruction alone. It centers on individualized educational support inside classrooms, alongside developmental and social-emotional goals.',
      },
      {
        question:
          'What growth opportunities does the Social Work Fellowship offer?',
        answer:
          'Fellows gain hands-on experience in grassroots inclusion and autism education, a deeper understanding of autism through research and training, opportunities to contribute to programs and advocacy, and access to a wider field network.',
      },
      {
        question: 'How can I apply or learn more?',
        answer:
          "You can reach out through Brain Bristle's website or by writing to hello@brainbristle.org for the latest application and contact details.",
      },
    ],
  },
  media: {
    label: 'Media',
    headline:
      'Films, events, and public writing carry the work beyond the classroom.',
    description:
      'Brain Bristle uses film, conversation, press, and long-form writing to deepen how autism is understood across education, family life, and public culture.',
    gallery: [
      {
        image: '/photos/public-conversation.jpg',
        alt: 'A large public audience gathered at a Brain Bristle event',
        label: 'Public conversations that widen the organisation’s voice',
      },
      {
        image: '/photos/workshop-reading.jpg',
        alt: 'A Brain Bristle workshop or reading session with multiple people gathered together',
        label: 'Workshops, readings, and intimate gatherings',
      },
      {
        image: '/photos/school-group-celebration.jpg',
        alt: 'Children and educators standing together in a school setting',
        label: 'School stories that feed the broader public narrative',
      },
    ],
    films: [
      {
        title: 'Embracing Autism',
        description:
          'This film was made by Saurabh Monga and Arun Wolf and produced with the support of Max Hospitals, the Delhi Government, and Action for Autism, India.',
        videoId: '4MZW94uRdrU',
      },
      {
        title: 'Making Room in the Classroom',
        description:
          "Our social work team builds education and inclusion for autism across Mumbai's low-income schools. This film offers a glimpse into the daily work happening inside designated schools.",
        videoId: 'T5o8C1vrhis',
      },
      {
        title: 'I Rise When We Rise',
        description:
          "Shot at Puroshottam High School, this film follows Maitreya Matale's musical journey and lived experience with autism.",
        videoId: 'hFbvrAx8sYk',
      },
      {
        title: 'Autism in India',
        description:
          'A lecture by Devangana Mishra for DePaul University on autism in India, connecting lived realities, systems gaps, and public understanding.',
        videoId: 'dummy4',
      },
    ],
    events: [
      {
        speaker: 'Aalap',
        topic: 'Neurodiversity and the Nuances',
        description:
          'A conversation with a creative entrepreneur on culture, purpose, and the complexity of neurodiversity.',
      },
      {
        speaker: 'Pete Wharmby',
        topic: 'UnTypical',
        description:
          'A discussion on education, autistic identity, and what it takes to communicate difference well.',
      },
      {
        speaker: 'Pierre Novellie',
        topic: "A Comedian's Guide to Autism",
        description:
          'A public conversation on diagnosis, humor, and making autism narratives more legible to wider audiences.',
      },
      {
        speaker: 'Mugdha Kalra',
        topic: 'Parenting with Mugdha Kalra',
        description:
          'An exchange on family life, public voice, and the work of raising autistic children in systems still catching up.',
      },
      {
        speaker: 'Dr Elizabeth Micci',
        topic: 'Educational Strategy',
        description:
          'A conversation on designing stronger educational structures and strategies across public and private school systems.',
      },
      {
        speaker: 'Maitreya Matale',
        topic: 'A Chat with Maitreya',
        description:
          'A conversation on autism, schooling, music, and the shape of everyday aspiration and adulthood.',
      },
    ],
    press: [
      {
        publication: 'Mid-Day',
        title:
          'Unleashing potential: Devangana Mishra, CEO and Founder Brain Bristle on Autism',
        url: 'https://www.mid-day.com/brand-media/article/unleashing-potential-devangana-mishra-ceo-and-founder-brain-bristle-on-autism-23295767',
      },
      {
        publication: 'Times of India',
        title: 'Why do we see such few disruptions in the space of autism?',
        url: 'https://timesofindia.indiatimes.com/blogs/voices/why-do-we-see-such-few-disruptions-in-the-space-of-autism/',
      },
      {
        publication: 'Times Now News',
        title:
          "Children with autism don't need sympathy, keep it simple and natural for them",
        url: 'https://www.timesnownews.com/lifestyle/parenting/toddler-beyond/children-with-autism-dont-need-sympathy-keep-it-simple-and-natural-for-them-article-104813028',
      },
      {
        publication: 'UNESCO',
        title: 'All Education is Special Education',
        url: 'https://mgiep.unesco.org/article/all-education-is-special-education',
      },
      {
        publication: 'CXO Today',
        title:
          'Unveiling the simplicity of Artificial Intelligence and bridging the gap',
        url: 'https://www.cxotoday.com/interviews/unveiling-the-simplicity-of-artificial-intelligence-devangana-mishra-ceo-and-founder-brainbristle-explores-bridging-the-gap-between-humans-and-ai/',
      },
      {
        publication: 'YourStory',
        title: 'Woman spent 14 years of life with autistic children',
        url: 'https://yourstory.com/herstory/2022/02/woman-spent-14-years-life-autistic-children-devangana-mishra-brain-bristle/amp',
      },
    ],
    pressReleases: [
      {
        publication: 'Press release',
        title: 'The BrainBristle Foundation',
        url: 'https://www.kron4.com/business/press-releases/ein-presswire/681407393/the-brainbristle-foundation/',
        meta: 'January 2024',
      },
      {
        publication: 'Press release',
        title: 'Brain Bristle Press Release',
        url: 'https://www.sciencetimesobserver.com/article/597745998-a-letter-from-the-ceo-of-brainbristle-changing-global-autism-narratives-tick-by-tick',
        meta: 'November 2021',
      },
    ],
  },
  donate: {
    label: 'Donate',
    headline: 'Alag Par Ek: #Make-A-School-Autism-Inclusive',
    description:
      'Your contribution can help make more low-income schools inclusive, academically and socially, for autistic and special-needs students while also helping Brain Bristle grow its voice and build research for the country.',
    cta: {
      label: 'Donate now',
      href: 'https://milaap.org/fundraisers/brain-bristle',
    },
    options: {
      label: 'Ways to Give',
      headline: 'Choose a monthly or one-time way to support the work.',
      description:
        'This section helps supporters understand that they can give regularly or make a one-time contribution, while still keeping the overall page simple and campaign-led.',
      monthly: {
        title: 'Monthly Donation',
        amounts: ['$3 / month', '$5 / month', '$7 / month', '$10 / month', '$25 / month'],
        cta: {
          label: 'Start now',
          href: 'https://milaap.org/fundraisers/brain-bristle?frequency=monthly',
        },
      },
      oneTime: {
        title: 'One-Time Donation',
        description:
          'You can also become a spontaneous supporter with a one-time donation in any amount.',
        cta: {
          label: 'Give now',
          href: 'https://milaap.org/fundraisers/brain-bristle?frequency=once',
        },
      },
    },
    context: {
      label: 'What your support enables',
      headline:
        'We need your support to reach the goals that keep this work moving.',
      description:
        'Brain Bristle was born from the knowledge that today in India a significant number of children are diagnosed on the autism spectrum while most remain inside ordinary public, affordable private, or special-school systems. We began with one question: who is supporting these students in our low-income schools? Your contribution can make a difference.',
      allocations: [
        'Help make more low-income schools inclusive, academically and socially, for autistic and special-needs students.',
        'Help Brain Bristle grow its voice and work globally.',
        'Help build research for the country.',
      ],
    },
    tax: {
      label: 'Tax and Giving',
      headline: 'Your contribution should feel clear, compliant, and easy to act on.',
      description:
        'Your donation will be eligible for tax exemption under Section 80G of the Income Tax Act, 1961. All donations will be utilised as per needs on-ground, in line with the objectives of the organisation.',
      highlights: [
        'Eligible for tax exemption under Section 80G of the Income Tax Act, 1961.',
        'Donations are directed toward on-ground work and organisational objectives.',
        'Suitable for individual supporters, families, and institutional giving conversations.',
      ],
    },
    donors: [
      {
        name: 'Mr V. Vaidynathan and Rukmani Social Welfare Trust',
        role: 'Lead supporters',
        description: 'Chief supporters and long-term believers in the work.',
        image: '/placeholders/team-portrait-a.svg',
        alt: 'Placeholder donor portrait for Mr V. Vaidynathan and Rukmani Social Welfare Trust',
      },
      {
        name: 'Mr Sudhir Shenoy and Able Together',
        role: 'Mentors and supporters',
        description:
          "Partners who have championed the organisation's growth and direction.",
        image: '/placeholders/team-portrait-b.svg',
        alt: 'Placeholder donor portrait for Mr Sudhir Shenoy and Able Together',
      },
      {
        name: 'Dr and Mrs Gadodia',
        role: 'School funding supporters',
        description: 'Funded one low-income school for an entire year.',
        image: '/placeholders/team-portrait-c.svg',
        alt: 'Placeholder donor portrait for Dr and Mrs Gadodia',
      },
      {
        name: 'Inner Wheel Imperial Club of Pune',
        role: 'Community donors',
        description:
          'Helped fund a quarter of the work with one Mumbai school.',
        image: '/placeholders/team-portrait-d.svg',
        alt: 'Placeholder donor portrait for Inner Wheel Imperial Club of Pune',
      },
      {
        name: 'Gayatri Dhumatkar Agarwal',
        role: 'School inclusion supporter',
        description:
          'Helped make one more low-income school inclusive in Mumbai.',
        image: '/placeholders/team-portrait-e.svg',
        alt: 'Placeholder donor portrait for Gayatri Dhumatkar Agarwal',
      },
      {
        name: 'The Geli Family',
        role: 'Early capacity supporters',
        description:
          'Provided generous seed funding to help build capacity for one social worker.',
        image: '/placeholders/team-founder.svg',
        alt: 'Placeholder donor portrait for the Geli Family',
      },
    ],
  },
} as const
