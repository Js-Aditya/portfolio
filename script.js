const skills = {
    'Computer Science': [
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'Rust', icon: 'rust-icon.png' },
        { name: 'SQL', icon: 'fas fa-database' },
        { name: 'HTML', icon: 'fab fa-html5' },
        { name: 'CSS', icon: 'fab fa-css3-alt' },
        { name: 'Flutter', icon: 'flutter-icon.png' },
        { name: 'React.js', icon: 'fab fa-react' },
        { name: 'Node.js', icon: 'fab fa-node-js' }
    ],
    'Cyber Security': [
        { name: 'Penetration Testing', icon: 'fas fa-user-secret' },
        { name: 'Digital Forensics', icon: 'fas fa-search' },
        { name: 'Network Security', icon: 'fas fa-shield-alt' },
        { name: 'Cryptography', icon: 'fas fa-lock' }
    ],
    'Soft Skills': [
        { name: 'Punctuality', icon: 'fas fa-clock' },
        { name: 'Team Leader', icon: 'fas fa-users' },
        { name: 'Problem Solver', icon: 'fas fa-puzzle-piece' },
        { name: 'Public Speaker', icon: 'fas fa-microphone' }
    ]
};

const projects = [
    {
        id: 'project1',
        title: 'Phishing Website Detection using ML',
        description: 'Developed a ML Model to detect phishing websites and used flask to interact with frontend.',
        details: [
            'Used regression and classification algorithms like MultinomialNB and logistic regression to detect fake or phishing URLs.',
            'Trained on a dataset of approximately 5 lakh labeled websites.',
            'Fine-tuned model by considering URL, length, shortened links, and other factors, increasing accuracy to 96%.'
        ],
        techStack: ['Python', 'Flask', 'Machine Learning (scikit-learn)'],
        demoLink: 'https://github.com/Js-Aditya/Phishing-Website-Detection',
        sourceLink: 'https://github.com/Js-Aditya/Phishing-Website-Detection'
    },
    {
        id: 'project2',
        title: 'Government Fund Allocation and Management using Blockchain',
        description: 'Developed a State Government fund management system using Blockchain to ensure secure, transparent, and tamper-proof allocation of funds between the Government and other entities.',
        details: [
            'Implemented the backend with Flask and web3 package.',
            'Created frontend using HTML and CSS.',
            'Utilized Ganache for the demo Blockchain currency and Truffle for configuration of Blockchain.',
            'Leveraged Blockchain to enhance security and provide a trustworthy, immutable record of transactions.',
            'Can be improved by introducing advanced and robust consensus mechanisms for various use cases.'
        ],
        techStack: ['Flask', 'Web3.py', 'HTML/CSS', 'Ganache', 'Truffle'],
        demoLink: 'https://github.com/Js-Aditya/blockchain-fund-alllocation',
        sourceLink: 'https://github.com/Js-Aditya/blockchain-fund-alllocation'
    },
    {
        id: 'project3',
        title: 'Quiz Application using React.js',
        description: 'Developed a "Kaun Banega Crorepati" themed quiz application with 15 progressively challenging questions and a countdown timer using React and Tailwind CSS.',
        details: [
            'Incorporated authentic KBC sound effects for right and wrong answers, boosting user engagement by 40% and enhancing the immersive game experience, leading to a 25% increase in average session duration.'
        ],
        techStack: ['React.js', 'Tailwind CSS'],
        demoLink: 'https://github.com/Js-Aditya/quiz-app',
        sourceLink: 'https://github.com/Js-Aditya/quiz-app'
    }
];

