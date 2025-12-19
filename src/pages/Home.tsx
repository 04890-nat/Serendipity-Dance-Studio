import { Link } from 'react-router-dom';
import teacherHero from '../assets/images/hero-teacher.png';

export default function Home() {
    return (
        <div className="bg-background min-h-screen text-white font-sans overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-24 pb-20 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-8 animate-fade-in-up">
                            <h2 className="text-primary font-bold tracking-widest uppercase mb-6 text-sm md:text-base">
                                「Serendipity Dance Studio」
                            </h2>
                            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold leading-[0.9] tracking-tight mb-8">
                                動見舞蹈 <br />
                                <span className="text-gradient">藝術中心</span>
                            </h1>
                            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
                                加入 <strong>吳煥然</strong> 與 <strong>何柏蓁</strong> 老師的行列，體驗舞蹈藝術之美。
                                從國標舞到芭蕾，我們在頂級的環境中培養自信與優雅。
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <Link to="/courses" className="btn btn-primary text-lg px-8 py-4">
                                    探索課程
                                </Link>
                                <Link to="/venue" className="btn btn-outline text-lg px-8 py-4">
                                    參觀教室
                                </Link>
                            </div>
                        </div>

                        {/* Abstract Visual / Image Placeholder */}
                        <div className="lg:col-span-4 relative h-[50vh] lg:h-auto animate-fade-in-up delay-200 hidden lg:block">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl opacity-30 animate-pulse"></div>
                            {/* We can use a real image here later */}
                            <div className="relative z-10 w-full aspect-square border border-white/10 rounded-full overflow-hidden bg-surface/50 backdrop-blur-sm p-2 transform transition-transform duration-500 hover:scale-105">
                                <div className="h-full w-full rounded-full flex items-center justify-center overflow-hidden bg-gradient-to-tr from-primary/10 to-transparent">
                                    <img
                                        src={teacherHero}
                                        alt="吳煥然老師"
                                        className="w-full h-full object-cover animate-slow-spin"
                                        style={{ maskImage: 'radial-gradient(circle, black 60%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)' }}
                                    />
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
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">為什麼選擇動見舞蹈？</h2>
                        <p className="text-xl text-gray-400 max-w-xl">
                            當優雅遇見 <br />
                            <span className="text-primary font-bold">專業卓越</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

                        {/* Card 1: Teachers - Large */}
                        <div className="group relative p-8 rounded-3xl bg-background border border-white/5 hover:border-primary/50 transition-colors duration-300 md:col-span-2 overflow-hidden">
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-full bg-accent-yellow/20 text-accent-yellow flex items-center justify-center text-2xl mb-6">🏆</div>
                                <h3 className="text-3xl font-bold mb-4">冠軍師資陣容</h3>
                                <p className="text-gray-400 text-lg max-w-md">
                                    直接跟隨國際賽事獲獎者吳煥然 & 何柏蓁老師學習。
                                </p>
                                <Link to="/teachers" className="inline-block mt-8 text-primary font-bold hover:translate-x-2 transition-transform">
                                    認識團隊 &rarr;
                                </Link>
                            </div>
                            <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity bg-gradient-to-l from-primary to-transparent"></div>
                        </div>

                        {/* Card 2: Venue - Tall */}
                        <div className="group relative p-8 rounded-3xl bg-background border border-white/5 hover:border-accent-blue/50 transition-colors duration-300 lg:row-span-2 overflow-hidden">
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="w-12 h-12 rounded-full bg-accent-blue/20 text-accent-blue flex items-center justify-center text-2xl mb-6">💎</div>
                                <h3 className="text-3xl font-bold mb-4">頂級場地設施</h3>
                                <p className="text-gray-400 text-lg mb-auto">
                                    體驗我們的加拿大楓木地板、專業燈光以及奢華的休息區域。
                                </p>
                                <Link to="/venue" className="inline-block mt-8 text-accent-blue font-bold hover:translate-x-2 transition-transform">
                                    查看場地 &rarr;
                                </Link>
                            </div>
                        </div>

                        {/* Card 3: Community - Normal */}
                        <div className="group relative p-8 rounded-3xl bg-background border border-white/5 hover:border-accent-green/50 transition-colors duration-300 overflow-hidden">
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-full bg-accent-green/20 text-accent-green flex items-center justify-center text-2xl mb-6">☀️</div>
                                <h3 className="text-2xl font-bold mb-4">蓬勃發展的社群</h3>
                                <Link to="/achievements" className="text-gray-400 hover:text-white transition-colors">
                                    派對、活動及更多 &rarr;
                                </Link>
                            </div>
                        </div>

                        {/* Card 4: Courses - Normal */}
                        <div className="group relative p-8 rounded-3xl bg-background border border-white/5 hover:border-accent-red/50 transition-colors duration-300 overflow-hidden">
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-full bg-accent-red/20 text-accent-red flex items-center justify-center text-2xl mb-6">💃</div>
                                <h3 className="text-2xl font-bold mb-4">多元豐富課程</h3>
                                <Link to="/courses" className="text-gray-400 hover:text-white transition-colors">
                                    國標舞、拉丁舞、芭蕾及更多 &rarr;
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
                        學生與專業人士的信賴首選
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
