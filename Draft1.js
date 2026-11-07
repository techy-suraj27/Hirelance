/* =========================================================
   HIRELANCE
   Main JavaScript
========================================================= */


/* =========================================================
   MOCK DATA
========================================================= */

const freelancers = [

    {
        id: 1,
        name: "Aarav Sharma",
        title: "Senior Graphic Designer",
        category: "Graphic Design",
        rating: 4.9,
        gigs: 128,
        earnings: 45000,
        availability: true,
        badge: "🏆 #1 Top Freelancer",
        bio: "Brand identity and visual design specialist helping startups build memorable visual identities.",
        skills: ["Branding", "UI Design", "Illustration"],
        experience: "6+ years",
        completed: 128,
        avatar: "AS"
    },

    {
        id: 2,
        name: "Riya Mehta",
        title: "Content Creator",
        category: "Content Creation",
        rating: 4.9,
        gigs: 115,
        earnings: 38000,
        availability: true,
        badge: "🔥 Trending",
        bio: "Social media strategist and content creator focused on short-form video and digital storytelling.",
        skills: ["Instagram", "YouTube", "UGC"],
        experience: "4+ years",
        completed: 115,
        avatar: "RM"
    },

    {
        id: 3,
        name: "Kabir Verma",
        title: "VFX Artist",
        category: "VFX",
        rating: 4.8,
        gigs: 97,
        earnings: 62000,
        availability: true,
        badge: "⭐ Top Rated",
        bio: "VFX artist specializing in cinematic compositing, motion graphics and visual effects.",
        skills: ["After Effects", "3D", "Compositing"],
        experience: "7+ years",
        completed: 97,
        avatar: "KV"
    },

    {
        id: 4,
        name: "Ananya Singh",
        title: "SEO Content Writer",
        category: "Content Writing",
        rating: 4.9,
        gigs: 92,
        earnings: 31000,
        availability: false,
        badge: "⭐ Top Rated",
        bio: "SEO-focused writer creating long-form content, blogs and landing pages that communicate clearly.",
        skills: ["SEO", "Blogging", "Copywriting"],
        experience: "5+ years",
        completed: 92,
        avatar: "AS"
    },

    {
        id: 5,
        name: "Dev Malhotra",
        title: "Full Stack Developer",
        category: "Web Development",
        rating: 4.8,
        gigs: 86,
        earnings: 71000,
        availability: true,
        badge: "🔥 Trending",
        bio: "Full-stack developer building responsive web applications and scalable digital products.",
        skills: ["JavaScript", "Node.js", "MongoDB"],
        experience: "5+ years",
        completed: 86,
        avatar: "DM"
    },

    {
        id: 6,
        name: "Meera Kapoor",
        title: "UI/UX Designer",
        category: "UI/UX",
        rating: 5.0,
        gigs: 74,
        earnings: 49000,
        availability: true,
        badge: "⭐ Top Rated",
        bio: "Product designer focused on simple, intuitive and visually engaging digital experiences.",
        skills: ["Figma", "Prototyping", "Research"],
        experience: "4+ years",
        completed: 74,
        avatar: "MK"
    },

    {
        id: 7,
        name: "Arjun Rao",
        title: "AI Engineer",
        category: "AI",
        rating: 4.9,
        gigs: 67,
        earnings: 85000,
        availability: true,
        badge: "🚀 Rising Star",
        bio: "AI and machine learning specialist building practical intelligent systems and automation.",
        skills: ["Python", "ML", "LLMs"],
        experience: "3+ years",
        completed: 67,
        avatar: "AR"
    },

    {
        id: 8,
        name: "Simran Kaur",
        title: "Professional Photographer",
        category: "Photography",
        rating: 4.8,
        gigs: 61,
        earnings: 36000,
        availability: true,
        badge: "🔥 Trending",
        bio: "Commercial and lifestyle photographer working with brands, creators and startups.",
        skills: ["Product", "Portrait", "Lifestyle"],
        experience: "5+ years",
        completed: 61,
        avatar: "SK"
    }
];