const achievements = {
    'Certificates': [
        { name: 'SkillFront Information Security Associate', link: '/uploads/Skillfront.pdf' },
        { name: 'EPAM Certified Front-end Developer', link: '/uploads/Epam.pdf' },
        { name: 'Fundamentals of SIEM Alert Rule Development', link: '/uploads/SIEM.pdf' },
        { name: 'Python3 ultimate Guide by Udemy', link: '/uploads/Python Udemy.pdf' },
        { name: 'Cisco Cybersecurity Essentials', link: '/uploads/Cisco.pdf' },
        { name: "Coursera's Google Cyber Security", link: '/uploads/Coursera.pdf' }
    ],
    'Achievements': [
        { name: 'Participated in Product Management Workshop by BITS Hyderabad', link: '/uploads/Bits.pdf' },
        { name: '3rd prize in College for Public Speech on World Water Day 2023', link: '/uploads/3rd-Prize.pdf' }
    ],
    'Participations': [
        { name: 'Campus Executive for IIT Bombay E-Cell', link: '/uploads/CampusExe.pdf' },
        { name: 'Attended 5 Day Innovation and Entrepreneurship conducted by IIT Madras', link: '/uploads/IIT.pdf' },
        { name: 'Attended Innovation, Ideation & Start ups Workshop by Entrepreneurship Club', link: '/uploads/Entre.pdf' }
    ]
};

function createSkillItem(skill) {
    const iconElement = skill.icon.startsWith('fa')
        ? `<i class="${skill.icon}"></i>`
        : `<img src="${skill.icon}" alt="${skill.name}" class="skill-icon">`;

    return `
        <div class="skill-item">
            ${skill.name} ${iconElement}
        </div>
    `;
}

function createProjectItem(project) {
    return `
        <div class="project-item" onclick="showProjectModal('${project.id}')">
            <h3>${project.title}</h3>
        </div>
    `;
}

function createAchievementItem(achievement) {
    return `
        <div class="certificate-item" onclick="window.open('${achievement.link}', '_blank')">
            ${achievement.name}
        </div>
    `;
}

function renderSkills() {
    const skillList = document.getElementById('skillList');
    skillList.innerHTML = Object.entries(skills).map(([category, categorySkills]) => `
        <div class="skill-category">
            <h3>${category}</h3>
            <div class="skill-list">
                ${categorySkills.map(createSkillItem).join('')}
            </div>
        </div>
    `).join('');
}

function renderProjects() {
    const projectList = document.getElementById('projectList');
    projectList.innerHTML = projects.map(createProjectItem).join('');
}

function renderAchievements() {
    const achievementList = document.getElementById('achievementList');
    achievementList.innerHTML = Object.entries(achievements).map(([category, categoryAchievements]) => `
        <div class="achievement-category">
            <h3>${category}</h3>
            <div class="certificate-list">
                ${categoryAchievements.map(createAchievementItem).join('')}
            </div>
        </div>
    `).join('');
}

function showProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    const modal = document.getElementById('projectModal');
    const title = document.getElementById('modalTitle');
    const content = document.getElementById('modalContent');

    title.textContent = project.title;
    content.innerHTML = `
        <p>${project.description}</p>
        <ul style="padding-left: 20px;">
            ${project.details.map(detail => `<li>${detail}</li>`).join('')}
        </ul>
        <br/>
        <h4>Tech Stack:</h4>
        <div class="tech-stack">
            ${project.techStack.map(tech => `<span class="tech-stack-item">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
            <a href="${project.demoLink}" class="project-btn" target="_blank">Live Demo</a>
            <a href="${project.sourceLink}" class="project-btn" target="_blank">Source Code</a>
        </div>
    `;

    modal.style.display = 'block';
}

function closeProjectModal() {
    document.getElementById('projectModal').style.display = 'none';
}

function showProfileModal() {
    document.getElementById('profileModal').style.display = 'block';
}

function closeProfileModal() {
    document.getElementById('profileModal').style.display = 'none';
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', () => {
    renderSkills();
    renderProjects();
    renderAchievements();
    handleScroll();
});

// Close modals when clicking outside of them
window.onclick = function (event) {
    const projectModal = document.getElementById('projectModal');
    const profileModal = document.getElementById('profileModal');
    if (event.target == projectModal) {
        projectModal.style.display = "none";
    }
    if (event.target == profileModal) {
        profileModal.style.display = "none";
    }
}