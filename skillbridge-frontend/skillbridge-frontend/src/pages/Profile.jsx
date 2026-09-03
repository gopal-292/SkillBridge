function Profile() {

    return (
        <div className="container py-5">

            <div className="row g-4">

                {/* Profile Information */}

                <div className="col-lg-4">

                    <div className="card shadow-sm">

                        <div className="card-body text-center">

                            <div
                                className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    fontSize: "36px"
                                }}
                            >
                                S
                            </div>

                            <h2>Saniya</h2>

                            <p className="text-muted">
                                Computer Science Student
                            </p>

                            <p>
                                Passionate about programming,
                                web development and learning new skills.
                            </p>

                            <button className="btn btn-outline-primary">
                                Edit Profile
                            </button>

                        </div>

                    </div>

                </div>

                {/* Skills */}

                <div className="col-lg-8">

                    <div className="card shadow-sm mb-4">

                        <div className="card-body">

                            <h3 className="mb-4">
                                My Skills
                            </h3>

                            <span className="badge bg-primary me-2 mb-2 p-2">
                                Java
                            </span>

                            <span className="badge bg-primary me-2 mb-2 p-2">
                                Python
                            </span>

                            <span className="badge bg-primary me-2 mb-2 p-2">
                                React
                            </span>

                            <span className="badge bg-primary me-2 mb-2 p-2">
                                Spring Boot
                            </span>

                            <span className="badge bg-primary me-2 mb-2 p-2">
                                MySQL
                            </span>

                        </div>

                    </div>

                    {/* Skills I Want to Learn */}

                    <div className="card shadow-sm">

                        <div className="card-body">

                            <h3 className="mb-4">
                                Skills I Want to Learn
                            </h3>

                            <span className="badge bg-success me-2 mb-2 p-2">
                                Machine Learning
                            </span>

                            <span className="badge bg-success me-2 mb-2 p-2">
                                Data Science
                            </span>

                            <span className="badge bg-success me-2 mb-2 p-2">
                                AWS
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Profile;