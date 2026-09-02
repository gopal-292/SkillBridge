
import { Link } from "react-router-dom";

function MyCourses() {

    const courses = [
        {
            id: 1,
            title: "Python Programming",
            instructor: "Rahul Sharma",
            progress: 70,
            status: "In Progress"
        },
        {
            id: 3,
            title: "Web Development",
            instructor: "Priya Reddy",
            progress: 40,
            status: "In Progress"
        },
        {
            id: 4,
            title: "Data Science",
            instructor: "Arjun Kumar",
            progress: 100,
            status: "Completed"
        }
    ];

    return (
        <div className="container py-5">

            {/* Page Heading */}

            <div className="mb-5">

                <h1>My Courses</h1>

                <p className="text-muted">
                    Track your enrolled courses and learning progress.
                </p>

            </div>

            {/* Course Cards */}

            <div className="row g-4">

                {courses.map((course) => (

                    <div
                        className="col-md-6 col-lg-4"
                        key={course.id}
                    >

                        <div className="card h-100 shadow-sm">

                            <div className="card-body">

                                {/* Course Status */}

                                <span
                                    className={`badge ${
                                        course.status === "Completed"
                                            ? "bg-success"
                                            : "bg-primary"
                                    } mb-3`}
                                >
                                    {course.status}
                                </span>

                                {/* Course Title */}

                                <h4>
                                    {course.title}
                                </h4>

                                {/* Instructor */}

                                <p className="text-muted">
                                    Instructor: {course.instructor}
                                </p>

                                {/* Progress */}

                                <p className="mb-2">
                                    Progress: {course.progress}%
                                </p>

                                <div className="progress mb-4">

                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{
                                            width: `${course.progress}%`
                                        }}
                                        aria-valuenow={course.progress}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        {course.progress}%
                                    </div>

                                </div>

                                {/* Action Button */}

                                {course.progress === 100 ? (

                                    <button
                                        className="btn btn-success w-100"
                                    >
                                        View Certificate
                                    </button>

                                ) : (

                                    <Link
                                        to={`/courses/${course.id}`}
                                        className="btn btn-primary w-100"
                                    >
                                        Continue Learning
                                    </Link>

                                )}

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default MyCourses;