const employers = [

    {
        name: "PixelForge Studios",
        industry: "Creative & Design",
        gigs: 46,
        hires: 84,
        projects: 112,
        rating: 4.9,
        initials: "PF"
    },

    {
        name: "Nova Media",
        industry: "Media & Entertainment",
        gigs: 38,
        hires: 67,
        projects: 91,
        rating: 4.8,
        initials: "NM"
    },

    {
        name: "CreativEdge",
        industry: "Marketing & Advertising",
        gigs: 31,
        hires: 53,
        projects: 76,
        rating: 4.9,
        initials: "CE"
    },

    {
        name: "TechNova Labs",
        industry: "Technology",
        gigs: 27,
        hires: 42,
        projects: 58,
        rating: 4.8,
        initials: "TN"
    }
];


const gigs = [

    {
        id: 1,
        title: "Design a Brand Identity",
        employer: "PixelForge Studios",
        category: "Graphic Design",
        budget: 18000,
        deadline: "12 days",
        skills: ["Branding", "Logo", "Typography"],
        proposals: 18,
        description: "Looking for a designer to create a complete visual identity for a new technology startup."
    },

    {
        id: 2,
        title: "YouTube Video Editor Needed",
        employer: "Nova Media",
        category: "Video Editing",
        budget: 12000,
        deadline: "7 days",
        skills: ["Premiere Pro", "Shorts", "YouTube"],
        proposals: 31,
        description: "We need a creative editor for long-form YouTube videos and engaging short-form content."
    },

    {
        id: 3,
        title: "3D Product Animation",
        employer: "CreativEdge",
        category: "Animation",
        budget: 42000,
        deadline: "18 days",
        skills: ["Blender", "3D", "Animation"],
        proposals: 9,
        description: "Create a polished 3D animation showcasing a consumer product for an advertising campaign."
    },

    {
        id: 4,
        title: "Write 10 SEO Blog Articles",
        employer: "TechNova Labs",
        category: "Content Writing",
        budget: 9000,
        deadline: "10 days",
        skills: ["SEO", "Writing", "Research"],
        proposals: 24,
        description: "Research and write ten high-quality SEO articles for a technology website."
    },

    {
        id: 5,
        title: "Social Media Content Creator",
        employer: "Nova Media",
        category: "Marketing",
        budget: 27000,
        deadline: "15 days",
        skills: ["Instagram", "Reels", "Strategy"],
        proposals: 14,
        description: "Create a monthly social media content package for a fast-growing lifestyle brand."
    },

    {
        id: 6,
        title: "Landing Page Developer",
        employer: "TechNova Labs",
        category: "Web Development",
        budget: 35000,
        deadline: "20 days",
        skills: ["HTML", "CSS", "JavaScript"],
        proposals: 21,
        description: "Build a responsive conversion-focused landing page for an upcoming product launch."
    }
];


const testimonials = [

    {
        name: "Neha Agarwal",
        role: "Founder, Bloom Labs",
        avatar: "NA",
        rating: 5,
        quote: "HIRELANCE helped us discover a designer who understood our brand immediately. The entire process felt incredibly straightforward."
    },

    {
        name: "Rohan Bhatia",
        role: "Freelance Developer",
        avatar: "RB",
        rating: 5,
        quote: "Instead of constantly searching for clients, I can now showcase my work and let the right opportunities come to me."
    },

    {
        name: "Ishita Jain",
        role: "Marketing Manager, Nova Media",
        avatar: "IJ",
        rating: 5,
        quote: "The quality of talent on the platform makes it much easier to find specialists for projects with tight deadlines."
    },

    {
        name: "Aditya Kapoor",
        role: "Video Editor",
        avatar: "AK",
        rating: 5,
        quote: "Having my portfolio and gigs in one professional profile makes it much easier to communicate what I can actually deliver."
    }
];


/* =========================================================
   DOM HELPERS
========================================================= */

const $ = selector => document.querySelector(selector);

const $$ = selector => document.querySelectorAll(selector);


/* =========================================================
   NAVIGATION
========================================================= */

