function Home() {
    return (
        <>

            {/* Hero Section */}
            <section className="container text-center py-5">

                <h1 className="display-4 fw-bold">
                    Learn. Teach. Connect.
                </h1>

                <p className="lead mt-3">
                    SkillBridge connects learners and mentors
                    through collaborative learning and skill exchange.
                </p>

                <div className="mt-4">

                    <button className="btn btn-primary me-2">
                        Start Learning
                    </button>

                    <button className="btn btn-outline-primary">
                        Share Your Skills
                    </button>

                </div>

            </section>


            {/* Features */}
            <section className="container py-5">

                <div className="row g-4">

                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body text-center">

                                <h3>Skill Exchange</h3>

                                <p>
                                    Exchange your skills with other
                                    learners and grow together.
                                </p>

                            </div>
                        </div>
                    </div>


                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body text-center">

                                <h3>Online Courses</h3>

                                <p>
                                    Learn from free and premium courses
                                    created by mentors.
                                </p>

                            </div>
                        </div>
                    </div>


                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body text-center">

                                <h3>Mentorship</h3>

                                <p>
                                    Connect with mentors and improve
                                    your professional skills.
                                </p>

                            </div>
                        </div>
                    </div>

                </div>

            </section>

        </>
    );
}

export default Home;