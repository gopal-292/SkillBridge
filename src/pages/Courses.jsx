
import { useState } from "react";
import { Link } from "react-router-dom";

function Courses() {

    // Search and filter states
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [level, setLevel] = useState("");
    const [type, setType] = useState("");

    // Course data
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

    // Filter courses
    const filteredCourses = courses.filter((course) => {

        const matchesSearch =
            course.title
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesCategory =
            category === "" ||
            course.category === category;

        const matchesLevel =
            level === "" ||
            course.level === level;

        const matchesType =
            type === "" ||
            course.type === type;

        return (
            matchesSearch &&
            matchesCategory &&
            matchesLevel &&
            matchesType
        );
    });

    // Clear all filters
    const clearFilters = () => {
        setSearch("");
        setCategory("");
        setLevel("");
        setType("");
    };

    return (
        <div className="container py-5">

            {/* Page Heading */}

            <div className="text-center mb-5">

                <h1>Explore Courses</h1>

                <p className="text-muted">
                    Learn new skills from mentors and grow your career.
                </p>

            </div>

            {/* Search */}

            <div className="row mb-4">

                <div className="col-md-8 mx-auto">

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search courses..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </div>

            </div>

            {/* Filters */}

            <div className="row g-3 mb-4">

                {/* Category */}

                <div className="col-md-4">

                    <select
                        className="form-select"
                        value={category}
                        onChange={(e) =>
                            setCategory(e.target.value)
                        }
                    >

                        <option value="">
                            All Categories
                        </option>

                        <option value="Programming">
                            Programming
                        </option>

                        <option value="Web Development">
                            Web Development
                        </option>

                        <option value="Data Science">
                            Data Science
                        </option>

                    </select>

                </div>

                {/* Level */}

                <div className="col-md-4">

                    <select
                        className="form-select"
                        value={level}
                        onChange={(e) =>
                            setLevel(e.target.value)
                        }
                    >

                        <option value="">
                            All Levels
                        </option>

                        <option value="Beginner">
                            Beginner
                        </option>

                        <option value="Intermediate">
                            Intermediate
                        </option>

                        <option value="Advanced">
                            Advanced
                        </option>

                    </select>

                </div>

                {/* Type */}

                <div className="col-md-4">

                    <select
                        className="form-select"
                        value={type}
                        onChange={(e) =>
                            setType(e.target.value)
                        }
                    >

                        <option value="">
                            All Types
                        </option>

                        <option value="Free">
                            Free
                        </option>

                        <option value="Premium">
                            Premium
                        </option>

                    </select>

                </div>

            </div>

            {/* Clear Filters */}

            <div className="text-center mb-5">

                <button
                    className="btn btn-outline-secondary"
                    onClick={clearFilters}
                >
                    Clear Filters
                </button>

            </div>

            {/* Course Results */}

            <div className="row g-4">

                {filteredCourses.length > 0 ? (

                    filteredCourses.map((course) => (

                        <div
                            className="col-md-6 col-lg-3"
                            key={course.id}
                        >

                            <div className="card h-100 shadow-sm">

                                <div className="card-body">

                                    {/* Course Type */}

                                    <span className="badge bg-primary mb-3">
                                        {course.type}
                                    </span>

                                    {/* Course Title */}

                                    <h4>
                                        {course.title}
                                    </h4>

                                    {/* Category */}

                                    <p className="text-muted">
                                        {course.category}
                                    </p>

                                    {/* Level */}

                                    <p>
                                        Level: {course.level}
                                    </p>

                                    {/* View Course */}

                                    <Link
                                        to={`/courses/${course.id}`}
                                        className="btn btn-outline-primary w-100"
                                    >
                                        View Course
                                    </Link>

                                </div>

                            </div>

                        </div>

                    ))

                ) : (

                    /* No Courses */

                    <div className="col-12 text-center">

                        <h4>
                            No courses found
                        </h4>

                        <p className="text-muted">
                            Try changing your search or filters.
                        </p>

                    </div>

                )}

            </div>

        </div>
    );
}

export default Courses;
