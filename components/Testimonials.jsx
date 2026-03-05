export default function Testimonials() {
    const reviews = [
        {
            stars: 5,
            text: "VJ Furniture transformed my living room completely! The quality of their sofa is outstanding and the delivery was right on time. Highly recommend their services.",
            name: 'Priya Sharma',
            role: 'Interior Designer',
            initial: 'P',
        },
        {
            stars: 5,
            text: "I recently furnished my entire home with VJ Furniture. Their custom furniture service is incredible — every piece fits perfectly in my space. Amazing experience!",
            name: 'Rohit Mehta',
            role: 'Homeowner',
            initial: 'R',
        },
        {
            stars: 5,
            text: "The attention to detail in every piece of furniture is remarkable. From the consultation to assembly, VJ Furniture made the entire process effortless.",
            name: 'Anita Patel',
            role: 'Architect',
            initial: 'A',
        },
    ];

    return (
        <section className="testimonials">
            <div className="container">
                <h2 className="section-title section-title-center">Our Customer Reviews</h2>
                <div className="testimonial-grid">
                    {reviews.map((review, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="testimonial-stars">
                                {Array.from({ length: review.stars }).map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                            <p className="testimonial-text">&ldquo;{review.text}&rdquo;</p>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar">{review.initial}</div>
                                <div>
                                    <p className="testimonial-name">{review.name}</p>
                                    <p className="testimonial-role">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
