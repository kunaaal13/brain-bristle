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
        image: '/photos/bb-children-circle.jpg',
        alt: 'Children seated together in a classroom while a Brain Bristle educator sits with them from behind',
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
          image: '/photos/bb-team-ground-planning.jpg',
          alt: 'Two Brain Bristle team members sitting outdoors with notes and printed materials during a planning session',
        },
        {
          title: 'Ongoing Training & Supervision',
          description:
            'Social Work Fellows are trained round the year in autism, teaching and leadership pedagogy. We also partner with other organizations for their training like The Circle India U, ASB and more.',
          image: '/photos/workshop-reading.jpg',
          alt: 'A Brain Bristle workshop or reading session with multiple people gathered together',
        },
        {
          title: 'Academic Intervention',
          description:
            'Social Work Fellows work with an Individualized Education Plan (IEP) and Student Accommodation Plans (SAP) for student achievement goals for their school caseload.',
          image: '/photos/bb-outdoor-learning-new.jpg',
          alt: 'Brain Bristle facilitators and children working together over learning sheets on a striped mat outdoors',
        },
        {
          title: 'Advocacy & Awareness',
          description:
            'We bring advocacy & awareness to life through ongoing research work and daily engagement with multiple stakeholders and organizations creating visibility, dialogue and planting seeds of inclusion.',
          image: '/photos/bb-audience-hall.jpg',
          alt: 'A large audience gathered in a hall for a Brain Bristle public event and conversation',
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
        image: '/photos/bb-student-support-selfie.jpg',
        alt: 'A Brain Bristle facilitator smiling with two students in a classroom',
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
      label: 'Support the Mission',
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
        question: 'Where do you operate from?',
        answer:
          'For our direct intervention, we work directly with low income schools and communities of Mumbai. For our community work, we work virtually or out of communities where word of our work gets spread to.',
      },
      {
        question: 'Why does India need BrainBristle?',
        answer:
          'Today 1 out of every 100, 10-year-olds tested in India on the CARS-2 is diagnosed on the spectrum of autism. We, at BrainBristle, want to ensure India understands autism.',
      },
      {
        question: 'What does your outreach entail?',
        answer:
          'Brain Bristle‘s outreach wing uses its voice to provide a thorough education into autism. We present our work at conferences, summits, events and our community work focuses on autism awareness and autism education across parts of India and beyond.',
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
        label: 'Low Income Schools',
        note: '',
      },
      {
        value: '80-100',
        label: 'classrooms with 30-40 students in each',
        note: '',
      },
      {
        value: '300 +',
        label: 'High Needs students in Direct Intervention in Education',
        note: '',
      },
    ],
    pillars: [
      {
        title: 'School Inclusion Program: Alag Par Ek',
        description:
          'We work in direct intervention across 18 schools, supporting 300+ students daily through direct 1:1 support, in 100+ classrooms to help every child with autism meet their individual learning goals. We do this through our Tier 1 of work, where we train Social Work Fellows to work at Mumbai’s low income schools.',
      },
      {
        title: 'Advocacy and Awareness',
        description:
          'From university workshops to parent sessions and nationwide events, our formal and informal advocacy spans all of India. We build voice and visibility for autism in every space that matters reaching over 1 lac people per year.',
      },
      {
        title: 'Research',
        description:
          '4,000+ people follow our research across social media. We share findings from academia, host advocacy panels, widely share our organisational newsletter and in the coming year, we are building a dedicated research vertical grounded in our work on the ground.',
      },
    ],
    levers: [
      {
        title: 'Direct Intervention',
        description:
          'One-to-one student support in classrooms remains the clearest proof point of what equitable inclusion can look like in practice.',
        image: '/photos/problem-classroom.jpg',
        alt: 'A Brain Bristle educator seated with children inside a classroom',
      },
      {
        title: 'Implementation',
        description:
          'The work is sustained through on-ground supervision, classroom adaptation, school partnership, and systems that keep practice consistent.',
        image: '/photos/classroom-note-taking.jpg',
        alt: 'A Brain Bristle team member writing notes in a classroom while students work in the background',
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
        image: '/photos/bb-school-honour-board.jpg',
        alt: 'Children and facilitators celebrating together in a school beneath an honours board',
        title: 'Implementation across sites',
        caption:
          'Implementation depends on routine, coordination, and enough field presence to adapt support to each school context.',
      },
      {
        image: '/photos/bb-gallery-reading.jpg',
        alt: 'A Brain Bristle group reading or presenting together in a gallery-like space',
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
    headline: 'Research Building',
    description:
      'Our growing practice of Research Building is to systemize and share the work we do on the ground as well as build in educational and inclusive interventions to further share our learnings.',
    intro: {
      label: 'Research Building',
      headline:
        'Brain Bristle currently shares their work with thousands of people via their monthly newsletter, hosting advocacy and awareness panels and we are slowly growing our research blueprint for the country.',
      description:
        'This is the early shape of a research practice grounded in what the organisation is learning on the ground and how those learnings can be shared outward more clearly over time.',
    },
    currentPractice: [],
    resources: {
      label: 'Research Papers',
      headline: 'Research papers and linked resources are a work in progress.',
      description:
        'This section will hold the research papers, educational resources, and linked materials that grow out of the work on the ground. For now, these remain placeholders while the research vertical is being built.',
      links: [
        { title: 'Research papers coming soon', href: '#' },
        {
          title: 'Educational interventions coming soon',
          href: '#',
        },
        {
          title: 'Linked resources and field notes coming soon',
          href: '#',
        },
      ],
    },
    journal: [],
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
          image: '/placeholders/team-grid-1.svg',
          alt: 'Placeholder visual for a future Social Work Fellow profile',
        },
        {
          name: 'Fellow profile 02',
          role: 'Social Work Fellow',
          description:
            'Placeholder slot for a future fellow profile, name, and image from the 2026-27 cohort.',
          image: '/placeholders/team-grid-2.svg',
          alt: 'Placeholder visual for a future Social Work Fellow profile',
        },
        {
          name: 'Fellow profile 03',
          role: 'Social Work Fellow',
          description:
            'Placeholder slot for a future fellow profile, name, and image from the 2026-27 cohort.',
          image: '/placeholders/team-grid-3.svg',
          alt: 'Placeholder visual for a future Social Work Fellow profile',
        },
        {
          name: 'Fellow profile 04',
          role: 'Social Work Fellow',
          description:
            'Placeholder slot for a future fellow profile, name, and image from the 2026-27 cohort.',
          image: '/placeholders/team-portrait-a.svg',
          alt: 'Placeholder visual for a future Social Work Fellow profile',
        },
      ],
    },
    journey: [
      {
        title: 'Recruitment',
        description:
          "We recruit our Social Work Team Members from our country's top colleges and institutes including St Xavier's College, TISS, Sophia's College, SNDT University, NMIMS, Wadia Hospital, National College Bandra, and B.Ed colleges to work as Social Workers for 4 hours daily at a low income inclusive Mumbai school with students with ASD and high learning needs for 1 academic year. We employ them for half their days to enable them to continue learning for the rest of their time. They are paid a stipend of Rs 10,000 plus Rs 2000 for on-ground work, training and resource allocation.",
      },
      {
        title: 'Placement and Ongoing Training',
        description:
          "We place them in Mumbai's low income inclusive schools to work with students on the autism spectrum and other high learning needs and train them via partnerships with other organizations, adjunct faculty, and our in-house team of training leads. Our training is rooted in the philosophy of the Teacher's College Autism Program with principles and tenets of ABA.",
      },
      {
        title: 'On-Ground School Intervention',
        description:
          'Our Social Work Team works for 4 hours daily at a low income school toward inclusion via curricular and individualized educational goals met by in-class push-ins and tailored to student need pull-out sessions. With the support of high-quality trainings provided consistently our team works toward student academic and social inclusion on an ongoing basis. Our Social Work Team Leads visit schools of work daily to supervise and tailor toward best practices.',
      },
      {
        title: 'Parent Advocacy',
        description:
          'We work closely with parents to provide individualized support, caregiver training, guidance for home behaviours, behaviour protocols and support to parents to carry forward school based interventions in a home setting.',
      },
      {
        title: 'Placement',
        description:
          "We train our team through the year and actively engage with high-impact networks globally to place our social work team members in schools, organizations, corp and other NGO's across Mumbai and globally.",
      },
    ],
    jobOpenings: {
      label: 'Job Openings',
      headline: 'Explore current openings and application pathways.',
      description:
        'This section holds the main entry points into Brain Bristle right now: staff roles and the Social Work Fellow application pathway.',
      roles: [
        {
          title: 'Staff Roles',
          description:
            'Explore organisational roles across programs, operations, training, communications, and related functions.',
          href: '/contact',
          ctaLabel: 'View staff roles',
        },
        {
          title: 'Social Work Fellow Applications 27-28',
          description:
            'To apply for the Social Work Fellowship for the 27-28 cohort, email the team directly and they will guide you through the next step.',
          href: 'mailto:hello@brainbristle.org?subject=Social%20Work%20Fellowship%20Application',
          ctaLabel: 'Apply',
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
        label: 'Mail us',
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
          'Social Work Fellows are placed in schools to support children on the autism spectrum in classrooms, work alongside teachers to enable inclusion, build social, communication, and equitable learning skills in students, and act as a bridge between children, teachers, and families.',
      },
      {
        question: 'Where do Social Work Fellows work?',
        answer:
          'SW Fellows work in low-income and underserved schools across Mumbai and surrounding regions, directly within classrooms and school communities.',
      },
      {
        question: 'What does a typical day for a Fellow look like?',
        answer:
          'A SW Fellow may work one-on-one or in small groups with children for 4 hours a day, support classroom participation and routines, adapt learning materials, collaborate with teachers, and observe and document student progress.',
      },
      {
        question: 'What kind of training and support do Fellows receive?',
        answer:
          'Fellows receive training in autism and inclusive education, ongoing mentorship and supervision, exposure to classroom-based strategies and interventions, and training via partner organizations.',
      },
      {
        question: 'What skills are important for a Social Work Fellow?',
        answer:
          'Empathy and patience, strong observation and analytical skills, the ability to work in dynamic classroom environments, willingness to learn, experiment and adapt, and a commitment to inclusion and equity are all important.',
      },
      {
        question: 'What impact do Social Work Fellows create?',
        answer:
          'They help children access and participate in mainstream classrooms, teachers build inclusive practices, and schools become more supportive and responsive to diverse learners.',
      },
      {
        question: 'Who can apply for the Fellowship?',
        answer:
          'The role is suited for graduates or postgraduates in social work, psychology, education, or related fields willing to make a few hours of commitment daily, and for individuals passionate about working with our country’s low income sector to create inclusive systems.',
      },
      {
        question: 'Is prior experience in autism required?',
        answer:
          'Not necessarily. Brain Bristle provides training, but a strong interest in working with children on the autism spectrum is essential.',
      },
      {
        question: 'How is this role different from a typical teaching role?',
        answer:
          'This role focuses on inclusion, autism intervention, and advocacy for students rather than instruction alone. It centers on individualized educational programs and support within classrooms, alongside social-emotional and developmental goals as well as academics.',
      },
      {
        question:
          'What growth opportunities does the Social Work Fellowship offer?',
        answer:
          'Fellows gain hands-on experience in grassroots inclusive and autism education, a deep understanding of autism via research, training and real classroom settings, opportunities to contribute to program design, training, and advocacy, and an opening into a large network of stakeholders in the field.',
      },
      {
        question: 'How can I apply or learn more?',
        answer:
          'You can reach out through Website: brainbristle.org or Email: hello@brainbristle.org.',
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
      href: 'https://milaap.org/fundraisers/support-autistic-students-in-inclusion-receive-a-better-education',
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
          href: 'https://milaap.org/fundraisers/support-autistic-students-in-inclusion-receive-a-better-education',
        },
      },
      oneTime: {
        title: 'One-Time Donation',
        description:
          'You can also become a spontaneous supporter with a one-time donation in any amount.',
        cta: {
          label: 'Give now',
          href: 'https://milaap.org/fundraisers/support-autistic-students-in-inclusion-receive-a-better-education',
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
        name: 'V Vaidhyanathan',
        role: '',
        description: '',
        image: '/donors/v-vaidhyanathan.webp',
        alt: 'Portrait of donor V Vaidhyanathan',
      },
      {
        name: 'Sudhir Shenoy',
        role: '',
        description: '',
        image: '/donors/sudhir-shenoy.jpg',
        alt: 'Portrait of donor Sudhir Shenoy',
      },
      {
        name: 'HAB Pharmaceuticals',
        role: '',
        description: '',
        image: '/donors/hab-pharmaceuticals.jpg',
        alt: 'Image representing donor HAB Pharmaceuticals',
      },
      {
        name: 'Vinod Sharma',
        role: '',
        description: '',
        image: '/donors/vinod-sharma.jpg',
        alt: 'Portrait of donor Vinod Sharma',
      },
    ],
  },
} as const
