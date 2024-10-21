const AboutUsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 text-center">
                {/* Header */}
                <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
                <p className="text-lg text-gray-600 mt-4">Get to know us better!</p>

                {/* About Section */}
                <section className="mt-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
                    <p className="text-gray-600 mb-8">
                        We are passionate about creating innovative solutions that meet your needs. Our goal is
                        to provide top-quality service and exceed expectations in everything we do.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default AboutUsPage;
