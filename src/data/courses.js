import { getAssetUrl } from '../utils/assets';

export const coursesData = [
    {
        title: "Artificial Intelligence & Data Analyst",
        category: "it popular",
        price: "₹14,999",
        img: "/images/AI.png",
        desc: "Artificial Intelligence is the development of computer systems that can perform tasks requiring human-like intelligence.",
        link: "/courses/artificialintelligence",
        isTrending2026: true,
        duration: "9-12 Months",
        level: "Advanced",
        studentCount: "13.5k+",
        programDescription: "Become an AI-powered data analyst with our comprehensive program in Hyderabad. Learn to combine traditional analytics with artificial intelligence to automate insights and predictions. Our industry-focused training equips you with both analytical thinking and AI implementation skills.",
        modules: [
            { title: 'Python Programming', tag: '#Backend', content: 'Master Python syntax, data structures, and libraries essential for AI and Data Science.' },
            { title: 'SQL & Database', tag: '#Database', content: 'Master SQL queries to extract and manage data from relational databases.' },
            { title: 'Machine Learning Fundamentals', tag: '#AI', content: 'Understand supervised and unsupervised learning algorithms like Regression, Clustering, and Decision Trees.' },
            { title: 'Power BI & Tableau', tag: '#Visualization', content: 'Create interactive dashboards and business intelligence reports.' },
            { title: 'Statistical Analysis', tag: '#Analytics', content: 'Descriptive and Inferential Statistics, Probability distributions.' },
            { title: 'AI-powered Automation', tag: '#AI', content: 'Build neural networks and deep learning models using TensorFlow and Keras.' },
            { title: 'Business Intelligence Tools', tag: '#BI', content: 'Learn to process and analyze data for actionable insights.' },
            { title: 'Capstone Project', tag: '#Project', content: 'Apply all your skills to solve a real-world business problem in a comprehensive project.' }
        ],
        tools: [
            { name: 'Python', img: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png' },
            { name: 'TensorFlow', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png' },
            { name: 'Pandas', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/1200px-Pandas_logo.svg.png' },
            { name: 'NumPy', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/NumPy_logo_2020.svg/1200px-NumPy_logo_2020.svg.png' },
            { name: 'Scikit-Learn', img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
            { name: 'Keras', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/1200px-Keras_logo.svg.png' },
            { name: 'PyTorch', img: 'https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg' },
            { name: 'Tableau', img: 'https://cdn.simpleicons.org/tableau' },
            { name: 'Power BI', img: 'https://cdn.simpleicons.org/powerbi' },
            { name: 'SQL', img: 'https://cdn.iconscout.com/icon/free/png-256/sql-4-190807.png' },
            { name: 'Excel', img: 'https://cdn.iconscout.com/icon/free/png-256/microsoft-excel-4-1175163.png' },
            { name: 'Jupyter', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1200px-Jupyter_logo.svg.png' }
        ],
        reviews: [
            { name: "Arun Kumar", role: "Data Analyst", review: "The AI & Data Science course specific curriculum helped me switch from a non-tech role.", img: "https://ui-avatars.com/api/?name=Arun+Kumar&background=0D8ABC&color=fff&size=128" },
            { name: "Sneha Reddy", role: "ML Engineer", review: "Hands-on projects in Machine Learning were incredibly useful for my interviews.", img: "https://ui-avatars.com/api/?name=Sneha+Reddy&background=E91E8C&color=fff&size=128" }
        ],
        faqs: [
            { question: "What are the career opportunities after completing this course?", answer: "Graduates can apply for roles like AI Engineer, Data Scientist, ML Engineer, and Business Intelligence Analyst across various industries." },
            { question: "Is this course suitable for non-technical backgrounds?", answer: "Yes, we start with Python and SQL basics, making it ideal for anyone looking to transition into the AI field." },
            { question: "Will I get hands-on experience?", answer: "Absolutely. The course includes multiple real-world projects and a final Capstone project to build your portfolio." },
            { question: "What will I learn in this course?", answer: "You will master the end-to-end lifecycle of Artificial Intelligence and Data Analytics, from core Python programming and machine learning to building neural networks and AI-powered automation solutions." },
            { question: "Which technologies will I learn?", answer: "You will gain hands-on expertise in Python, TensorFlow, Scikit-Learn, SQL, Power BI, and Tableau, along with advanced AI frameworks like Keras and PyTorch." },
            { question: "How long is the course?", answer: "The program duration is 9-12 months, featuring a comprehensive curriculum with flexible weekend and weekday slots." },
            { question: "Will I receive a certificate after completion?", answer: "Yes, you will earn a professional certification from Gyantrix Academy that validates your skills in AI and Data Analytics." },
            { question: "Is the certificate recognized?", answer: "Absolutely. Our certification is industry-recognized and highly valued by our 999+ hiring partners for all career transitions." },
            { question: "Do you provide placement assistance?", answer: "Yes, we provide 100% placement assistance, including dedicated resume building, LinkedIn optimization, and mock interview sessions with industry experts." },
            { question: "What job roles can I get after this course?", answer: "Graduates qualify for high-impact roles such as Data Scientist, AI Engineer, Machine Learning Specialist, and Business Intelligence Analyst." },
            { question: "Who can join this course?", answer: "This course is designed for graduates, final-year students, and working professionals from both technical and non-technical backgrounds looking to thrive in the AI era." },
            { question: "Do I need prior experience?", answer: "No prior experience is required. we start from the absolute basics of programming and data logic before advancing to expert-level AI concepts." }
        ]
    },
    {
        title: "Full Stack Development",
        category: "it popular",
        price: "₹14,999",
        img: "/images/fullstackdev.png",
        desc: "Master both front-end and back-end skills to build complete, scalable web applications from scratch.",
        link: "/courses/fullstack",
        isTrending2026: true,
        duration: "8 Months",
        level: "Intermediate",
        studentCount: "18.2k+",
        modules: [
            { title: 'Web Design (HTML/CSS)', tag: '#Frontend', content: 'Learn HTML5, CSS3, and JavaScript to build responsive and visually appealing websites.' },
            { title: 'React Mastery', tag: '#Frontend', content: 'Master ReactJS for building dynamic single-page applications with component-based design.' },
            { title: 'Backend with Node.js', tag: '#Backend', content: 'Learn Node.js and Express to build fast, scalable, and server-side applications.' },
            { title: 'Python for Backend', tag: '#Backend', content: 'Learn Python fundamentals, data structures, and OOP concepts for robust server logic.' },
            { title: 'Django Framework', tag: '#Backend', content: 'Build scalable web applications with Django and REST API integration.' },
            { title: 'Automation Testing', tag: '#Testing', content: 'Learn Selenium and automation testing tools to ensure quality assurance.' },
            { title: 'NoSQL with MongoDB', tag: '#Database', content: 'Explore NoSQL databases and document-based schema using MongoDB.' },
            { title: 'Angular Framework', tag: '#Frontend', content: 'Learn Angular framework and TypeScript for enterprise-level applications.' },
            { title: 'Cloud & DevOps', tag: '#Cloud', content: 'Understand AWS fundamentals and DevOps practices including CI/CD pipelines.' },
            { title: 'Java Backend', tag: '#Backend', content: 'Learn Java basics and OOP principles to strengthen enterprise backend skills.' }
        ],
        tools: [
            { name: 'HTML5', img: 'https://cdn.iconscout.com/icon/free/png-256/html5-40-1175193.png' },
            { name: 'CSS3', img: 'https://cdn.iconscout.com/icon/free/png-256/css3-11-1175239.png' },
            { name: 'JavaScript', img: 'https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png' },
            { name: 'React', img: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
            { name: 'Node.js', img: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png' },
            { name: 'MongoDB', img: 'https://cdn.iconscout.com/icon/free/png-256/mongodb-4-1175139.png' },
            { name: 'Docker', img: 'https://cdn-icons-png.flaticon.com/512/919/919853.png' },
            { name: 'AWS', img: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' }
        ],
        reviews: [
            { name: 'Swati Nair', role: 'Full Stack Developer', review: 'Gyantrix Academy completely changed my career path. The mentors are industry experts who guide you at every step.', img: 'https://ui-avatars.com/api/?name=Swati+Nair&background=9C27B0&color=fff&size=128' },
            { name: 'Karthik Goud', role: 'MERN Developer', review: 'The practical approach with real projects helped me build confidence and land a high-paying job.', img: 'https://ui-avatars.com/api/?name=Karthik+Goud&background=FF5722&color=fff&size=128' }
        ],
        faqs: [
            { question: "What will I learn in this course?", answer: "You will master both frontend and backend development, including HTML/CSS, React, Node.js, and database management, to build complete and scalable web applications." },
            { question: "Which technologies will I learn?", answer: "The stack includes React, Node.js, Python/Django, Java, MongoDB, SQL, AWS, and Docker for a comprehensive full-stack experience." },
            { question: "How long is the course?", answer: "The intensive Full Stack Development program is 8 months long, designed for deep skill acquisition." },
            { question: "Will I receive a certificate after completion?", answer: "Yes, you will receive a Professional Full Stack Developer certification from Gyantrix Academy." },
            { question: "Is the certificate recognized?", answer: "Yes, our certification is recognized by global MNCs and reflects the practical project work you complete during the program." },
            { question: "Do you provide placement assistance?", answer: "Yes, we provide 100% placement assistance, including mock interviews, portfolio reviews, and connections to our network of 999+ hiring partners." },
            { question: "What job roles can I get after this course?", answer: "Roles include Full Stack Developer, MERN Stack Developer, Frontend Lead, Backend Engineer, and Web Architect." },
            { question: "Who can join this course?", answer: "Anyone with an interest in coding—including freshers, career switchers, and professionals wanting to upgrade their technical skills." },
            { question: "Do I need prior experience?", answer: "No, we start from the fundamentals of web design and coding before moving to advanced server-side architecture." }
        ]
    },
    {
        title: "Data Science & Analytics With AI",
        category: "it",
        price: "₹14,999",
        img: "/images/datascience.png",
        desc: "Transform data into intelligence and insights through the power of Artificial Intelligence and Analytics.",
        link: "/courses/ds-analytics-ai",
        isTrending2026: true,
        duration: "10 Months",
        level: "Expert",
        studentCount: "9.8k+",
        modules: [
            { title: 'Intro to Data Science', tag: '#DataScience', content: 'Understanding the data science lifecycle and the role of a data scientist.' },
            { title: 'Advanced Python Programming', tag: '#Python', content: 'Master advanced Python libraries for data manipulation and analysis.' },
            { title: 'Exploratory Data Analysis (EDA)', tag: '#EDA', content: 'Techniques to clean and visualize data to find patterns and trends.' },
            { title: 'Machine Learning Algorithms', tag: '#ML', content: 'Detailed study of Regression, Classification, and Clustering algorithms.' },
            { title: 'Deep Learning & Neural Networks', tag: '#DL', content: 'Build neural networks for computer vision and NLP using Keras and PyTorch.' },
            { title: 'Big Data with Hadoop & Spark', tag: '#BigData', content: 'Handling massive datasets using distributed computing tools.' },
            { title: 'Natural Language Processing (NLP)', tag: '#AI', content: 'Text mining and sentiment analysis for unstructured data.' },
            { title: 'Generative AI & LLMs', tag: '#AI', content: 'Exploring the world of Transformers, BERT, and GPT models.' },
            { title: 'Deployment with Flask & Docker', tag: '#DevOps', content: 'Deploying your machine learning models into production.' },
            { title: 'Advanced Visualization (Tableau/Power BI)', tag: '#Visualization', content: 'Creating professional dashboards for business communication.' }
        ],
        tools: [
            { name: 'Python', img: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png' },
            { name: 'TensorFlow', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png' },
            { name: 'PyTorch', img: 'https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg' },
            { name: 'Hadoop', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Hadoop_logo.svg/1200px-Hadoop_logo.svg.png' },
            { name: 'Spark', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Apache_Spark_logo.svg/1200px-Apache_Spark_logo.svg.png' }
        ],
        reviews: [
            { name: "Ananya Gupta", role: "Data Scientist", review: "The program at Gyantrix helped me gain job-ready skills and land my first internship in less than three months.", img: "https://ui-avatars.com/api/?name=Ananya+Gupta&background=4CAF50&color=fff&size=128" }
        ],
        faqs: [
            { question: "What will I learn in this course?", answer: "You will learn the entire data science pipeline including data cleaning, EDA, Machine Learning, Deep Learning, Big Data processing, and Generative AI." },
            { question: "Which technologies will I learn?", answer: "The course covers Python, TensorFlow, PyTorch, Hadoop, Spark, and advanced visualization tools like Tableau." },
            { question: "How long is the course?", answer: "This is an expert-level program spanning 10 months to ensure mastery of all advanced concepts." },
            { question: "Will I receive a certificate after completion?", answer: "Yes, you will receive an Expert Certification in Data Science & AI from Gyantrix Academy." },
            { question: "Is the certificate recognized?", answer: "Yes, it is highly recognized in the tech industry and serves as evidence of your capability to handle complex data challenges." },
            { question: "Do you provide placement assistance?", answer: "Yes, we provide 100% placement assistance, including mock interviews and direct referrals to top tech firms." },
            { question: "What job roles can I get after this course?", answer: "Target roles include Data Scientist, Machine Learning Engineer, Big Data Architect, and Research Scientist." },
            { question: "Who can join this course?", answer: "It's ideal for graduates and IT professionals who want to transition into high-paying data science and AI research roles." },
            { question: "Do I need prior experience?", answer: "While we start from core Python, a basic understanding of mathematics and logic is beneficial for this expert track." }
        ]
    },
    {
        title: "Business Analyst",
        category: "non-it-marketing",
        price: "₹14,999",
        img: "/images/businessanalyst1.jpg",
        desc: "A Business Analyst identifies business needs and recommends effective solutions.",
        link: "/courses/businessanalyst",
        isTrending2026: true,
        duration: "6 Months",
        level: "Beginner",
        studentCount: "7.4k+",
        modules: [
            { title: 'Business Analysis Fundamentals', tag: '#BA', content: 'Understanding the role, responsibilities, and key terminology of a BA.' },
            { title: 'Requirements Elicitation & Management', tag: '#Requirements', content: 'Techniques for gathering and documenting business requirements.' },
            { title: 'Software Development Life Cycle (SDLC)', tag: '#SDLC', content: 'Introduction to Waterfall, Agile, and Scrum methodologies.' },
            { title: 'Data Analysis for Business', tag: '#DataAnalysis', content: 'Using data to drive business decisions and strategy.' },
            { title: 'Process Modeling & BPMN', tag: '#BPMN', content: 'Mapping business processes using standard notation.' },
            { title: 'UML Diagrams', tag: '#Design', content: 'Creating Use Case, Sequence, and Activity diagrams for technical teams.' },
            { title: 'Agile & Scrum Framework', tag: '#Agile', content: 'Deep dive into user stories, product backlogs, and sprint planning.' },
            { title: 'Jira for Project Management', tag: '#Tools', content: 'Mastering Jira for tracking issues and managing projects.' },
            { title: 'SQL for Business Analytics', tag: '#Database', content: 'Basics of SQL for querying and reporting.' },
            { title: 'Stakeholder Management', tag: '#SoftSkills', content: 'Effective communication and negotiation with project stakeholders.' }
        ],
        tools: [
            { name: 'Excel', img: 'https://cdn.iconscout.com/icon/free/png-256/microsoft-excel-4-1175163.png' },
            { name: 'Jira', img: 'https://cdn.iconscout.com/icon/free/png-256/jira-1-1175159.png' },
            { name: 'SQL', img: 'https://cdn.iconscout.com/icon/free/png-256/sql-4-190807.png' },
            { name: 'Visio', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Microsoft_Visio_logo_%282019-present%29.svg/1200px-Microsoft_Visio_logo_%282019-present%29.svg.png' }
        ],
        reviews: [
            { name: "Ritu Singh", role: "Business Analyst", review: "The Agile and Scrum modules were incredibly practical. I learned how to manage stakeholders effectively.", img: "https://ui-avatars.com/api/?name=Ritu+Singh&background=F44336&color=fff&size=128" }
        ],
        faqs: [
            { question: "What will I learn in this course?", answer: "You will learn how to bridge the gap between business needs and technical solutions, master requirements gathering, and understand SDLC/Agile frameworks." },
            { question: "Which technologies will I learn?", answer: "You will master Jira, SQL, Excel, and Visio for process mapping and requirement management." },
            { question: "How long is the course?", answer: "The Business Analyst certification is a 6-month specialized program." },
            { question: "Will I receive a certificate after completion?", answer: "Yes, you will receive a Professional Business Analyst certification from Gyantrix Academy." },
            { question: "Is the certificate recognized?", answer: "Yes, our certification is industry-standard and recognized by top firms across IT, E-commerce, and Finance sectors." },
            { question: "Do you provide placement assistance?", answer: "Yes, we provide 100% placement assistance, including behavioral interview prep and resume reviews." },
            { question: "What job roles can I get after this course?", answer: "Target roles include Junior Business Analyst, Technical BA, Analyst Consultant, and Product Owner." },
            { question: "Who can join this course?", answer: "Ideal for fresh graduates (BS/MS), MBAs, and professionals wanting to move into strategic management roles." },
            { question: "Do I need prior experience?", answer: "No, we start from the absolute basics of business processes and documentation before moving to advanced analytical tools." }
        ]
    },
    {
        title: "Data Analyst",
        category: "it",
        price: "₹14,999",
        img: "/images/dataanalyst.png",
        desc: "A Data Analyst interprets and transforms data into actionable insights for decision-making.",
        link: "/courses/dataanalyst",
        duration: "6 Months",
        level: "Beginner",
        studentCount: "11.2k+",
        modules: [
            { title: 'Excel Mastery for Data Analysis', tag: '#Excel', content: 'Advanced functions, pivot tables, and data modeling in Excel.' },
            { title: 'SQL Fundamentals', tag: '#SQL', content: 'Basics of relational databases and querying data using SQL.' },
            { title: 'Data Cleaning & Prep with Python', tag: '#Python', content: 'Using Pandas and NumPy to clean and organize raw data.' },
            { title: 'Exploratory Data Analysis', tag: '#Analytics', content: 'Finding trends and anomalies in data using statistical methods.' },
            { title: 'Storytelling with Visualization', tag: '#DataViz', content: 'Creating compelling narratives using data visualization tools.' },
            { title: 'Power BI Fundamentals', tag: '#PowerBI', content: 'Building interactive reports and dashboards for business users.' },
            { title: 'Tableau for Professionals', tag: '#Tableau', content: 'Mastering Tableau for complex data visualization and sharing.' },
            { title: 'Statistics for Data Analytics', tag: '#Statistics', content: 'Essential statistical concepts like mean, median, correlation, and hypothesis testing.' },
            { title: 'Business Intelligence Strategy', tag: '#BI', content: 'How to turn data insights into business growth strategies.' },
            { title: 'Project: Retail Sales Analysis', tag: '#Project', content: 'Apply all tools to analyze and report on a real retail dataset.' }
        ],
        tools: [
            { name: 'Excel', img: 'https://cdn.iconscout.com/icon/free/png-256/microsoft-excel-4-1175163.png' },
            { name: 'SQL', img: 'https://cdn.iconscout.com/icon/free/png-256/sql-4-190807.png' },
            { name: 'Power BI', img: 'https://cdn.simpleicons.org/powerbi' },
            { name: 'Tableau', img: 'https://cdn.simpleicons.org/tableau' },
            { name: 'Python', img: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png' }
        ],
        reviews: [
            { name: "Suresh Raina", role: "Junior Data Analyst", review: "The visualization modules in Power BI and Tableau were excellent. I can now create dashboards that wow my team.", img: "https://ui-avatars.com/api/?name=Suresh+Raina&background=2196F3&color=fff&size=128" }
        ],
        faqs: [
            { question: "What will I learn in this course?", answer: "You will learn how to turn raw data into meaningful insights using advanced Excel, SQL, and professional visualization tools." },
            { question: "Which technologies will I learn?", answer: "The tools include Excel, SQL, Power BI, Tableau, and foundational Python for data cleaning." },
            { question: "How long is the course?", answer: "The Data Analyst program is 6 months long, focusing on practical implementation." },
            { question: "Will I receive a certificate after completion?", answer: "Yes, you will earn a Professional Data Analyst certification from Gyantrix Academy." },
            { question: "Is the certificate recognized?", answer: "Yes, our certified graduates work at leading firms in IT, banking, and retail industries." },
            { question: "Do you provide placement assistance?", answer: "Yes, we provide 100% placement assistance, including LinkedIn optimization and mock data-science interviews." },
            { question: "What job roles can I get after this course?", answer: "Graduates can apply for roles like Junior Data Analyst, BI Analyst, and Reporting Specialist." },
            { question: "Who can join this course?", answer: "Fresh graduates and professionals looking to transition from non-analytical to analytical roles." },
            { question: "Do I need prior experience?", answer: "No, we start from basic Excel and SQL and build up to professional storytelling with data." }
        ]
    },
    {
        title: "Medical Coding",
        category: "pharma popular",
        price: "₹14,999",
        img: "/images/medicalcoding.jpg",
        desc: "Medical Coding is the process of translating healthcare diagnoses, procedures, and treatments into standardized codes for records and billing.",
        link: "/courses/medicalCoding",
        isTrending2026: true,
        duration: "4-6 Months",
        level: "Beginner",
        studentCount: "15.9k+",
        programDescription: "Launch your healthcare career with our comprehensive Medical Coding program. Gain the specialized skills needed to accurately translate medical procedures and diagnoses into universal codes, ensuring proper billing and maintaining patient record integrity.",
        modules: [
            { title: 'Medical Terminology and Anatomy', tag: '#Basic', content: 'Master medical terms and human anatomy essentials for accurate coding.' },
            { title: 'ICD-10-CM Training', tag: '#ICD10', content: 'Deep dive into diagnosis coding with the latest ICD-10-CM standards.' },
            { title: 'CPT Coding Guidelines', tag: '#CPT', content: 'Learn procedure coding for outpatient services using CPT manuals.' },
            { title: 'HCPCS Level II Coding', tag: '#HCPCS', content: 'Coding for medical supplies, equipment, and non-physician services.' },
            { title: 'Medical Billing Fundamentals', tag: '#Billing', content: 'Understanding the relationship between coding and the revenue cycle.' },
            { title: 'HIPAA and Compliance', tag: '#Regulations', content: 'Essential training on healthcare privacy laws and ethics.' },
            { title: 'CPC Exam Preparation', tag: '#ExamPrep', content: 'Mock tests and strategies to clear the CPC certification by AAPC.' },
            { title: 'Inpatient Coding (ICD-10-PCS)', tag: '#PCS', content: 'Introduction to procedural coding for inpatient settings.' },
            { title: 'Chart Auditing and Quality Control', tag: '#Audit', content: 'Learn how to review medical records for coding accuracy.' },
            { title: 'Software Training (Encoder)', tag: '#Tools', content: 'Hands-on practice with coding software used by industry professionals.' }
        ],
        tools: [
            { name: 'ICD-10', img: 'https://cdn-icons-png.flaticon.com/512/2966/2966334.png' },
            { name: 'CPT', img: 'https://cdn-icons-png.flaticon.com/512/2966/2966448.png' },
            { name: 'AAPC', img: 'https://cdn-icons-png.flaticon.com/512/2966/2966436.png' }
        ],
        reviews: [
            { name: "Neha Gupta", role: "Medical Coder", review: "The certification exam preparation was extremely helpful. I cleared my CPC on the first attempt.", img: "https://ui-avatars.com/api/?name=Neha+Gupta&background=00BCD4&color=fff&size=128" }
        ],
        faqs: [
            { question: "What will I learn in this course?", answer: "You will learn how to translate healthcare diagnoses and procedures into universal medical codes using ICD-10, CPT, and HCPCS standards." },
            { question: "Which technologies will I learn?", answer: "You will learn to use professional Medical Coding software (Encoders) and master standard classification systems." },
            { question: "How long is the course?", answer: "The program is 4-6 months long, focusing on preparing you for the CPC certification." },
            { question: "Will I receive a certificate after completion?", answer: "Yes, you will receive a Professional Medical Coder certificate from Gyantrix Academy." },
            { question: "Is the certificate recognized?", answer: "Yes, our training aligns with AAPC standards, making it highly recognized across the global healthcare sector." },
            { question: "Do you provide placement assistance?", answer: "Yes, we provide 100% placement assistance, including mock CPC exams and resume building for RCM companies." },
            { question: "What job roles can I get after this course?", answer: "Graduates qualify for roles such as Junior Medical Coder, Quality Auditor, and Billing Specialist." },
            { question: "Who can join this course?", answer: "Ideal for freshers from life sciences, pharmacy, or any graduate looking for an entry into the healthcare industry." },
            { question: "Do I need prior experience?", answer: "No, we teach all necessary medical terminology and anatomy from the very beginning." }
        ]
    },
    {
        title: "Medical Scribing",
        category: "pharma",
        price: "₹14,999",
        img: "/images/medicalscribing.jpg",
        desc: "Medical Scribing involves documenting patient encounters and clinical information on behalf of healthcare providers in real-time.",
        link: "/courses/medicalscribing",
        modules: [
            { title: 'Role of a Medical Scribe', tag: '#Intro', content: 'Understanding the importance of scribes in the modern healthcare ecosystem.' },
            { title: 'Medical Terminology & Abbreviations', tag: '#Medical', content: 'Learning the language of medicine used during physician-patient encounters.' },
            { title: 'Electronic Health Records (EHR) Navigation', tag: '#Tech', content: 'Hands-on training in documenting patient data within top EHR systems like Epic and Cerner.' },
            { title: 'Patient History and Physical Exams', tag: '#Clinic', content: 'How to accurately scribe various components of a medical visit.' },
            { title: 'Clinical Decision Making Documentation', tag: '#Advanced', content: 'Recording the physician\'s thought process and assessment plan.' },
            { title: 'HIPAA and Medical Ethics', tag: '#Legal', content: 'Ensuring patient confidentiality and adhering to legal documentation standards.' },
            { title: 'Pharmacology for Scribes', tag: '#Pharma', content: 'Commonly prescribed medications and their usages.' },
            { title: 'Simulation and Real-time Practice', tag: '#Practice', content: 'Live scribing practice using recorded doctor-patient interactions.' },
            { title: 'Workflow Management', tag: '#SoftSkills', content: 'Managing the clinic flow and assisting physicians with administrative tasks.' },
            { title: 'Career Path for Scribes', tag: '#Career', content: 'Transitioning to medical school, PA school, or senior scribe roles.' }
        ],
        tools: [
            { name: 'Epic EHR', img: 'https://cdn-icons-png.flaticon.com/512/2966/2966486.png' },
            { name: 'Cerner', img: 'https://cdn-icons-png.flaticon.com/512/2966/2966504.png' }
        ],
        reviews: [
            { name: "Siddharth Verma", role: "Medical Scribe", review: "The EHR training was fantastic. I felt completely prepared when I started my first day at the clinic.", img: "https://ui-avatars.com/api/?name=Siddharth+Verma&background=607D8B&color=fff&size=128" }
        ],
        faqs: [
            { question: "What will I learn in this course?", answer: "You will learn how to document clinical patient visits in real-time, master medical terminology, and manage EHR workflows." },
            { question: "Which technologies will I learn?", answer: "You will get hands-on experience with leading EHR systems like Epic and Cerner." },
            { question: "How long is the course?", answer: "The Medical Scribing training is typically a 4-6 month specialized program." },
            { question: "Will I receive a certificate after completion?", answer: "Yes, you will receive a Professional Medical Scribe certification from Gyantrix Academy." },
            { question: "Is the certificate recognized?", answer: "Yes, our graduates are working at top healthcare institutions and hospitals locally and abroad." },
            { question: "Do you provide placement assistance?", answer: "Yes, we provide 100% placement assistance, focused on hospital and clinic roles." },
            { question: "What job roles can I get after this course?", answer: "Primary roles include Medical Scribe, Clinical Documentation Specialist, and EHR Administrator." },
            { question: "Who can join this course?", answer: "Graduates and individuals aiming for a clinical-adjacent career path in healthcare." },
            { question: "Do I need prior experience?", answer: "No, the course covers all medical terminology and documentation standards from scratch." }
        ]
    },
    {
        title: "Genetic Engineering",
        category: "agriculture popular",
        price: "₹14,999",
        img: "/images/geneticeng.jpg",
        desc: "Genetic Engineering is the science of altering an organism’s genes to achieve specific traits or outcomes.",
        link: "/courses/geneticeng",
        modules: [
            { title: 'Molecular Biology Fundamentals', tag: '#Genetics', content: 'Detailed study of DNA, RNA, and protein synthesis.' },
            { title: 'Recombinant DNA Technology', tag: '#Advanced', content: 'Core techniques for cloning and manipulating genetic material.' },
            { title: 'Gene Expression and Regulation', tag: '#Molecular', content: 'Understanding how genes are turned on and off in different organisms.' },
            { title: 'CRISPR/Cas9 and Gene Editing', tag: '#CuttingEdge', content: 'Mastering the revolutionary gene editing tool that is transforming biology.' },
            { title: 'Genomics and Proteomics', tag: '#Omics', content: 'Large-scale analysis of genomes and proteomes using computational tools.' },
            { title: 'Bioethics and Regulations', tag: '#Ethics', content: 'Navigating the legal and ethical considerations of genetic modification.' },
            { title: 'Genetic Modification in Agriculture', tag: '#Agri', content: 'Developing drought-resistant and high-yield crop varieties.' },
            { title: 'Gene Therapy and Clinical Apps', tag: '#Healthcare', content: 'Applications of genetics in treating hereditary diseases and cancers.' },
            { title: 'Bioinformatics for Geneticists', tag: '#Tech', content: 'Using software tools to analyze DNA sequences and protein structures.' },
            { title: 'Laboratory Safety and Techniques', tag: '#Practical', content: 'Standard operating procedures for working in a high-tech genetics lab.' }
        ],
        tools: [
            { name: 'CRISPR', img: 'https://cdn-icons-png.flaticon.com/512/3208/3208726.png' },
            { name: 'PCR Machine', img: 'https://cdn-icons-png.flaticon.com/512/2966/2966378.png' },
            { name: 'Bioinformatics Tools', img: 'https://cdn-icons-png.flaticon.com/512/2966/2966367.png' }
        ],
        reviews: [
            { name: "Simran Kaur", role: "Geneticist", review: "The CRISPR and gene editing modules were world-class. Excellent research support provided here.", img: "https://ui-avatars.com/api/?name=Simran+Kaur&background=8BC34A&color=fff&size=128" }
        ],
        faqs: [
            { question: "What will I learn in this course?", answer: "You will master molecular biology, CRISPR technology, gene cloning, and genomic analysis for therapeutic and agricultural uses." },
            { question: "Which technologies will I learn?", answer: "The course covers CRISPR/Cas9 techniques, PCR operation, and various bioinformatics software tools." },
            { question: "How long is the course?", answer: "The Genetic Engineering program is an advanced 8-month course." },
            { question: "Will I receive a certificate after completion?", answer: "Yes, you will earn a Professional Certification in Genetic Engineering from Gyantrix Academy." },
            { question: "Is the certificate recognized?", answer: "Absolutely. Our certification is recognized in biotech and pharmaceutical research sectors." },
            { question: "Do you provide placement assistance?", answer: "Yes, we provide 100% placement assistance, including connections to research labs and pharma firms." },
            { question: "What job roles can I get after this course?", answer: "Roles include Research Associate, Geneticist, Lab Specialist, and Biotech Consultant." },
            { question: "Who can join this course?", answer: "Ideally suited for graduates in life sciences, biotechnology, or pharmacy." },
            { question: "Do I need prior experience?", answer: "A basic foundation in biology and chemistry is required for this advanced-level program." }
        ]
    },
    {
        title: "Pharmacovigilance",
        category: "pharma",
        price: "₹14,999",
        img: "/images/pharmaco-vigilance.jpg",
        desc: "Pharmacovigilance is the science of monitoring drug safety and ensuring the legal compliance of medicines.",
        link: "/courses/pharmacovigilance",
        modules: [
            { title: 'Introduction to PV & Drug Safety', tag: '#Basic', content: 'Understanding the importance of drug safety surveillance in the pharma industry.' },
            { title: 'Adverse Drug Reactions (ADR) Monitoring', tag: '#ADR', content: 'Techniques for identifying and reporting unexpected side effects.' },
            { title: 'Serious Adverse Events (SAE) Management', tag: '#Safety', content: 'Procedures for handling and reporting clinical trial emergencies.' },
            { title: 'Global Regulatory Guidelines (ICH-GCP)', tag: '#Compliance', content: 'Detailed study of international standards for drug safety and clinical trials.' },
            { title: 'MedDRA Coding for Drug Safety', tag: '#Coding', content: 'Standardizing medical terms for regulatory reporting using MedDRA.' },
            { title: 'Signal Detection and Risk Management', tag: '#Advanced', content: 'Identifying patterns in safety data and developing risk mitigation plans.' },
            { title: 'Periodic Safety Update Reports (PSUR)', tag: '#Reporting', content: 'Developing comprehensive safety reports for regulatory agencies.' },
            { title: 'Pharmacovigilance Software (Argus)', tag: '#Tools', content: 'Hands-on training in industry-standard PV databases.' },
            { title: 'Clinical Trial Pharmacovigilance', tag: '#Research', content: 'Specialized safety monitoring for drugs currently in testing phases.' },
            { title: 'PV Inspections and Audits', tag: '#Quality', content: 'Preparing for and managing regulatory inspections.' }
        ],
        tools: [
            { name: 'Argus Safety', img: 'https://cdn-icons-png.flaticon.com/512/906/906324.png' },
            { name: 'MedDRA', img: 'https://cdn-icons-png.flaticon.com/512/2966/2966468.png' }
        ],
        reviews: [
            { name: "Sandeep Rao", role: "PV Specialist", review: "The deep dive into MedDRA coding and Argus Safety was exactly what I needed for my promotion.", img: "https://ui-avatars.com/api/?name=Sandeep+Rao&background=FF9800&color=fff&size=128" }
        ],
        faqs: [
            { question: "What will I learn in this course?", answer: "You will learn the science of monitoring drug safety, including ADR reporting, global regulatory compliance, and periodic safety updates." },
            { question: "Which technologies will I learn?", answer: "You will gain hands-on training with industry-standard Pharmacovigilance software like Argus Safety and MedDRA coding." },
            { question: "How long is the course?", answer: "The Pharmacovigilance certification program is 6 months long." },
            { question: "Will I receive a certificate after completion?", answer: "Yes, you will receive a Professional Certification in Pharmacovigilance from Gyantrix Academy." },
            { question: "Is the certificate recognized?", answer: "Yes, our training is aligned with ICH-GCP guidelines, making it highly recognized by MNC pharmaceutical firms." },
            { question: "Do you provide placement assistance?", answer: "Yes, we provide 100% placement assistance, including mock interviews and resume building for global pharma firms." },
            { question: "What job roles can I get after this course?", answer: "Roles include Drug Safety Associate, PV Officer, and Regulatory Compliance Specialist." },
            { question: "Who can join this course?", answer: "Graduates in pharmacy, life sciences, nursing, or medicine." },
            { question: "Do I need prior experience?", answer: "No, the course is designed to take you from a baseline concept to being job-ready for the pharmaceutical industry." }
        ]
    },
    {
        title: "Digital Marketing",
        category: "non-it-marketing popular",
        price: "₹14,999",
        img: "/images/digitalmarketing1.png",
        desc: "Empower brands to reach, engage, and grow through data-driven digital marketing strategies.",
        link: "/courses/digitalmarketing",
        isTrending2026: true,
        modules: [
            { title: 'Search Engine Optimization (SEO)', tag: '#SEO', content: 'Master on-page, off-page, and technical SEO strategies to improve website rankings.' },
            { title: 'Search Engine Marketing (Google Ads)', tag: '#SEM', content: 'Build and optimize high-converting PPC campaigns and display ads.' },
            { title: 'Social Media Marketing (SMM)', tag: '#Social', content: 'Strategies for growing brands on Instagram, Facebook, LinkedIn, and Twitter.' },
            { title: 'Content Marketing & Strategy', tag: '#Content', content: 'Developing compelling content that drives engagement and sales.' },
            { title: 'Email Marketing Automation', tag: '#Email', content: 'Using tools like Mailchimp to build subscriber lists and automate email sequences.' },
            { title: 'Google Analytics & Reporting', tag: '#Analytics', content: 'Tracking website traffic and measuring campaign ROI with precision.' },
            { title: 'Affiliate & Influencer Marketing', tag: '#Growth', content: 'Leveraging partnerships to expand brand reach and credibility.' },
            { title: 'Mobile & App Marketing', tag: '#Mobile', content: 'Strategies for app store optimization (ASO) and mobile-first campaigns.' },
            { title: 'Video Marketing on YouTube', tag: '#Video', content: 'Creating and optimizing video content for the world\'s largest video platform.' },
            { title: 'Digital Marketing Capstone', tag: '#Project', content: 'Build a complete 360-degree digital marketing plan for a real business.' }
        ],
        tools: [
            { name: 'Google Ads', img: 'https://cdn.iconscout.com/icon/free/png-256/google-ads-2038788-1721678.png' },
            { name: 'Analytics', img: 'https://cdn.iconscout.com/icon/free/png-256/google-analytics-2038788-1721678.png' },
            { name: 'Mailchimp', img: 'https://cdn.iconscout.com/icon/free/png-256/mailchimp-3-1175151.png' },
            { name: 'Semrush', img: 'https://cdn.iconscout.com/icon/free/png-256/semrush-1-1175065.png' }
        ],
        reviews: [
            { name: "Priya Sharma", role: "Digital Marketer", review: "The Google Ads module changed my perspective on PPC. I saw immediate results in my client projects.", img: "https://ui-avatars.com/api/?name=Priya+Sharma&background=E91E63&color=fff&size=128" }
        ],
        faqs: [
            { question: "What will I learn in this course?", answer: "You will learn how to design and execute high-growth digital marketing strategies covering SEO, SMM, Content Marketing, and PPC." },
            { question: "Which technologies will I learn?", answer: "The tools include Google Ads, Google Analytics, Semrush, and Mailchimp." },
            { question: "How long is the course?", answer: "The Digital Marketing program is a 6-month intensive course." },
            { question: "Will I receive a certificate after completion?", answer: "Yes, you will earn a Professional Certification from Gyantrix Academy along with guidance for Google and Meta certifications." },
            { question: "Is the certificate recognized?", answer: "Absolutely. Our certification is recognized across all modern business sectors in the digital economy." },
            { question: "Do you provide placement assistance?", answer: "Yes, we provide 100% placement assistance, including building your digital brand and portfolio." },
            { question: "What job roles can I get after this course?", answer: "Target roles include SEO Specialist, Performance Marketer, Social Media Manager, and Content Strategist." },
            { question: "Who can join this course?", answer: "This course is ideal for entrepreneurs, graduates, and professionals wanting to grow in the digital space." },
            { question: "Do I need prior experience?", answer: "No, our course is designed to take you from a beginner level to being ready for a junior or mid-level marketing role." }
        ]
    },
    {
        title: "Product Management",
        category: "management",
        price: "₹14,999",
        img: "/images/productmanagement.jpg",
        desc: "Product Management involves planning, developing, and overseeing a product throughout its entire lifecycle.",
        link: "/courses/productmanagement",
        modules: [
            { title: 'Introduction to Product Management', tag: '#Foundations', content: 'The role of a PM, product lifecycle, and different types of PM roles.' },
            { title: 'Product Strategy & Vision', tag: '#Strategy', content: 'Defining the "Why" behind a product and creating a compelling roadmap.' },
            { title: 'User Research & Personas', tag: '#Research', content: 'Understanding customer needs, pain points, and building user personas.' },
            { title: 'Product Design & Prototyping', tag: '#Design', content: 'Basics of UI/UX, wireframing, and building MVPs (Minimum Viable Products).' },
            { title: 'Product Metrics & Analytics', tag: '#Metrics', content: 'Defining KPIs and using data to measure product success (AARRR framework).' },
            { title: 'Stakeholder & Team Collaboration', tag: '#Leadership', content: 'Working effectively with engineering, design, and marketing teams.' },
            { title: 'Product Backlog & Prioritization', tag: '#Execution', content: 'Using frameworks like RICE and MoSCoW to decide what to build next.' },
            { title: 'Agile Product Management', tag: '#Agile', content: 'Mastering sprints, user stories, and the role of PM in an agile environment.' },
            { title: 'Go-to-Market (GTM) Strategy', tag: '#Launch', content: 'Planning and executing a successful product launch.' },
            { title: 'Product Management Interview Prep', tag: '#Career', content: 'Mastering case studies, product sense, and behavioral interview questions.' }
        ],
        tools: [
            { name: 'Jira', img: 'https://cdn.iconscout.com/icon/free/png-256/jira-1-1175159.png' },
            { name: 'Figma', img: 'https://cdn.iconscout.com/icon/free/png-256/figma-1-1175147.png' },
            { name: 'Miro', img: 'https://cdn.iconscout.com/icon/free/png-256/miro-1-1175135.png' },
            { name: 'Amplitude', img: 'https://cdn-icons-png.flaticon.com/512/906/906314.png' }
        ],
        reviews: [
            { name: "Varun Mehta", role: "Associate PM", review: "The case study methodology used here is excellent. It really taught me how to think like a product owner.", img: "https://ui-avatars.com/api/?name=Varun+Mehta&background=3F51B5&color=fff&size=128" }
        ],
        faqs: [
            { question: "What will I learn in this course?", answer: "You will learn the end-to-end product lifecycle, including strategy, user research, wireframing, metrics analysis, and Agile management." },
            { question: "Which technologies will I learn?", answer: "The program covers Jira for management, Figma for design, Miro for brainstorming, and Amplitude for metrics." },
            { question: "How long is the course?", answer: "The Product Management certification is a 6-month intensive track." },
            { question: "Will I receive a certificate after completion?", answer: "Yes, you will earn a Professional Certification in Product Management from Gyantrix Academy." },
            { question: "Is the certificate recognized?", answer: "Yes, our certification is highly valued by modern tech companies and product-led organizations." },
            { question: "Do you provide placement assistance?", answer: "Yes, we provide 100% placement assistance, including product-sense interview prep and case study reviews." },
            { question: "What job roles can I get after this course?", answer: "Graduates qualify for roles like Associate Product Manager, Technical PM, and Product Analyst." },
            { question: "Who can join this course?", answer: "Ideally suited for engineering or marketing graduates who wish to move into management roles." },
            { question: "Do I need prior experience?", answer: "No, while career switchers from tech are common, we teach the foundations of problem solving and leadership from scratch." }
        ]
    },
    {
        title: "Human Resources",
        category: "non-it-marketing",
        price: "₹14,999",
        img: "/images/humanresourse.jpg",
        desc: "Human Resources manages recruitment, employee relations, and workforce development within an organization.",
        link: "/courses/humanresourse",
        modules: [
            { title: 'HR Fundamentals', tag: '#HRM', content: 'The core functions of HR and its importance in modern businesses.' },
            { title: 'Talent Acquisition & Recruitment', tag: '#Recruitment', content: 'Strategies for sourcing, interviewing, and hiring top-tier talent.' },
            { title: 'Performance Management', tag: '#Performance', content: 'Designing appraisal systems and fostering employee growth.' },
            { title: 'Employee Relations & Engagement', tag: '#Culture', content: 'Building a positive work environment and resolving conflicts.' },
            { title: 'Learning & Development (L&D)', tag: '#L&D', content: 'Developing training programs to skill and upskill the workforce.' },
            { title: 'Compensation & Benefits', tag: '#Finance', content: 'Structuring payroll, bonuses, and non-monetary perks.' },
            { title: 'HR Analytics', tag: '#Data', content: 'Using data to measure turnover, engagement, and recruitment efficiency.' },
            { title: 'HR Information Systems (HRIS)', tag: '#Tools', content: 'Managing employee data with digital platforms.' },
            { title: 'Labor Laws and Compliance', tag: '#Legal', content: 'Understanding the legal framework governing employment.' },
            { title: 'Strategic HR Leadership', tag: '#Leadership', content: 'Aligning HR goals with the overall business vision.' }
        ],
        tools: [
            { name: 'LinkedIn Recruiter', img: 'https://cdn-icons-png.flaticon.com/512/174/174857.png' },
            { name: 'Workday', img: 'https://cdn.iconscout.com/icon/free/png-256/workday-2-1175131.png' },
            { name: 'SAP SuccessFactors', img: 'https://cdn.iconscout.com/icon/free/png-256/sap-4-1175133.png' }
        ],
        reviews: [
            { name: "Megha Rao", role: "HR Generalist", review: "The module on HR Analytics opened my eyes to how much impact data can have on hiring efficiency.", img: "https://ui-avatars.com/api/?name=Megha+Rao&background=009688&color=fff&size=128" }
        ],
        faqs: [
            { question: "What will I learn in this course?", answer: "You will master the full HR lifecycle including recruitment, performance management, labor laws, and advanced HR analytics." },
            { question: "Which technologies will I learn?", answer: "The learning stack includes LinkedIn Recruiter, Workday, and SAP SuccessFactors for HRIS management." },
            { question: "How long is the course?", answer: "The Human Resources certification is a 6-month specialized program." },
            { question: "Will I receive a certificate after completion?", answer: "Yes, you will receive a Professional Human Resources certification from Gyantrix Academy." },
            { question: "Is the certificate recognized?", answer: "Yes, it is highly valued across diverse industries from IT to Manufacturing and Healthcare." },
            { question: "Do you provide placement assistance?", answer: "Yes, we provide 100% placement assistance, including soft skills and interview coaching." },
            { question: "What job roles can I get after this course?", answer: "Roles include HR Generalist, Talent Acquisition Specialist, HR Analyst, and Learning & Development Coordinator." },
            { question: "Who can join this course?", answer: "Perfect for any graduate or professional looking to move into people management and strategy roles." },
            { question: "Do I need prior experience?", answer: "No, the course is designed to take you from foundational people skills to strategic HR leadership." }
        ]
    },
    {
        title: "Nano Science & Technology",
        category: "pharma agriculture",
        price: "₹14,999",
        img: "/images/nanoscience&technology.jpg",
        desc: "Nano Science & Technology studies and manipulates materials at the atomic and molecular scale for advanced applications.",
        link: "/courses/nanoscience",
        modules: [
            { title: 'Fundamentals of Nanoscience', tag: '#Foundations', content: 'Properties of matter at the nanoscale and the history of nanotechnology.' },
            { title: 'Synthesis of Nanomaterials', tag: '#Advanced', content: 'Chemical and physical methods for creating nanoparticles and nanotubes.' },
            { title: 'Characterization Techniques', tag: '#Tools', content: 'Mastering SEM, TEM, and AFM for viewing and analyzing materials at the nanoscale.' },
            { title: 'Nanotechnology in Healthcare', tag: '#Medical', content: 'Targeted drug delivery and diagnostic tools using nanobots.' },
            { title: 'Nanomaterials for Energy', tag: '#Energy', content: 'Using nanotech to improve solar cells, batteries, and fuel cells.' },
            { title: 'Nano-agriculture', tag: '#Agri', content: 'Developing nano-fertilizers and smart sensors for precision farming.' },
            { title: 'Environmental Nanotechnology', tag: '#Environment', content: 'Nanosystems for water purification and air filtration.' },
            { title: 'Carbon Nanotubes & Graphene', tag: '#Special', content: 'Deep dive into the properties of wonder-materials like graphene.' },
            { title: 'Nanotoxicology and Safety', tag: '#Ethical', content: 'Understanding and managing the health risks of nanomaterials.' },
            { title: 'Nano-electronics', tag: '#Tech', content: 'The next generation of semiconductors and quantum computing.' }
        ],
        tools: [
            { name: 'SEM', img: 'https://cdn-icons-png.flaticon.com/512/3201/3201246.png' },
            { name: 'AFM', img: 'https://cdn-icons-png.flaticon.com/512/3201/3201258.png' },
            { name: 'NanoDesign Soft', img: 'https://cdn-icons-png.flaticon.com/512/3201/3201201.png' }
        ],
        reviews: [],
        faqs: [
            { question: "What will I learn in this course?", answer: "You will master the synthesis and characterization of nanomaterials and their groundbreaking applications in medicine, energy, and agriculture." },
            { question: "Which technologies will I learn?", answer: "You will gain hands-on knowledge of SEM, AFM, and specialized nanotech design software." },
            { question: "How long is the course?", answer: "The Nano Science & Technology certification is an expert-level 8-month program." },
            { question: "Will I receive a certificate after completion?", answer: "Yes, you will receive a Professional Certification in Nanotechnology from Gyantrix Academy." },
            { question: "Is the certificate recognized?", answer: "Yes, our certification is highly recognized in advanced material science and R&D sectors." },
            { question: "Do you provide placement assistance?", answer: "Yes, we provide 100% placement assistance for R&D centers and high-tech manufacturing firms." },
            { question: "What job roles can I get after this course?", answer: "Potential roles include Nanotechnologist, Materials Scientist, Research Engineer, and Quality Control Specialist." },
            { question: "Who can join this course?", answer: "Ideal for freshers and professionals from physics, chemistry, or engineering backgrounds." },
            { question: "Do I need prior experience?", answer: "A fundamental understanding of chemistry and physics is recommended for this specialized track." }
        ]
    },
    {
        title: "Salesforce",
        category: "it non-it-marketing",
        price: "₹14,999",
        img: "/images/SalesForce.png",
        desc: "Salesforce is a powerful cloud-based CRM platform used to manage sales, customer data, and business workflows globally.",
        link: "/courses/salesForce",
        modules: [
            { title: 'Salesforce CRM Basics', tag: '#CRM', content: 'Understanding the core cloud platform and navigating the ecosystem.' },
            { title: 'Admin & Configuration', tag: '#Admin', content: 'Building custom apps, objects, fields, and tabs without coding.' },
            { title: 'Data Management & Security', tag: '#Security', content: 'Managing users, profiles, permission sets, and data import/export.' },
            { title: 'Workflows and Automations', tag: '#Flow', content: 'Mastering Flow Builder and Process Builder for business automation.' },
            { title: 'Reports and Dashboards', tag: '#Analytics', content: 'Building powerful visualizations to drive sales and marketing decisions.' },
            { title: 'Apex Programming for Developers', tag: '#Dev', content: 'Learning the object-oriented language of Salesforce to build custom logic.' },
            { title: 'Visualforce and Lightning Components', tag: '#UI', content: 'Building custom user interfaces on the Salesforce platform.' },
            { title: 'Salesforce Integration (API)', tag: '#Advanced', content: 'Connecting Salesforce with other third-party applications.' },
            { title: 'Salesforce Sales & Service Cloud', tag: '#Special', content: 'Deep dive into industry-specific cloud offerings.' },
            { title: 'Trailhead Certification Prep', tag: '#Prep', content: 'Strategies and mock tests for the Salesforce Certified Administrator exam.' }
        ],
        tools: [
            { name: 'Salesforce', img: 'https://cdn.iconscout.com/icon/free/png-256/salesforce-2-1175067.png' },
            { name: 'Flow Builder', img: 'https://cdn-icons-png.flaticon.com/512/2966/2966424.png' },
            { name: 'Trailhead', img: 'https://cdn-icons-png.flaticon.com/512/2966/2966412.png' }
        ],
        reviews: [
            { name: "Rahul Deshmukh", role: "Salesforce Admin", review: "The hands-on Flow Builder training was a lifesaver. I can now automate complex business logic in minutes.", img: "https://ui-avatars.com/api/?name=Rahul+Deshmukh&background=795548&color=fff&size=128" }
        ],
        faqs: [
            { question: "What will I learn in this course?", answer: "You will learn how to manage the global #1 CRM platform, from admin configuration and low-code flow building to advanced Apex programming." },
            { question: "Which technologies will I learn?", answer: "The course focuses on Salesforce, Flow Builder, Trailhead, and Apex Programming." },
            { question: "How long is the course?", answer: "The comprehensive Salesforce certification program is 6 months long." },
            { question: "Will I receive a certificate after completion?", answer: "Yes, you will receive a Professional Salesforce Specialist certification from Gyantrix Academy." },
            { question: "Is the certificate recognized?", answer: "Yes, it is highly recognized globally, and we prepare you for the official Salesforce Administrator exam." },
            { question: "Do you provide placement assistance?", answer: "Yes, we provide 100% placement assistance, including mock interviews and portfolio creation in the Salesforce ecosystem." },
            { question: "What job roles can I get after this course?", answer: "Roles include Salesforce Administrator, Salesforce Developer, Business Analyst, and CRM Consultant." },
            { question: "Who can join this course?", answer: "Freshers looking for a high-growth IT career and professionals wanting to specialize in CRM." },
            { question: "Do I need prior experience?", answer: "No, we start with the no-code Admin track before moving to Apex development, making it accessible for everyone." }
        ]
    }
];
