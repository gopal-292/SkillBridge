
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

function CourseDetails() {

    const { id } = useParams();

    // Enrollment state
    const [enrolled, setEnrolled] = useState(false);

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

    // Find selected course
    const course = courses.find(
        (course) => course.id === Number(id)
    );

    // Course not found
    if (!course) {
        return (
            <div className="container py-5">

                <div className="text-center">

                    <h2>Course not found</h2>

                    <p className="text-muted">
                        The course you are looking for does not exist.
                    </p>

                    <Link
                        to="/courses"
                        className="btn btn-primary"
                    >
                        Back to Courses
                    </Link>

                </div>

            </div>
        );
    }

    // Handle enrollment
    const handleEnroll = () => {
        setEnrolled(true);
    };

    return (
        <div className="container py-5">

            <div className="card shadow-sm">

                <div className="card-body p-4">

                    {/* Course Type */}

                    <span className="badge bg-primary mb-3">
                        {course.type}
                    </span>

                    {/* Course Title */}

                    <h1>{course.title}</h1>

                    {/* Course Information */}

                    <p className="text-muted">
                        {course.category} • {course.level}
                    </p>

                    <hr />

                    {/* About Course */}

                    <h4>About This Course</h4>

                    <p>
                        {course.description}
                    </p>

                    {/* Topics */}

                    <h4 className="mt-4">
                        What You Will Learn
                    </h4>

                    <ul>
                        {course.topics.map((topic) => (
                            <li key={topic}>
                                {topic}
                            </li>
                        ))}
                    </ul>

                    {/* Enrollment Section */}

                    <div className="mt-4">

                        {!enrolled ? (

                            <button
                                className="btn btn-primary"
                                onClick={handleEnroll}
                            >
                                Enroll Now
                            </button>

                        ) : (

                            <div>

                                <div className="alert alert-success">
                                    ✓ You are successfully enrolled in this course!
                                </div>

                                <Link
                                    to="/my-courses"
                                    className="btn btn-success"
                                >
                                    Go to My Courses
                                </Link>

                            </div>

                        )}

                    </div>

                </div>

            </div>

        </div>
    );
}

export default CourseDetails;
