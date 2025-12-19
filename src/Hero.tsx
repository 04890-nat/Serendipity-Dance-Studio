import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image Placeholder - Use a dark, elegant dance photo */}
            <div className="absolute inset-0 z-0 bg-[var(--background)]">
                <div
                    className="absolute inset-0 opacity-40 bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1546421845-6471bdcf3d81?q=80&w=2600&auto=format&fit=crop")' }} // Placeholder High-Quality Dance Image
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[var(--background)]"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8 animate-fade-in">
                <h2 className="text-[var(--primary-gold)] uppercase tracking-[0.2em] text-sm md:text-base font-semibold mb-2">
                    Professional Dance & Arts Center
                </h2>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                    Discover Your <br />
                    <span className="text-gradient">Elegant Movement</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                    Join <b>Wu Huanran</b> & <b>He Bozhen</b> to experience the art of dance.
                    From Ballroom to Ballet, we cultivate confidence and grace in a premium environment.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center pt-8">
                    <Link to="/courses" className="btn btn-primary min-w-[180px]">
                        Explore Courses
                    </Link>
                    <Link to="/contact" className="btn btn-outline min-w-[180px]">
                        Visit Studio
                    </Link>
                </div>
            </div>
        </section>
    );
}
