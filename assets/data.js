/* Generated from assets/data/*.json */
window.PORTFOLIO_DATA = {
  "projects": [
    {
      "id": "educore",
      "num": "01",
      "title": "EduCore",
      "category": "ACADEMIC ERP / LMS",
      "subtitle": "One connected system for modern academic operations.",
      "image": "educore.jpg",
      "status": "Active development",
      "year": "2026",
      "stack": [
        "Python",
        "Django",
        "HTML / CSS",
        "JavaScript",
        "SQLite / MySQL",
        "Automated Tests"
      ],
      "summary": "EduCore brings academic administration, course delivery, attendance, assignments and examinations into a role-aware Django platform.",
      "problem": "Academic teams often operate across separate tools for enrollment, lessons, attendance, assessments and communication. This introduces duplication, fragmented workflows and inconsistent access controls.",
      "solution": "Design a unified, role-aware experience for institutional staff, teachers and students, supported by a structured Django backend and practical automated tests.",
      "features": [
        [
          "Role-aware portals",
          "Different workflows and permissions for administrative staff, teachers and students."
        ],
        [
          "Academic operations",
          "Course and batch management, enrollment, trainer assignments and class sessions."
        ],
        [
          "Attendance & scheduling",
          "Attendance records with validation, session cancellation handling and schedule conflict checks."
        ],
        [
          "Learning & assessments",
          "Assignments, lessons and objective/written exam workflows."
        ],
        [
          "Testing practice",
          "Automated tests for permissions, session conflicts, attendance rules and related workflows."
        ]
      ],
      "architecture": "Django application modules separate accounts, organizations and academic operations. Server-side validation protects attendance and scheduling actions, with tests exercising access and workflow rules.",
      "challenge": "Preventing conflicting schedules and restricting attendance edits to valid sessions while keeping the interface usable across different roles.",
      "outcome": "An evolving system with working academic workflows and an extensive test history. Public production deployment and scale metrics are not yet verified.",
      "caption": "AI-generated conceptual dashboard visual. This is not a screenshot of the running EduCore application.",
      "github": "",
      "demo": "",
      "gallery": []
    },
    {
      "id": "carecompanion",
      "num": "02",
      "title": "CareCompanion",
      "category": "HOSPITAL ASSISTANCE / AUTOMATION",
      "subtitle": "Helping families coordinate a hospital visit when they cannot be there.",
      "image": "carecompanion.jpg",
      "status": "Prototype",
      "year": "2026",
      "stack": [
        "Python",
        "Django",
        "Workflow Design",
        "Role-Based Access",
        "Razorpay Test Mode"
      ],
      "summary": "A non-medical hospital visit assistance platform connecting customers, patients, field companions and operations teams.",
      "problem": "Families are not always available to accompany relatives to hospital visits. Booking, coordinating, tracking and validating assistance can become a manual operational burden.",
      "solution": "Create a platform with patient profiles, visit bookings, companion workflows, operations oversight, PIN-based visit checkpoints, documents, notifications and payment handling.",
      "features": [
        [
          "Booking journey",
          "Customer booking and patient profile workflows with hospital and service details."
        ],
        [
          "Companion assignment automation",
          "An automation-led allocation workflow intended to reduce routine manual dispatch. The developer estimates roughly 80% automation; the exact implementation and measurement have not yet been independently audited."
        ],
        [
          "Visit confirmation",
          "Start and completion PIN workflow included in the product specification; implementation status should be verified before launch."
        ],
        [
          "Payments",
          "Razorpay test-mode payment integration was exercised during development."
        ],
        [
          "Operational oversight",
          "Dashboard concepts, expenses, complaints, incidents and notifications."
        ]
      ],
      "architecture": "A modular Django architecture spanning users, patients, bookings, companions, documents and operational support. The assignment layer is intended to reduce manual scheduling decisions.",
      "challenge": "Safely matching field companions with visit requests while retaining operational control, traceability and a human escalation path.",
      "outcome": "Working prototype flows include customer booking, patient records, operations views and Razorpay test mode. Approx. 80% workflow automation is the developer’s estimate, not a validated metric.",
      "caption": "AI-generated conceptual interface illustration; screens, numbers and people shown are illustrative, not real customer or application data.",
      "github": "",
      "demo": "",
      "gallery": []
    },
    {
      "id": "teamflow",
      "num": "03",
      "title": "TeamFlow",
      "category": "CLASSROOM INTELLIGENCE",
      "subtitle": "A more structured way to run academies, groups and learning activities.",
      "image": "teamflow.jpg",
      "status": "Exploratory build",
      "year": "2026",
      "stack": [
        "Django",
        "React",
        "REST APIs",
        "Python",
        "Streamlit"
      ],
      "summary": "An evolving classroom and academy management concept combining multi-academy administration and learning activity workflows.",
      "problem": "Educators need a manageable way to structure academies, cohorts, students, group activities and evaluation without spending too much time coordinating across spreadsheets.",
      "solution": "Build academy, course, batch, student and enrollment foundations while exploring classroom grouping, evaluation and data-driven teaching assistance.",
      "features": [
        [
          "Academy setup",
          "Academy and membership roles, courses and batches."
        ],
        [
          "Enrollment",
          "Student records and batch enrollment interfaces."
        ],
        [
          "Grouping prototype",
          "A separate Streamlit-based smart-class prototype supported team generation and reshuffling."
        ],
        [
          "Classroom evaluation",
          "Project, team and member evaluation workflows explored in the classroom prototype."
        ],
        [
          "AI roadmap",
          "Topic mastery, intelligent group recommendations and next-class guidance remain proposed or evolving capabilities."
        ]
      ],
      "architecture": "A Django/React academy-management foundation, with adjacent Streamlit experiments for classroom grouping and evaluation. These components should not be represented as a single fully integrated production platform.",
      "challenge": "Keeping role boundaries consistent while translating classroom workflows into understandable interfaces.",
      "outcome": "Multiple working prototypes and planned intelligence features; integration status requires confirmation.",
      "caption": "AI-generated illustrative product concept. Displayed charts, statistics and AI panels do not represent verified production data.",
      "github": "",
      "demo": "",
      "gallery": []
    },
    {
      "id": "cv-validator",
      "num": "04",
      "title": "CV Validator",
      "category": "NLP / PRODUCT UTILITY",
      "subtitle": "Turning résumé feedback into clearer next steps.",
      "image": "cv-validator.jpg",
      "status": "Project build",
      "year": "2025",
      "stack": [
        "Python",
        "Streamlit",
        "PyMuPDF",
        "scikit-learn",
        "Regex"
      ],
      "summary": "A résumé review application that extracts PDF text, checks important sections and compares candidate skills against selected role expectations.",
      "problem": "Applicants can struggle to identify missing résumé sections and role-specific skill gaps before applying.",
      "solution": "Provide structured checks for common sections, skill matching, missing terms and suggestions to make the document easier to review.",
      "features": [
        [
          "PDF extraction",
          "Read résumé text from user-uploaded PDFs."
        ],
        [
          "Section checks",
          "Inspect skills, experience, projects, education and contact sections."
        ],
        [
          "Role alignment",
          "Compare detected skills against selected job-role requirements."
        ],
        [
          "Actionable output",
          "Show matched and missing skills, structural issues and suggestions."
        ]
      ],
      "architecture": "Python/Streamlit application with PDF text extraction, rule-based checks and conventional text-processing techniques.",
      "challenge": "Interpreting very different résumé layouts without pretending that a heuristic score predicts real employer ATS outcomes.",
      "outcome": "Practical analysis prototype. Any numerical score should be explained as an internal heuristic, not a certified ATS rating.",
      "caption": "AI-generated illustration. The displayed scores, résumé content and match percentages are fictional visual examples.",
      "github": "",
      "demo": "",
      "gallery": []
    }
  ],
  "posts": [
    {
      "id": "fdp-ai-teaching",
      "category": "WORKSHOP / FDP",
      "date": "2026-10-01",
      "date_label": "2026",
      "title": "Making AI Useful for Teaching & Learning",
      "excerpt": "Reflections from facilitating a five-hour faculty development workshop on practical AI in education.",
      "image": "story.jpg",
      "reading": "4 min read",
      "body": [
        [
          "Context",
          "A faculty development programme is most valuable when participants can connect concepts with their own classroom practice. This session focused on practical ways educators can understand and explore AI-powered teaching tools."
        ],
        [
          "What the session covered",
          "The workshop explored AI for lesson preparation, learning materials, question design, classroom tasks and responsible use. Hands-on examples helped connect tools to familiar education workflows."
        ],
        [
          "Key takeaway",
          "Useful AI adoption starts with a clear teaching problem, careful review of generated outputs and a teacher who remains accountable for the learning experience."
        ],
        [
          "Event",
          "Faculty development workshop at Malik Deenar College of Graduate Studies, Kasaragod. This article is a summary based on the trainer’s project history, not a published event report."
        ]
      ]
    },
    {
      "id": "building-educore",
      "category": "BUILD LOG",
      "date": "2026-11-05",
      "date_label": "NOV 2026",
      "title": "Designing Academic Workflows That Hold Up in Testing",
      "excerpt": "Lessons from permissions, scheduling constraints and attendance workflows in EduCore.",
      "image": "educore.jpg",
      "reading": "5 min read",
      "body": [
        [
          "Why workflows matter",
          "A dashboard is only the visible surface of a management system. The difficult part is enforcing who can change which record, and under what conditions."
        ],
        [
          "Schedule constraints",
          "A class-session workflow needs to handle cancelled sessions, conflicts involving batches or trainers and invalid attendance dates. These rules belong on the server rather than only in interface controls."
        ],
        [
          "Testing as product design",
          "Permission tests and conflict tests reveal assumptions before users encounter them. Reproducible automated checks make iterative development safer."
        ],
        [
          "Next steps",
          "Continued work includes reporting, clarity around concurrent edits and more complete end-to-end UI verification."
        ]
      ]
    },
    {
      "id": "classroom-tools",
      "category": "DEVELOPMENT",
      "date": "2026-10-24",
      "date_label": "OCT 2026",
      "title": "Why I Started Building Tools for Smarter Classrooms",
      "excerpt": "From team shuffling to student evaluation: making repetitive trainer tasks simpler.",
      "image": "teamflow.jpg",
      "reading": "4 min read",
      "body": [
        [
          "The classroom problem",
          "Creating fair groups, tracking participation and reviewing project submissions takes time that could otherwise go toward teaching and feedback."
        ],
        [
          "Start small",
          "A prototype can begin with student imports, group generation, reshuffling and exports. This is valuable even before adding machine learning."
        ],
        [
          "What comes next",
          "More sophisticated recommendations require reliable data and evidence that suggestions actually improve outcomes. AI should be an optional layer on top of a dependable classroom workflow."
        ]
      ]
    }
  ]
};
