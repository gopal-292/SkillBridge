import { useParams } from "react-router-dom";

function CourseDetails() {

    const { id } = useParams();

    const courses = [
        {
            id: 1,
            title: "Python Programming",
            category: "Programming",
            level: "Beginner",
            type: "Free",
            description:
                "Learn Python programming from the basics and build a strong foundation in programming.",
            topics: [
                "Python Basics",
                "Variables and Data Types",
                "Conditional Statements",
                "Loops",
                "Functions"
            ]
        },
        {
            id: 2,
            title: "Java Programming",
            category: "Programming",
            level: "Beginner",
            type: "Premium",
            description:
                "Learn Java programming and understand object-oriented programming concepts.",
            topics: [
                "Java Basics",
                "Classes and Objects",
                "Inheritance",
                "Polymorphism",
                "Exception Handling"
            ]
        },
        {
            id: 3,
            title: "Web Development",
            category: "Web Development",
            level: "Intermediate",
            type: "Free",
            description:
                "Learn how to build modern websites using HTML, CSS and JavaScript.",
            topics: [
                "HTML",
                "CSS",
                "JavaScript",
                "Responsive Design",
                "Web Projects"
            ]
        }
    ];

    const course = courses.find(
        (course) => course.id === Number(id)
    );

    if (!course) {
        return (
            <div className="container py-5">
                <h2>Course not found</h2>
            </div>
        );
    }

    return (
        <div className="container py-5">

            <div className="card shadow-sm">

                <div className="card-body p-4">

                    <span className="badge bg-primary mb-3">
                        {course.type}
                    </span>

                    <h1>{course.title}</h1>

                    <p className="text-muted">
                        {course.category} • {course.level}
                    </p>

                    <hr />

                    <h4>About This Course</h4>

                    <p>
                        {course.description}
                    </p>

                    <h4 className="mt-4">
                        What You Will Learn
                    </h4>

                    <ul>
                        {course.topics.map((topic, index) => (
                            <li key={index}>
                                {topic}
                            </li>
                        ))}
                    </ul>

                    <button className="btn btn-primary mt-3">
                        Enroll Now
                    </button>

                </div>

            </div>

        </div>
    );
}

export default CourseDetails;