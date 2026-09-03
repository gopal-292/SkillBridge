function SkillExchange() {
    const users = [
        {
            name: "Rahul",
            teaches: "Python",
            wantsToLearn: "Java",
            level: "Intermediate"
        },
        {
            name: "Priya",
            teaches: "Web Development",
            wantsToLearn: "Python",
            level: "Beginner"
        },
        {
            name: "Arjun",
            teaches: "Java",
            wantsToLearn: "Data Science",
            level: "Advanced"
        },
        {
            name: "Ananya",
            teaches: "Graphic Design",
            wantsToLearn: "Web Development",
            level: "Intermediate"
        }
    ];

    return (
        <div className="container py-5">

            <div className="text-center mb-5">

                <h1>Skill Exchange</h1>

                <p className="text-muted">
                    Find people who can teach you a skill
                    and share the skills you know.
                </p>

            </div>

            <div className="row g-4">

                {users.map((user, index) => (

                    <div
                        className="col-md-6 col-lg-3"
                        key={index}
                    >

                        <div className="card h-100 shadow-sm">

                            <div className="card-body">

                                <h4>{user.name}</h4>

                                <p>
                                    <strong>Can Teach:</strong>{" "}
                                    {user.teaches}
                                </p>

                                <p>
                                    <strong>Wants to Learn:</strong>{" "}
                                    {user.wantsToLearn}
                                </p>

                                <p>
                                    <strong>Level:</strong>{" "}
                                    {user.level}
                                </p>

                                <button className="btn btn-primary w-100">
                                    Connect
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default SkillExchange;