const hamburger = $("#hamburger");
const navMenu = $("#navMenu");

hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* Close mobile menu after clicking a link */

$$(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* Navbar background when scrolling */

window.addEventListener("scroll", () => {

    const navbar = $("#navbar");

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================================
   SMOOTH SCROLL
========================================================= */

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================================
   FREELANCER CARD
========================================================= */

function createFreelancerCard(person) {

    return `

        <article class="freelancer-card">

            <div class="card-cover"></div>

            <div class="freelancer-card-body">

                <div class="card-avatar">
                    ${person.avatar}
                </div>

                <span class="card-badge">
                    ${person.badge}
                </span>

                <h3>${person.name}</h3>

                <p class="freelancer-title">
                    ${person.title}
                </p>

                <span class="card-category">
                    ${person.category}
                </span>

                <div class="available-dot">
                    ${person.availability
                        ? "● Available for Work"
                        : "● Currently Busy"}
                </div>

                <div class="card-rating">
                    ★★★★★
                    <span>${person.rating}</span>
                </div>

                <div class="card-metrics">

                    <div>
                        <strong>${person.gigs}</strong>
                        <small>Completed Gigs</small>
                    </div>

                    <div>
                        <strong>₹${formatNumber(person.earnings)}</strong>
                        <small>Monthly Earnings</small>
                    </div>

                </div>

                <div class="card-actions">

                    <button
                        class="btn btn-outline"
                        onclick="openProfile(${person.id})"
                    >
                        View Profile
                    </button>

                    <button
                        class="btn btn-primary"
                        onclick="openMessage('${person.name}')"
                    >
                        Contact
                    </button>

                </div>

            </div>

        </article>

    `;
}


/* =========================================================
   FORMAT NUMBERS
========================================================= */

function formatNumber(number) {

    return number.toLocaleString("en-IN");

}


/* =========================================================
   RENDER TOP FREELANCERS
========================================================= */

function renderTopFreelancers(sortBy = "gigs") {

    const container = $("#topFreelancerGrid");

    let data = [...freelancers];

    if (sortBy === "gigs") {

        data.sort((a,b) => b.gigs - a.gigs);

    }

    if (sortBy === "earnings") {

        data.sort((a,b) => b.earnings - a.earnings);

    }

    if (sortBy === "rating") {

        data.sort((a,b) => b.rating - a.rating);

    }

    container.innerHTML =
        data
            .slice(0,4)
            .map(createFreelancerCard)
            .join("");

}


/* Initial rendering */

renderTopFreelancers();


/* =========================================================
   SORT FILTERS
========================================================= */

$$(".filter-tab").forEach(button => {

    button.addEventListener("click", () => {

        $$(".filter-tab").forEach(tab =>
            tab.classList.remove("active")
        );

        button.classList.add("active");

        renderTopFreelancers(button.dataset.sort);

    });

});


/* =========================================================
   CATEGORY FILTER
========================================================= */

$$(".category-card").forEach(button => {

    button.addEventListener("click", () => {

        $$(".category-card").forEach(card =>
            card.classList.remove("active")
        );

        button.classList.add("active");

        const category = button.dataset.category;

        if (category === "all") {

            renderTopFreelancers();

        } else {

            const filtered =
                freelancers.filter(
                    person => person.category === category
                );

            $("#topFreelancerGrid").innerHTML =
                filtered.length
                    ? filtered.map(createFreelancerCard).join("")
                    : `<p>No freelancers found in this category.</p>`;

        }

        scrollToSection("freelancers");

    });

});


/* =========================================================
   EMPLOYERS
========================================================= */

function renderEmployers() {

    const container = $("#employerGrid");

    container.innerHTML = employers.map(company => `

        <article class="employer-card">

            <div class="company-top">

                <div class="company-logo">
                    ${company.initials}
                </div>

                <span class="employer-badge">
                    ✓ Verified Employer
                </span>

            </div>

            <h3>${company.name}</h3>

            <p class="employer-industry">
                ${company.industry}
            </p>

            <div class="card-rating">
                ★★★★★
                <span>${company.rating}</span>
            </div>

            <div class="employer-metrics">

                <div>
                    <strong>${company.gigs}</strong>
                    <small>Gigs</small>
                </div>

                <div>
                    <strong>${company.hires}</strong>
                    <small>Hires</small>
                </div>

                <div>
                    <strong>${company.projects}</strong>
                    <small>Projects</small>
                </div>

            </div>

            <button
                class="btn btn-outline full-width"
                onclick="showToast('Company profile preview opened.')"
            >
                View Company
            </button>

        </article>

    `).join("");

}

renderEmployers();


/* =========================================================
   GIG CARDS
========================================================= */

function createGigCard(gig) {

    return `

        <article class="gig-card">

            <div class="gig-top">

                <div class="gig-company">

                    <div class="gig-company-avatar">
                        ${gig.employer
                            .split(" ")
                            .map(word => word[0])
                            .join("")
                            .slice(0,2)}
                    </div>

                    <div>
                        <strong>${gig.employer}</strong>
                        <small>✓ Verified Employer</small>
                    </div>

                </div>

            </div>

            <div class="gig-category">
                ${gig.category}
            </div>

            <h3>${gig.title}</h3>

            <p class="gig-description">
                ${gig.description}
            </p>

            <div class="gig-skills">

                ${gig.skills
                    .map(skill => `<span>${skill}</span>`)
                    .join("")}

            </div>

            <div class="gig-footer">

                <div class="gig-budget">

                    <strong>
                        ₹${formatNumber(gig.budget)}
                    </strong>

                    <small>
                        Budget · ${gig.deadline}
                    </small>

                </div>

                <span class="proposals">
                    ${gig.proposals} proposals
                </span>

            </div>

            <button
                class="btn btn-primary full-width"
                style="margin-top:15px"
                onclick="applyGig(${gig.id})"
            >
                Apply Now →
            </button>

        </article>

    `;
}


/* =========================================================
   RENDER GIGS
========================================================= */

function renderGigs() {

    const category = $("#gigCategoryFilter").value;

    const budget = $("#gigBudgetFilter").value;

    let filtered = [...gigs];


    if (category !== "all") {

        filtered =
            filtered.filter(gig =>
                gig.category === category
            );

    }


    if (budget !== "all") {

        filtered = filtered.filter(gig => {

            if (budget === "low") {

                return gig.budget < 10000;

            }

            if (budget === "medium") {

                return gig.budget >= 10000 &&
                       gig.budget <= 30000;

            }

            if (budget === "high") {

                return gig.budget > 30000;

            }

        });

    }


    $("#gigGrid").innerHTML = filtered.length
        ? filtered.map(createGigCard).join("")
        : `<p>No opportunities match these filters.</p>`;

}


renderGigs();

$("#gigCategoryFilter").addEventListener(
    "change",
    renderGigs
);

$("#gigBudgetFilter").addEventListener(
    "change",
    renderGigs
);


/* =========================================================
   FREELANCER DIRECTORY
========================================================= */

function renderDirectory() {

    const search =
        $("#freelancerSearch").value
            .toLowerCase()
            .trim();

    const category =
        $("#directoryCategory").value;

    const rating =
        $("#directoryRating").value;

    const availability =
        $("#directoryAvailability").value;


    const filtered = freelancers.filter(person => {

        const searchable =
            `${person.name}
             ${person.title}
             ${person.category}
             ${person.skills.join(" ")}`
                .toLowerCase();


        const matchesSearch =
            !search ||
            searchable.includes(search);


        const matchesCategory =
            category === "all" ||
            person.category === category;


        const matchesRating =
            rating === "all" ||
            person.rating >= Number(rating);


        const matchesAvailability =
            availability === "all" ||
            person.availability === true;


        return (
            matchesSearch &&
            matchesCategory &&
            matchesRating &&
            matchesAvailability
        );

    });


    $("#directoryGrid").innerHTML =
        filtered.map(createFreelancerCard).join("");


    $("#directoryEmpty")
        .classList.toggle(
            "hidden",
            filtered.length > 0
        );

}


renderDirectory();


$("#freelancerSearch")
    .addEventListener(
        "input",
        renderDirectory
    );

$("#directoryCategory")
    .addEventListener(
        "change",
        renderDirectory
    );

$("#directoryRating")
    .addEventListener(
        "change",
        renderDirectory
    );

$("#directoryAvailability")
    .addEventListener(
        "change",
        renderDirectory
    );


/* =========================================================
   PROFILE MODAL
========================================================= */

function openProfile(id) {

    const person =
        freelancers.find(
            freelancer => freelancer.id === id
        );

    if (!person) return;


    $("#profileModalContent").innerHTML = `

        <div class="profile-hero">

            <div class="large-avatar">
                ${person.avatar}
            </div>

            <div>

                <span class="card-category">
                    ${person.category}
                </span>

                <h2>${person.name}</h2>

                <p>${person.title}</p>

                <div class="card-rating">
                    ★★★★★
                    <span>${person.rating}</span>
                </div>

            </div>

            <button
                class="btn btn-primary"
                onclick="openMessage('${person.name}')"
            >
                Contact
            </button>

        </div>


        <div class="profile-body">

            <div class="profile-section">

                <h3>About</h3>

                <p>${person.bio}</p>

            </div>


            <div class="profile-section">

                <h3>Skills</h3>

                <div class="profile-skills">

                    ${person.skills
                        .map(skill => `<span>${skill}</span>`)
                        .join("")}

                </div>

            </div>


            <div class="profile-section">

                <h3>Professional Overview</h3>

                <div class="card-metrics">

                    <div>
                        <strong>${person.experience}</strong>
                        <small>Experience</small>
                    </div>

                    <div>
                        <strong>${person.completed}</strong>
                        <small>Completed Gigs</small>
                    </div>

                    <div>
                        <strong>₹${formatNumber(person.earnings)}</strong>
                        <small>Monthly Earnings</small>
                    </div>

                    <div>
                        <strong>
                            ${person.availability ? "Available" : "Busy"}
                        </strong>
                        <small>Availability</small>
                    </div>

                </div>

            </div>


            <div class="profile-section">

                <h3>Portfolio</h3>

                <div class="portfolio-grid">

                    <div class="portfolio-item">
                        Brand Identity
                    </div>

                    <div class="portfolio-item">
                        Campaign Design
                    </div>

                    <div class="portfolio-item">
                        Digital Product
                    </div>

                </div>

            </div>


            <div class="profile-actions">

                <button
                    class="btn btn-primary"
                    onclick="openMessage('${person.name}')"
                >
                    Contact Freelancer
                </button>

                <button
                    class="btn btn-outline"
                    onclick="showToast('Profile saved.')"
                >
                    ♡ Save Profile
                </button>

            </div>

        </div>

    `;


    openModal("profileModal");

}


/* =========================================================
   AUTH MODAL
========================================================= */

let selectedAccountType = "freelancer";


function openAuth(type = "login", accountType = null) {

    if (accountType) {

        selectedAccountType = accountType;

    }

    switchAuth(type);

    openModal("authModal");

}


function switchAuth(type) {

    const isLogin = type === "login";

    $("#loginForm")
        .classList.toggle("hidden", !isLogin);

    $("#signupForm")
        .classList.toggle("hidden", isLogin);


    $("#loginSwitch")
        .classList.toggle("active", isLogin);

    $("#signupSwitch")
        .classList.toggle("active", !isLogin);


    $("#authTitle").textContent =
        isLogin
            ? "Welcome Back"
            : "Create Your Account";

    $("#authSubtitle").textContent =
        isLogin
            ? "Login to continue to HIRELANCE."
            : "Join the HIRELANCE community today.";


    setAccountTypeButtons();

}


function setAccountTypeButtons() {

    $$(".account-option").forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.type === selectedAccountType
        );

        button.onclick = () => {

            selectedAccountType =
                button.dataset.type;

            setAccountTypeButtons();

        };

    });

}


