function Dashboard() {

    const enrolledCourses = [
        {
            title: "Python Programming",
            progress: 70
        },
        {
            title: "Web Development",
            progress: 40
        }
    ];

    return (
        <div className="container py-5">

            {/* Welcome Section */}

            <div className="mb-5">

                <h1>Welcome to SkillBridge 👋</h1>

                <p className="text-muted">
                    Continue learning and improve your skills.
                </p>

            </div>

            {/* Statistics */}

            <div className="row g-4 mb-5">

                <div className="col-md-4">

                    <div className="card shadow-sm">
                        <div className="card-body">

                            <h6 className="text-muted">
                                Enrolled Courses
                            </h6>

                            <h2>2</h2>

                        </div>
                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card shadow-sm">
                        <div className="card-body">

                            <h6 className="text-muted">
                                Skills Learning
                            </h6>

                            <h2>3</h2>

                        </div>
                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card shadow-sm">
                        <div className="card-body">

                            <h6 className="text-muted">
                                Certificates
                            </h6>

                            <h2>1</h2>

                        </div>
                    </div>

                </div>

            </div>

            {/* Courses */}

            <h3 className="mb-4">
                Continue Learning
            </h3>

            <div className="row g-4">

                {enrolledCourses.map((course, index) => (

                    <div
                        className="col-md-6"
                        key={index}
                    >

                        <div className="card shadow-sm">

                            <div className="card-body">

                                <h4>{course.title}</h4>

                                <p className="text-muted">
                                    Course Progress
                                </p>

                                <div className="progress mb-3">

                                    <div
                                        className="progress-bar"
                                        style={{
                                            width: `${course.progress}%`
                                        }}
                                    >
                                        {course.progress}%
                                    </div>

                                </div>

                                <button className="btn btn-primary">
                                    Continue Learning
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Dashboard;