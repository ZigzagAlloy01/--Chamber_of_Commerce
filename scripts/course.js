const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
        technology: ["Python"],
        completed: true
    },
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
        technology: ["HTML", "CSS"],
        completed: true
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
        technology: ["Python"],
        completed: true
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
        technology: ["C#"],
        completed: true
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
        technology: ["HTML", "CSS", "JavaScript"],
        completed: true
    },
    {
        subject: "WDD",
        number: 231,
        title: "Frontend Web Development I",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
        technology: ["HTML", "CSS", "JavaScript"],
        completed: false
    }
];

const courseList = document.querySelector("#course-list");
const courseSummary = document.querySelector("#course-summary");
const filterButtons = document.querySelectorAll("[data-filter]");

const createElement = (tagName, className, text) => {
    const element = document.createElement(tagName);
    if (className) {
        element.className = className;
    }
    if (text !== undefined) {
        element.textContent = text;
    }
    return element;
};

const createCourseCard = (course) => {
    const card = createElement("article", `course-card${course.completed ? " is-completed" : ""}`);
    const top = createElement("div", "course-card__top");
    const code = createElement("p", "course-code", `${course.subject} ${course.number}`);
    const status = createElement("span", "status-pill", course.completed ? "Completed" : "Not completed");
    const title = createElement("h3", "", course.title);
    const description = createElement("p", "course-description", course.description);
    const details = createElement("div", "course-card__details");
    const creditLabel = course.credits === 1 ? "credit" : "credits";
    const credits = createElement("p", "course-credits", `${course.credits} ${creditLabel}`);
    const technologyList = createElement("ul", "technology-list");

    card.dataset.subject = course.subject;
    top.append(code, status);
    course.technology.forEach((technology) => {
        technologyList.append(createElement("li", "", technology));
    });
    details.append(credits, technologyList);
    card.append(top, title, description, details);

    return card;
};

const renderCourses = (filter = "all") => {
    const visibleCourses = courses.filter((course) => filter === "all" || course.subject === filter);
    const totalCredits = visibleCourses.reduce((total, course) => total + course.credits, 0);
    const courseLabel = visibleCourses.length === 1 ? "course" : "courses";
    const creditLabel = totalCredits === 1 ? "credit" : "credits";
    const courseCards = visibleCourses.map(createCourseCard);

    courseList.replaceChildren(...courseCards);
    courseSummary.textContent = `Showing ${visibleCourses.length} ${courseLabel} · ${totalCredits} total ${creditLabel}.`;
};

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedFilter = button.dataset.filter;
        filterButtons.forEach((filterButton) => {
            const isActive = filterButton === button;
            filterButton.classList.toggle("is-active", isActive);
            filterButton.setAttribute("aria-pressed", String(isActive));
        });
        renderCourses(selectedFilter);
    });
});

renderCourses();
