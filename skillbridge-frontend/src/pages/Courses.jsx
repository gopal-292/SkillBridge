import { Link } from "react-router-dom";
function Courses() {
    const courses = [
    {
        id: 1,
        title: "Python Programming",
        category: "Programming",
        level: "Beginner",
        type: "Free"
    },
    {
        id: 2,
        title: "Java Programming",
        category: "Programming",
        level: "Beginner",
        type: "Premium"
    },
    {
        id: 3,
        title: "Web Development",
        category: "Web Development",
        level: "Intermediate",
        type: "Free"
    },
    {
        id: 4,
        title: "Data Science",
        category: "Data Science",
        level: "Intermediate",
        type: "Premium"
    }
];

    return (
        <div className="container py-5">

            <div className="text-center mb-5">

                <h1>Explore Courses</h1>

                <p className="text-muted">
                    Learn new skills from mentors and grow your career.
                </p>

            </div>

            <div className="row g-4">

                {courses.map((course, index) => (

                    <div className="col-md-6 col-lg-3" key={index}>

                        <div className="card h-100 shadow-sm">

                            <div className="card-body">

                                <span className="badge bg-primary mb-3">
                                    {course.type}
                                </span>

                                <h4>{course.title}</h4>

                                <p className="text-muted">
                                    {course.category}
                                </p>

                                <p>
                                    Level: {course.level}
                                </p>

                                <Link
    to={`/courses/${course.id}`}
    className="btn btn-outline-primary w-100"
>
    View Course
</Link>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Courses;