/* =========================================================
   LOGIN
========================================================= */

$("#loginForm").addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const email =
            $("#loginEmail").value.trim();

        const password =
            $("#loginPassword").value;


        if (!email || !password) {

            showToast(
                "Error",
                "Please fill in all fields."
            );

            return;

        }


        const user = {

            name: email
                .split("@")[0]
                .replace(/[._-]/g, " "),

            email,

            role: selectedAccountType

        };


        localStorage.setItem(
            "hirelanceUser",
            JSON.stringify(user)
        );


        closeModal("authModal");

        showDashboard(user);

        showToast(
            "Login successful",
            `Welcome to HIRELANCE!`
        );

    }
);


/* =========================================================
   SIGNUP
========================================================= */

$("#signupForm").addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            $("#signupName").value.trim();

        const email =
            $("#signupEmail").value.trim();

        const password =
            $("#signupPassword").value;

        const confirm =
            $("#signupConfirm").value;


        if (
            !name ||
            !email ||
            !password ||
            !confirm
        ) {

            showToast(
                "Error",
                "Please complete every field."
            );

            return;

        }


        if (password.length < 6) {

            showToast(
                "Error",
                "Password must contain at least 6 characters."
            );

            return;

        }


        if (password !== confirm) {

            showToast(
                "Error",
                "Passwords do not match."
            );

            return;

        }


        const user = {

            name,
            email,

            role: selectedAccountType

        };


        localStorage.setItem(
            "hirelanceUser",
            JSON.stringify(user)
        );


        closeModal("authModal");

        showDashboard(user);

        showToast(
            "Account created",
            "Welcome to HIRELANCE!"
        );

    }
);


