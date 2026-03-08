export const siteMetadata = {
  title: "Brain Bristle | Autism Demystified",
  description: "Autism. Inclusion. Education. Equity. Empowering children on the autism spectrum in India.",
  url: "https://brainbristle.org",
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Model", href: "/our-model" },
  { name: "Impact", href: "/impact" },
  { name: "Films", href: "/films" },
  { name: "News", href: "/news" },
  { name: "Events", href: "/events" },
  { name: "Donate", href: "/donate" },
];

export const contentData = {
  home: {
    hero: {
      tagline: "Autism. Inclusion. Education. Equity.",
      headline: "Autism has been labeled a spectrum by the Diagnostic Statistic Manual.",
      stat: "Today, 1 out of every 100 under 10 year olds is diagnosed on the autism spectrum in India, what are we doing?",
      primaryCta: { label: "Donate", href: "/donate" },
      secondaryCta: { label: "Learn More", href: "/about" },
    },
    whatWeDo: {
      headline: "What do we do?",
      copy: "We believe an excellent, all encompassing education is integral to the future of a child on the autism spectrum. We train social workers in autism, education and inclusion and place & supervise them into low income schools with autistic children in need.",
      pillars: [
        { title: "Education & Inclusion", description: "Direct 1:1 intervention through trained social workers in low-income inclusive schools." },
        { title: "Advocacy & Awareness", description: "Building awareness for public, educators, policy makers & families impacted by autism." },
        { title: "Research & Community", description: "Sharing pertinent research and hosting advocacy panels for all stakeholders." }
      ]
    },
    impactNumbers: [
      { value: 15, suffix: "", label: "Schools of Intervention" },
      { value: 80, suffix: "+", label: "Students on Roster" },
      { value: 600, suffix: "+", label: "Classrooms Impacted" },
      { value: 100, suffix: "+", label: "Educators Reached" },
      { value: 4000, suffix: "+", label: "Community Members" }
    ],
    whyBrainBristle: {
      headline: "Why Brain Bristle?",
      meaning: "'Brain Bristle' means toothbrushing a malleable mind.",
      philosophy1: "Unlike a neurotypical mind, the brain of someone on the autism spectrum is wired and can be stretched differently. We believe we can alter many of their life trajectories to make them fully independent, successful, wholly contributing members of our society by providing them an excellent, balanced ambition, excellent education and consistency.",
      philosophy2: "We approach autism with creativity, kindness and a measured intellect. We press into the idea of a student 'finding ways' and support their passions, learning, curiosities and journeys."
    },
    autismPrevalence: {
      headline: "Autism Prevalence in India",
      stats: [
        { title: "Diagnosed Autism Cases", description: "1 in 68 children estimated prevalence in India. 1 out of every 100 under 10 year olds." },
        { title: "Gender Occurrence", description: "ASD is more than 4 times more common among boys than girls (ratio of approx 3:1)." },
        { title: "Demographic Occurrence", description: "ASD is reported to occur in all racial, ethnic, and socioeconomic groups." },
        { title: "Causes", description: "Many factors make a child more likely to have autism, including environmental and genetic factors. No evidence of a causal association with vaccines." }
      ]
    },
    faq: [
      {
        question: "Where do you operate from?",
        answer: "We primarily operate in low-income inclusive schools across Mumbai, India."
      },
      {
        question: "Why does India need BrainBristle?",
        answer: "With 1 in 100 children under 10 diagnosed on the spectrum, and 70% attending public or affordable private schools, there is a massive gap in specialized support. Brain Bristle bridges this gap by training and placing dedicated social workers directly into these schools."
      },
      {
        question: "What does your outreach entail?",
        answer: "Our outreach includes in-school intervention, parent advocacy and training, community workshops, university lectures, and digital awareness campaigns."
      }
    ],
    newsletters: [
      { title: "Brain Bristle: Parts of a Whole", date: "March 2026" },
      { title: "Autism, From Then to Now", date: "February 2026" },
      { title: "Our Years of Schrondinger's Cat", date: "January 2026" },
      { title: "Toward Abundance", date: "November 2025" },
      { title: "Metres and Measures of Hard Work", date: "October 2025" },
      { title: "Diwali As a Story of Our Homes", date: "October 2025" },
      { title: "The 'I Rise When We Rise', Special", date: "September 2025" },
      { title: "A Day in My Life with Autism", date: "August 2025" }
    ]
  },
  
  about: {
    hero: {
      headline: "About Brain Bristle",
      subheadline: "Brain Bristle means to bristle a tangled mind."
    },
    whatWeDo: {
      headline: "Our Mission",
      copy: "Brain Bristle currently works with minimally supported students on the autism spectrum and with other learning difficulties in identified and select low-income Mumbai schools through DIRECT, 1:1 INTERVENTION to EDUCATE & INCLUDE them into inclusion via trained social workers. Brain Bristle's work is also focused on advocacy building, community work, & awareness campaigns for public, educators, policy makers & families impacted or influenced by autism."
    },
    founder: {
      headline: "Our Founder",
      name: "Devangana Mishra",
      credentials: "Our Founder, Devangana Mishra has a Dual Master's in Autism and Intellectual Disabilities; was awarded the Elise Todden Scholarship, and was a research scholar for adolescents on the spectrum of autism at the Outcomes and Opportunities Department of Teacher's College, Columbia University, New York."
    }
  },

  ourModel: {
    hero: {
      headline: "Social Worker Journey",
      subheadline: "Our 5-phase pipeline for training and deploying specialized social workers."
    },
    phases: [
      {
        title: "1. Recruitment",
        description: "We recruit our Social Work Team Members from our country's top colleges and institutes (St Xavier's College, TISS, Sophia's College, SNDT University, NMIMS, Wadia Hospital, National College, Bandra, B.Ed Colleges) to work for 4 hours daily at a low income Inclusive Mumbai School for 1 academic year. They are paid a stipend of Rs 10,000 + Rs 2,000 for on-ground work and resources."
      },
      {
        title: "2. Placement and On-Going Training",
        description: "We place them in Mumbai's low income inclusive schools and train them via partnerships with other organizations, adjunct faculty, and our in-house team. Our training is rooted in the philosophy of the Teacher's College, Autism Program with principles & tenets of ABA."
      },
      {
        title: "3. On-Ground School Intervention",
        description: "Team members work toward inclusion via curricular and Individualized Educational goals met by in-class push-ins and tailored pull-out sessions. Social Work Team Leads visit schools daily to supervise and tailor toward best practices."
      },
      {
        title: "4. Parent Advocacy",
        description: "We work closely with parents to provide individualized support, caregiver training, guidance for home behaviours, behaviour protocols and support to carry forward school based interventions in a home setting."
      },
      {
        title: "5. Placement",
        description: "We actively engage with high-impact networks globally to place our social work team members in schools, organizations, corp and other NGO's across Mumbai and globally after their year with us."
      }
    ]
  },

  impact: {
    hero: {
      headline: "Foreseeable Impact 25-26",
      subheadline: "Measuring our work across schools, advocacy, and research."
    },
    pillars: [
      {
        title: "School Inclusion Program: Alag Par Ek",
        description: "Across 15 schools of intervention, we will meet the Individualized Educational Plan goals for all students on our roster, equaling 80+ students, in 600+ classrooms, impacting all students in those classrooms and reaching 100+ educators."
      },
      {
        title: "Advocacy and Awareness",
        description: "Our advocacy pans India - it ranges from internships for young people on the autism spectrum at our organisation, university workshops, events across the country, parent and teacher workshops, and collaborations with other non-profits."
      },
      {
        title: "Research",
        description: "Our social media handles are followed by 4000+ people where we share pertinent research from across academia. Our goal in the coming year is to build a research vertical stemming from the work we do on the ground."
      }
    ]
  },

  films: {
    hero: {
      headline: "Autism Awareness Films",
      subheadline: "An effort to shed light on autism in India through documentary and storytelling."
    },
    videos: [
      {
        title: "Embracing Autism",
        description: "This film was made by Saurabh Monga and Arun Wolf and produced with the support of Max Hospitals, the Delhi Government, and Action for Autism, India.",
        videoId: "4MZW94uRdrU" // Placeholder ID from news links
      },
      {
        title: "Making Room in the Classroom",
        description: "Our Social Work Team builds education and inclusion for autism across Mumbai's low income schools. Here's a glimpse into the work our Social Work Team does daily at their designated schools.",
        videoId: "T5o8C1vrhis" // Placeholder ID
      },
      {
        title: "I Rise When We Rise",
        description: "Shot at Puroshottam High School. Meet Maitreya Matale, a 22-year-old singer/composer diagnosed with autism at 1 year 8 months. From training at Shankar Mahadevan Academy to performing with YRF's 6 Pack Band 2.0.",
        videoId: "hFbvrAx8sYk" // Placeholder ID
      },
      {
        title: "Autism in India",
        description: "A lecture by Devangana Mishra, CEO, Brain Bristle, for the Disabilities Justice Class at De Paul University on 'Autism in India'.",
        videoId: "dummy4" // Need actual ID, using placeholder
      }
    ]
  },

  news: {
    hero: {
      headline: "In The News",
      quote: "Some of the world's richest culture, heritage, and art we know is because of those on the spectrum of autism and beyond."
    },
    featuredPress: [
      {
        publication: "Mid-Day",
        title: "Unleashing potential: Devangana Mishra, CEO and Founder Brain Bristle on Autism",
        url: "https://www.mid-day.com/brand-media/article/unleashing-potential-devangana-mishra-ceo-and-founder-brain-bristle-on-autism-23295767"
      },
      {
        publication: "Times of India",
        title: "Why do we see such few disruptions in the space of autism?",
        url: "https://timesofindia.indiatimes.com/blogs/voices/why-do-we-see-such-few-disruptions-in-the-space-of-autism/"
      },
      {
        publication: "Times Now News",
        title: "Children with autism don't need sympathy, keep it simple and natural for them",
        url: "https://www.timesnownews.com/lifestyle/parenting/toddler-beyond/children-with-autism-dont-need-sympathy-keep-it-simple-and-natural-for-them-article-104813028"
      },
      {
        publication: "UNESCO",
        title: "All Education is Special Education",
        url: "https://mgiep.unesco.org/article/all-education-is-special-education"
      },
      {
        publication: "CXO Today",
        title: "Unveiling the simplicity of Artificial Intelligence & Bridging the gap",
        url: "https://www.cxotoday.com/interviews/unveiling-the-simplicity-of-artificial-intelligence-devangana-mishra-ceo-and-founder-brainbristle-explores-bridging-the-gap-between-humans-and-ai/"
      },
      {
        publication: "YourStory",
        title: "Woman spent 14 years of life with autistic children",
        url: "https://yourstory.com/herstory/2022/02/woman-spent-14-years-life-autistic-children-devangana-mishra-brain-bristle/amp"
      }
    ],
    pressReleases: [
      {
        title: "The BrainBristle Foundation",
        date: "January 2024",
        url: "https://www.kron4.com/business/press-releases/ein-presswire/681407393/the-brainbristle-foundation/",
        excerpt: "BrainBristle founded by Devangana Mishra, in October 2021, after 16 years of intervention and education in autism will now officially function as a Foundation."
      },
      {
        title: "Brain Bristle Press Release",
        date: "November 2021",
        url: "https://www.sciencetimesobserver.com/article/597745998-a-letter-from-the-ceo-of-brainbristle-changing-global-autism-narratives-tick-by-tick",
        excerpt: "According to Autism Speaks, marked deficits in verbal and nonverbal social communication skills; social impairments apparent even with support in place..."
      }
    ]
  },

  events: {
    hero: {
      headline: "Events & Conversations",
      subheadline: "Hosting dialogues on neurodiversity, inclusion, and the nuances of the spectrum."
    },
    featured: [
      {
        speaker: "Aalap",
        topic: "Neurodiversity and the Nuances",
        description: "A creative entrepreneur creating culture with purpose. His 18-year career began in entertainment journalism with Hindustan Times, followed by MTV, VH1, and Nickelodeon."
      },
      {
        speaker: "Pete Wharmby",
        topic: "UnTypical",
        description: "Discussing neurodivergence, education, and his experiences as an autistic author and speaker."
      },
      {
        speaker: "Pierre Novellie",
        topic: "A Comedian's Guide to Autism",
        description: "Stand-up comedian, writer, radio host and podcaster who was diagnosed on the autism spectrum last year, discussing his new book."
      },
      {
        speaker: "Mugdha Kalra",
        topic: "Parenting with Mugdha Kalra",
        description: "At the intersection of broadcast journalism and autism activism. As a devoted mother to a 14-year-old autistic boy, she seamlessly intertwines her personal journey with her professional pursuits."
      },
      {
        speaker: "Dr Elizabeth Micci",
        topic: "Educational Strategy",
        description: "Designs and implements new education strategies and structures for public and private schools. Led secondary school redesign at The Harbour School."
      },
      {
        speaker: "Maitreya Matale",
        topic: "A Chat with Maitreya",
        description: "A 21 year old singer on the spectrum. We chat about his autism, schooling, life and love interests."
      }
    ]
  },

  donate: {
    hero: {
      headline: "Make-A-School-Autism-Inclusive",
      subheadline: "Alag Par Ek Campaign"
    },
    context: "Today, in India 1 out of every 100 under 10 year olds is diagnosed on the autism spectrum. More than 70% of them are in our country's inclusive public schools or a part of our 5500+ special schools. Who is supporting these students in our low income schools?",
    goals: [
      "Help us make more low income schools inclusive, academically and socially, for autistic and special needs students.",
      "Help us grow our voice and work globally.",
      "Help us build research for the country."
    ],
    taxInfo: "Your Donation will be eligible for tax exemption under section 80G of the Income Tax Act, 1961.",
    donors: [
      { name: "Mr V. Vaidynathan & Rukmani Social Welfare Trust", role: "Philanthropist & Cheerleader", description: "Thank you for being our chief supporter and believer in the work we do!" },
      { name: "Mr Sudhir Shenoy & Able Together", role: "Philanthropist & Cheerleader", description: "Thank you for being our mentors, supporters, champions and believers!" },
      { name: "Dr and Mrs Gadodia", role: "Donor", description: "Thank you for funding one low income school for an entire year!" },
      { name: "Inner Wheel Imperial Club of Pune", role: "Donor", description: "Thank you to the fabulous ladies for funding a quarter of our work with 1 low income Mumbai school." },
      { name: "Gayatri Dhumatkar Agarwal", role: "Donor", description: "Thank you for helping us make one more low income school inclusive in Mumbai." },
      { name: "The Geli Family", role: "Donor", description: "Thank you for this generous seed fund to build capacity for 1 social worker." }
    ]
  },

  contact: {
    hero: {
      headline: "Get in Touch",
      subheadline: "We'd love to hear from you."
    },
    emails: [
      "hello@brainbristle.org",
      "devangana@brainbristle.org"
    ],
    hours: "Monday - Saturday",
    address: "Mumbai, India"
  }
};
