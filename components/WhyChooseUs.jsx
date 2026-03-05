export default function WhyChooseUs() {
    const reasons = [
        {
            icon: '⚙️',
            label: 'Rule 1',
            text: 'Best craftsmanship machines on the market!',
        },
        {
            icon: '✨',
            label: 'Rule 2',
            text: 'Highest quality materials, handpicked with care!',
        },
        {
            icon: '🎯',
            label: 'Rule 3',
            text: 'Details are what make the difference!',
        },
    ];

    return (
        <section className="why-us">
            <div className="container">
                <h2 className="section-title section-title-center">Why VJ Furniture?</h2>
                <div className="why-us-grid">
                    {reasons.map((reason, index) => (
                        <div key={index} className="why-card">
                            <div className="why-icon">{reason.icon}</div>
                            <div>
                                <p className="why-label">{reason.label}</p>
                                <p className="why-text">{reason.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