/* =========================================================
   DASHBOARD
========================================================= */

function showDashboard(user) {

    $("#dashboard").classList.add("active");

    document.body.classList.add("no-scroll");


    const initials =
        user.name
            .split(" ")
            .map(word => word[0])
            .join("")
            .slice(0,2)
            .toUpperCase();


    $("#dashboardName").textContent =
        capitalizeWords(user.name);

    $("#dashboardRole").textContent =
        user.role === "freelancer"
            ? "Freelancer"
            : "Employer";


    $("#dashboardAvatar").textContent =
        initials;

    $("#dashboardTopAvatar").textContent =
        initials;


    const isFreelancer =
        user.role === "freelancer";


    $("#dashboardNavPrimary").textContent =
        isFreelancer
            ? "My Gigs"
            : "My Job Posts";


    $("#quickPrimary").textContent =
        isFreelancer
            ? "Create Gig"
            : "Post a Gig";


    $("#floatingActionText").textContent =
        isFreelancer
            ? "Create Your Gig"
            : "Post a Gig";


    renderDashboardCards(user.role);

}


function renderDashboardCards(role) {

    if (role === "freelancer") {

        $("#dashboardCards").innerHTML = `

            <div class="dashboard-stat">
                <span>✦</span>
                <strong>12</strong>
                <small>Active Gigs</small>
            </div>

            <div class="dashboard-stat">
                <span>✓</span>
                <strong>87</strong>
                <small>Completed Gigs</small>
            </div>

            <div class="dashboard-stat">
                <span>₹</span>
                <strong>₹45K</strong>
                <small>Total Earnings</small>
            </div>

            <div class="dashboard-stat">
                <span>◉</span>
                <strong>24</strong>
                <small>Opportunities</small>
            </div>

        `;

    } else {

        $("#dashboardCards").innerHTML = `

            <div class="dashboard-stat">
                <span>✦</span>
                <strong>8</strong>
                <small>Active Job Posts</small>
            </div>

            <div class="dashboard-stat">
                <span>✓</span>
                <strong>31</strong>
                <small>Total Hires</small>
            </div>

            <div class="dashboard-stat">
                <span>₹</span>
                <strong>₹2.4L</strong>
                <small>Total Spending</small>
            </div>

            <div class="dashboard-stat">
                <span>◉</span>
                <strong>56</strong>
                <small>Applications</small>
            </div>

        `;

    }

}


