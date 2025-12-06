import React from "react";
import { Link } from "react-router-dom"; // optional if you're using React Router
import { FaHome } from "react-icons/fa";

const NotFound = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-primary text-white px-6">
            {/* Error Code */}
            <h1 className="text-[8rem] font-extrabold leading-none">404</h1>

            {/* Message */}
            <h2 className="text-2xl md:text-3xl font-semibold mt-2">
                Oops! Page not found
            </h2>
            <p className="text-gray-200 mt-3 max-w-md text-center">
                The page you're looking for doesn’t exist or has been moved. Please
                check the URL or return to the homepage.
            </p>

            {/* Button */}
            <div className="mt-8">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition duration-200"
                >
                    <FaHome />
                    Back to Home
                </Link>
            </div>
        </section>
    );
};

export default NotFound;
