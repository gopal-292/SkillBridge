function ExchangeRequest() {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Exchange request sent successfully!");
    };

    return (
        <div className="container py-5">

            <div className="auth-container">

                <h2 className="text-center mb-2">
                    Skill Exchange Request
                </h2>

                <p className="text-center text-muted mb-4">
                    Send a request to connect with this mentor.
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label className="form-label">
                            Skill You Want to Learn
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Example: Python"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Skill You Can Teach
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Example: Java"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Message
                        </label>

                        <textarea
                            className="form-control"
                            rows="5"
                            placeholder="Introduce yourself and explain what you want to learn..."
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                    >
                        Send Request
                    </button>

                </form>

            </div>

        </div>
    );
}

export default ExchangeRequest;