function closeDashboard() {

    $("#dashboard").classList.remove("active");

    document.body.classList.remove("no-scroll");

}


function logout() {

    localStorage.removeItem("hirelanceUser");

    closeDashboard();

    showToast(
        "Logged out",
        "You have been logged out successfully."
    );

}


/* =========================================================
   RESTORE LOGIN
========================================================= */

function restoreSession() {

    const stored =
        localStorage.getItem("hirelanceUser");

    if (!stored) return;

    try {

        const user = JSON.parse(stored);

        /*

        We intentionally don't automatically open
        the dashboard on every page refresh.

        The stored user is available for future actions.

        */

        console.log(
            "HIRELANCE session:",
            user
        );

    } catch (error) {

        localStorage.removeItem(
            "hirelanceUser"
        );

    }

}

restoreSession();


/* =========================================================
   CONTACT FREELANCER
========================================================= */

function openMessage(name) {

    closeModal("profileModal");

    $("#messageRecipient").textContent =
        `Send a message to ${name}.`;

    $("#messageModal").dataset.recipient = name;

    openModal("messageModal");

}


$("#messageForm").addEventListener(
    "submit",
    event => {

        event.preventDefault();

        closeModal("messageModal");

        $("#messageForm").reset();

        showToast(
            "Message sent",
            "Your message has been sent successfully."
        );

    }
);


