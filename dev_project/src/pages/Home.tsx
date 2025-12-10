import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="bg-background min-h-screen text-white font-sans overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-24 pb-20 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-8 animate-fade-in-up">
                            <h2 className="text-secondary-gold font-bold tracking-widest uppercase mb-6 text-sm md:text-base">
                                Professional Dance & Arts Center
                            </h2>
                            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold leading-[0.9] tracking-tight mb-8">
                                Discover Your <br />
                                <span className="text-gradient">Elegant Movement</span>
                            </h1>
                            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
                                Join <strong>Wu Huanran</strong> & <strong>He Bozhen</strong> to experience the art of dance.
                                From Ballroom to Ballet, we cultivate confidence and grace in a premium environment.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <Link to="/courses" className="btn btn-primary text-lg px-8 py-4">
                                    Explore Courses
                                </Link>
                                <Link to="/venue" className="btn btn-outline text-lg px-8 py-4">
                                    Visit Studio
                                </Link>
                            </div>
                        </div>

                        {/* Abstract Visual / Image Placeholder */}
                        <div className="lg:col-span-4 relative h-[50vh] lg:h-auto animate-fade-in-up delay-200 hidden lg:block">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl opacity-30 animate-pulse"></div>
                            {/* We can use a real image here later */}
                            <div className="relative z-10 w-full h-full border border-white/10 rounded-2xl overflow-hidden bg-surface/50 backdrop-blur-sm p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="h-full w-full bg-gray-800/50 rounded-xl flex items-center justify-center text-gray-500">
                                    [Hero Visual]
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bento Grid Features Section */}
            <section className="py-24 px-6 bg-surface">
                <div className="container mx-auto max-w-7xl">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Serendipity?</h2>
                        <p className="text-xl text-gray-400 max-w-xl">
                            Where Elegance Meets <br />
                            <span className="text-primary font-bold">Professional Excellence</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

                        {/* Card 1: Teachers - Large */}
                        <div className="group relative p-8 rounded-3xl bg-background border border-white/5 hover:border-primary/50 transition-colors duration-300 md:col-span-2 overflow-hidden">
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-full bg-accent-yellow/20 text-accent-yellow flex items-center justify-center text-2xl mb-6">🏆</div>
                                <h3 className="text-3xl font-bold mb-4">Champion Instructors</h3>
                                <p className="text-gray-400 text-lg max-w-md">
                                    Learn directly from Wu Huanran & He Bozhen, international competition award winners.
                                </p>
                                <Link to="/teachers" className="inline-block mt-8 text-primary font-bold hover:translate-x-2 transition-transform">
                                    Meet the Team &rarr;
                                </Link>
                            </div>
                            <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity bg-gradient-to-l from-primary to-transparent"></div>
                        </div>

                        {/* Card 2: Venue - Tall */}
                        <div className="group relative p-8 rounded-3xl bg-background border border-white/5 hover:border-accent-blue/50 transition-colors duration-300 lg:row-span-2 overflow-hidden">
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="w-12 h-12 rounded-full bg-accent-blue/20 text-accent-blue flex items-center justify-center text-2xl mb-6">💎</div>
                                <h3 className="text-3xl font-bold mb-4">Premium Facility</h3>
                                <p className="text-gray-400 text-lg mb-auto">
                                    Experience our Canadian Maple flooring, professional lighting, and luxurious lounge areas.
                                </p>
                                <Link to="/venue" className="inline-block mt-8 text-accent-blue font-bold hover:translate-x-2 transition-transform">
                                    View Venue &rarr;
                                </Link>
                            </div>
                        </div>

                        {/* Card 3: Community - Normal */}
                        <div className="group relative p-8 rounded-3xl bg-background border border-white/5 hover:border-accent-green/50 transition-colors duration-300 overflow-hidden">
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-full bg-accent-green/20 text-accent-green flex items-center justify-center text-2xl mb-6">☀️</div>
                                <h3 className="text-2xl font-bold mb-4">Thriving Community</h3>
                                <Link to="/achievements" className="text-gray-400 hover:text-white transition-colors">
                                    Parties, Events & More &rarr;
                                </Link>
                            </div>
                        </div>

                        {/* Card 4: Courses - Normal */}
                        <div className="group relative p-8 rounded-3xl bg-background border border-white/5 hover:border-accent-red/50 transition-colors duration-300 overflow-hidden">
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-full bg-accent-red/20 text-accent-red flex items-center justify-center text-2xl mb-6">💃</div>
                                <h3 className="text-2xl font-bold mb-4">Diverse Courses</h3>
                                <Link to="/courses" className="text-gray-400 hover:text-white transition-colors">
                                    Ballroom, Latin, Ballet &rarr;
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Marquee / Trust Section (Optional) */}
            <section className="py-20 border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-10">
                        Trusted by Students & Professionals
                    </p>
                    <div className="flex justify-center flex-wrap gap-12 grayscale opacity-50">
                        {/* Logos placeholders */}
                        <div className="text-2xl font-bold font-heading">ISTD</div>
                        <div className="text-2xl font-bold font-heading">WDC</div>
                        <div className="text-2xl font-bold font-heading">Blackpool Dance Festival</div>
                    </div>
                </div>
            </section>

        </div>
    );
}
