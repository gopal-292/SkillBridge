import { Link } from "react-router-dom";
function Mentors() {

    const mentors = [
        {
            id: 1,
            name: "Rahul Sharma",
            skill: "Python Development",
            experience: "3 Years",
            rating: "4.8"
        },
        {
            id: 2,
            name: "Priya Reddy",
            skill: "Web Development",
            experience: "4 Years",
            rating: "4.9"
        },
        {
            id: 3,
            name: "Arjun Kumar",
            skill: "Java Programming",
            experience: "5 Years",
            rating: "4.7"
        },
        {
            id: 4,
            name: "Ananya Singh",
            skill: "UI/UX Design",
            experience: "3 Years",
            rating: "4.8"
        }
    ];

    return (
        <div className="container py-5">

            <div className="text-center mb-5">

                <h1>Find a Mentor</h1>

                <p className="text-muted">
                    Learn from experienced people and improve your skills.
                </p>

            </div>

            <div className="row g-4">

                {mentors.map((mentor) => (

                    <div
                        className="col-md-6 col-lg-3"
                        key={mentor.id}
                    >

                        <div className="card h-100 shadow-sm">

                            <div className="card-body text-center">

                                <div className="mb-3">
                                    <div
                                        className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto"
                                        style={{
                                            width: "70px",
                                            height: "70px",
                                            fontSize: "25px"
                                        }}
                                    >
                                        {mentor.name.charAt(0)}
                                    </div>
                                </div>

                                <h4>{mentor.name}</h4>

                                <p className="text-primary">
                                    {mentor.skill}
                                </p>

                                <p>
                                    <strong>Experience:</strong>{" "}
                                    {mentor.experience}
                                </p>

                                <p>
                                    ⭐ {mentor.rating}
                                </p>

                                <Link
    to={`/mentors/${mentor.id}`}
    className="btn btn-outline-primary w-100"
>
    View Profile
</Link>npm run dev

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Mentors;