/* =========================================================
   APPLY TO GIG
========================================================= */

function applyGig(id) {

    const gig =
        gigs.find(item => item.id === id);

    if (!gig) return;


    const loggedIn =
        localStorage.getItem("hirelanceUser");


    if (!loggedIn) {

        showToast(
            "Login required",
            "Please login as a freelancer to apply."
        );

        openAuth(
            "login",
            "freelancer"
        );

        return;

    }


    const user =
        JSON.parse(loggedIn);


    if (user.role !== "freelancer") {

        showToast(
            "Freelancer account required",
            "Employers cannot apply to gigs."
        );

        return;

    }


    showToast(
        "Application submitted",
        `Your application for "${gig.title}" has been recorded.`
    );

}


/* =========================================================
   CONTACT FORM
========================================================= */

$("#contactForm").addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            $("#contactName").value.trim();

        const email =
            $("#contactEmail").value.trim();

        const subject =
            $("#contactSubject").value.trim();

        const message =
            $("#contactMessage").value.trim();


        if (
            !name ||
            !email ||
            !subject ||
            !message
        ) {

            showToast(
                "Error",
                "Please complete all contact fields."
            );

            return;

        }


        showToast(
            "Message sent",
            "Thank you! Your message has been sent successfully."
        );


        $("#contactForm").reset();

    }
);


/* =========================================================
   MODAL HELPERS
========================================================= */

function openModal(id) {

    const modal =
        document.getElementById(id);

    modal.classList.add("active");

    document.body.classList.add("no-scroll");

}


function closeModal(id) {

    const modal =
        document.getElementById(id);

    modal.classList.remove("active");

    document.body.classList.remove("no-scroll");

}


/* Click outside modal */

$$(".modal-overlay").forEach(overlay => {

    overlay.addEventListener(
        "click",
        event => {

            if (event.target === overlay) {

                overlay.classList.remove("active");

                document.body.classList.remove("no-scroll");

            }

        }
    );

});


/* ESC closes modals */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") return;

        $$(".modal-overlay.active").forEach(modal => {

            modal.classList.remove("active");

        });

        document.body.classList.remove("no-scroll");

    }
);


/* =========================================================
   TOAST
========================================================= */

let toastTimer;


function showToast(
    title = "Success",
    message = "Action completed."
) {

    $("#toastTitle").textContent =
        title;

    $("#toastMessage").textContent =
        message;


    $("#toast").classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(() => {

            $("#toast").classList.remove("show");

        }, 3500);

}


/* =========================================================
   TESTIMONIAL CAROUSEL
========================================================= */

let testimonialIndex = 0;


