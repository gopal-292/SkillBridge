function Notifications() {

    const notifications = [
        {
            id: 1,
            title: "Skill Exchange Request",
            message: "Rahul accepted your Python skill exchange request.",
            time: "10 minutes ago",
            type: "success"
        },
        {
            id: 2,
            title: "Course Update",
            message: "A new lesson has been added to Python Programming.",
            time: "1 hour ago",
            type: "info"
        },
        {
            id: 3,
            title: "Live Session Reminder",
            message: "Your Java live session starts tomorrow at 6:00 PM.",
            time: "3 hours ago",
            type: "warning"
        },
        {
            id: 4,
            title: "Certificate Available",
            message: "Your Web Development certificate is ready.",
            time: "Yesterday",
            type: "success"
        }
    ];

    return (
        <div className="container py-5">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                    <h1>Notifications</h1>

                    <p className="text-muted">
                        Stay updated with your learning activities.
                    </p>
                </div>

                <button className="btn btn-outline-primary">
                    Mark All as Read
                </button>

            </div>

            <div className="card shadow-sm">

                <div className="card-body p-0">

                    {notifications.map((notification) => (

                        <div
                            key={notification.id}
                            className="p-4 border-bottom"
                        >

                            <div className="d-flex justify-content-between">

                                <div>

                                    <h5>
                                        {notification.title}
                                    </h5>

                                    <p className="mb-1 text-muted">
                                        {notification.message}
                                    </p>

                                    <small className="text-muted">
                                        {notification.time}
                                    </small>

                                </div>

                                <span
                                    className={`badge ${
                                        notification.type === "success"
                                            ? "bg-success"
                                            : notification.type === "warning"
                                            ? "bg-warning text-dark"
                                            : "bg-primary"
                                    }`}
                                >
                                    New
                                </span>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}

export default Notifications;