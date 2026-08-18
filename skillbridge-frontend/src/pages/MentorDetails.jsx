import { useParams } from "react-router-dom";

function MentorDetails() {

    const { id } = useParams();

    const mentors = [
        {
            id: 1,
            name: "Rahul Sharma",
            skill: "Python Development",
            experience: "3 Years",
            rating: "4.8",
            description:
                "Python developer who enjoys helping students learn programming and problem solving.",
            skills: [
                "Python",
                "Flask",
                "Problem Solving",
                "SQL"
            ]
        },
        {
            id: 2,
            name: "Priya Reddy",
            skill: "Web Development",
            experience: "4 Years",
            rating: "4.9",
            description:
                "Full-stack developer passionate about teaching modern web development.",
            skills: [
                "HTML",
                "CSS",
                "JavaScript",
                "React"
            ]
        },
        {
            id: 3,
            name: "Arjun Kumar",
            skill: "Java Programming",
            experience: "5 Years",
            rating: "4.7",
            description:
                "Java developer focused on object-oriented programming and backend development.",
            skills: [
                "Java",
                "Spring Boot",
                "MySQL",
                "REST API"
            ]
        },
        {
            id: 4,
            name: "Ananya Singh",
            skill: "UI/UX Design",
            experience: "3 Years",
            rating: "4.8",
            description:
                "UI/UX designer who helps learners understand design principles and user experience.",
            skills: [
                "Figma",
                "UI Design",
                "UX Research",
                "Prototyping"
            ]
        }
    ];

    const mentor = mentors.find(
        (mentor) => mentor.id === Number(id)
    );

    if (!mentor) {
        return (
            <div className="container py-5">
                <h2>Mentor not found</h2>
            </div>
        );
    }

    return (
        <div className="container py-5">

            <div className="card shadow-sm">

                <div className="card-body p-4">

                    <div className="text-center">

                        <div
                            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                            style={{
                                width: "90px",
                                height: "90px",
                                fontSize: "32px"
                            }}
                        >
                            {mentor.name.charAt(0)}
                        </div>

                        <h1>{mentor.name}</h1>

                        <p className="text-primary fs-5">
                            {mentor.skill}
                        </p>

                        <p>
                            ⭐ {mentor.rating}
                        </p>

                    </div>

                    <hr />

                    <h4>About the Mentor</h4>

                    <p>
                        {mentor.description}
                    </p>

                    <h4 className="mt-4">
                        Experience
                    </h4>

                    <p>
                        {mentor.experience}
                    </p>

                    <h4 className="mt-4">
                        Skills
                    </h4>

                    <div>
                        {mentor.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="badge bg-light text-dark border me-2 mb-2 p-2"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    <button className="btn btn-primary mt-4">
                        Request Skill Exchange
                    </button>

                </div>

            </div>

        </div>
    );
}

export default MentorDetails;