function renderTestimonial() {

    const testimonial =
        testimonials[testimonialIndex];


    $("#testimonialCard").innerHTML = `

        <div class="testimonial-stars">
            ${"★".repeat(testimonial.rating)}
        </div>

        <blockquote>
            “${testimonial.quote}”
        </blockquote>

        <div class="testimonial-user">

            <div class="testimonial-avatar">
                ${testimonial.avatar}
            </div>

            <div>

                <strong>
                    ${testimonial.name}
                </strong>

                <small>
                    ${testimonial.role}
                </small>

            </div>

        </div>

    `;


    $("#carouselDots").innerHTML =
        testimonials
            .map((_, index) => `

                <button
                    class="${index === testimonialIndex ? "active" : ""}"
                    onclick="goToTestimonial(${index})"
                ></button>

            `)
            .join("");

}


function nextTestimonial() {

    testimonialIndex =
        (testimonialIndex + 1) %
        testimonials.length;

    renderTestimonial();

}


function previousTestimonial() {

    testimonialIndex =
        (testimonialIndex - 1 + testimonials.length) %
        testimonials.length;

    renderTestimonial();

}


function goToTestimonial(index) {

    testimonialIndex = index;

    renderTestimonial();

}


$("#nextTestimonial")
    .addEventListener(
        "click",
        nextTestimonial
    );


$("#prevTestimonial")
    .addEventListener(
        "click",
        previousTestimonial
    );


renderTestimonial();


/* Automatic carousel */

setInterval(
    nextTestimonial,
    6000
);


/* =========================================================
   ANIMATED COUNTERS
========================================================= */

let countersStarted = false;


function animateCounters() {

    if (countersStarted) return;

    countersStarted = true;


    $$(".counter").forEach(counter => {

        const target =
            Number(counter.dataset.target);

        let current = 0;

        const increment =
            Math.max(
                1,
                Math.ceil(target / 100)
            );


        const timer =
            setInterval(() => {

                current += increment;


                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }


                counter.textContent =
                    formatNumber(current) + "+";

            }, 20);

    });

}


/* Start counters when about section enters viewport */

const counterObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    animateCounters();

                    counterObserver.disconnect();

                }

            });

        },
        {
            threshold: .25
        }
    );


const aboutSection =
    document.querySelector(".about-section");


if (aboutSection) {

    counterObserver.observe(
        aboutSection
    );

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: .1
        }
    );


$$(".reveal").forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   THEME TOGGLE
========================================================= */

const themeToggle =
    $("#themeToggle");


themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark-mode"
        );


        const dark =
            document.body.classList.contains(
                "dark-mode"
            );


        localStorage.setItem(
            "hirelanceTheme",
            dark ? "dark" : "light"
        );


        themeToggle.textContent =
            dark ? "☾" : "☼";

    }
);


/* Restore theme */

const savedTheme =
    localStorage.getItem(
        "hirelanceTheme"
    );


if (savedTheme === "dark") {

    document.body.classList.add(
        "dark-mode"
    );

    themeToggle.textContent = "☾";

}


/* =========================================================
   FLOATING ACTION BUTTON
========================================================= */

function handleFloatingAction() {

    const stored =
        localStorage.getItem("hirelanceUser");


    if (!stored) {

        openAuth("signup");

        return;

    }


    const user =
        JSON.parse(stored);


    if (user.role === "freelancer") {

        showDashboard(user);

        showToast(
            "Create a Gig",
            "Your gig creation workspace is ready."
        );

    } else {

        showDashboard(user);

        showToast(
            "Post a Gig",
            "Your job posting workspace is ready."
        );

    }

}


/* =========================================================
   HELPER
========================================================= */

function capitalizeWords(text) {

    return text
        .split(" ")
        .map(word =>
            word.charAt(0).toUpperCase() +
            word.slice(1)
        )
        .join(" ");

}


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderTopFreelancers();

        renderEmployers();

        renderGigs();

        renderDirectory();

        renderTestimonial();

        console.log(
            "HIRELANCE initialized successfully."
        );

    }
);