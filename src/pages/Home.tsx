import { Link } from 'react-router-dom';
import leoCape from '../assets/images/leo-cape.png';
import danceCouple from '../assets/images/dance-couple.png';

export default function Home() {
    return (
        <div className="bg-background min-h-screen text-white font-sans overflow-x-hidden">

            {/* Cinematic Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden bg-[#050508]">
                {/* Background Artistic Elements - Professional Depth */}
                <div className="absolute top-0 right-0 w-[60vw] h-full bg-gradient-to-l from-primary/20 via-primary/5 to-transparent -z-10"></div>
                <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[180px] -z-10 animate-pulse"></div>

                {/* Large Background Text Decoration */}
                <div className="absolute top-[10%] left-[-5%] text-[25vw] font-black text-white/[0.02] leading-none select-none pointer-events-none -z-20 uppercase tracking-tighter">
                    Dance
                </div>

                <div className="container mx-auto max-w-[1500px] relative z-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center min-h-[90vh]">

                        {/* Left Side: Dramatic Typography */}
                        <div className="lg:col-span-9 z-30 pointer-events-none">
                            <div className="animate-fade-in-up space-y-12">
                                <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-primary text-sm font-bold uppercase tracking-[0.4em] shadow-xl">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                    </span>
                                    三週年・12/28 展演榮耀登場
                                </div>

                                <div className="relative">
                                    <h1 className="text-[7rem] md:text-[13rem] font-black leading-[0.8] tracking-tighter">
                                        見證 <br />
                                        <span className="text-primary italic font-serif relative">
                                            優雅
                                            <span className="absolute -bottom-4 left-0 w-full h-2 bg-primary/30 blur-sm"></span>
                                        </span>
                                        <br />
                                        <span className="block mt-4">的力量</span>
                                    </h1>
                                </div>

                                <div className="max-w-2xl space-y-10 pt-10 pointer-events-auto">
                                    <div className="relative pl-10 border-l-[6px] border-primary">
                                        <p className="text-3xl md:text-4xl font-light text-white/90 leading-tight tracking-wide">
                                            「為成功找方法，<br />
                                            <span className="ml-8">不為失敗找藉口」</span>
                                        </p>
                                    </div>

                                    <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-xl font-light">
                                        清華大學雙學士・金牌選手 <strong className="text-white font-bold underline decoration-primary underline-offset-8">吳煥然</strong> 老師親領。<br />
                                        在竹北最頂級的藝術殿堂，開啟您的優雅序章。
                                    </p>

                                    <div className="flex flex-wrap gap-8 pt-6">
                                        <button
                                            onClick={() => window.open('https://line.me/R/ti/p/%40619wlsxc', '_blank')}
                                            className="group relative px-12 py-6 bg-primary text-white rounded-full font-bold text-2xl overflow-hidden transition-all hover:pr-16 active:scale-95 shadow-[0_20px_50px_rgba(102,103,171,0.4)]"
                                        >
                                            <span className="relative z-10">立即報名 / 諮詢價格</span>
                                            <span className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all text-3xl">→</span>
                                        </button>
                                        <button
                                            onClick={() => window.open('https://www.facebook.com/SerendipityDanceStudioTW', '_blank')}
                                            className="px-12 py-6 border-2 border-white/10 rounded-full font-bold text-2xl hover:bg-white/5 hover:border-white/40 transition-all backdrop-blur-sm"
                                        >
                                            追蹤最新動態
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Monumental Profile Image */}
                        <div className="lg:col-span-3 lg:absolute lg:right-[-10%] lg:bottom-0 lg:h-full w-full flex items-end justify-center z-10 pointer-events-none">
                            <div className="relative h-full w-full flex items-end justify-center">
                                {/* Large Artistic Backdrop for Image */}
                                <div className="absolute bottom-[10%] right-[10%] w-[150%] h-[70%] bg-gradient-to-tr from-primary/30 to-transparent rounded-full blur-[150px] -z-10 opacity-60 animate-pulse"></div>

                                <img
                                    src={leoCape}
                                    alt="吳煥然老師"
                                    className="h-[110%] w-auto object-contain object-bottom drop-shadow-[0_0_100px_rgba(102,103,171,0.5)] transform scale-[1.4] origin-bottom animate-fade-in transition-transform duration-1000"
                                />

                                {/* Vertical Branding Text */}
                                <div className="absolute top-[15%] right-[15%] flex flex-col items-center gap-10">
                                    <div className="w-[1px] h-32 bg-gradient-to-t from-primary to-transparent"></div>
                                    <div className="text-white/10 font-black text-9xl [writing-mode:vertical-rl] tracking-[0.2em] transform rotate-180 select-none">
                                        LEO WU ART DANCE
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Aesthetic Corner Ornaments */}
                <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-primary/20 -z-10"></div>
                <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-primary/20 -z-10"></div>

                {/* Animated Scroll indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
                    <div className="w-6 h-10 border-2 border-white/20 rounded-full relative">
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
                    </div>
                </div>
            </section>

            {/* Bento Grid Features Section */}
            <section className="py-32 px-6 bg-surface/30">
                <div className="container mx-auto max-w-7xl">
                    <div className="mb-20 text-center">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">為什麼選擇動見？</h2>
                        <div className="w-24 h-1 bg-primary mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[minmax(350px,auto)]">

                        {/* Card 1: Teachers - Large */}
                        <div className="group relative p-10 rounded-3xl bg-background border border-white/5 hover:border-primary/50 transition-all duration-500 md:col-span-2 overflow-hidden flex flex-col justify-end min-h-[450px]">
                            <div className="relative z-10">
                                <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Gold Medalist Team</span>
                                <h3 className="text-4xl font-bold mb-6">清大雙學士・金牌師資</h3>
                                <p className="text-gray-400 text-lg max-w-md mb-8">
                                    吳煥然老師以最嚴謹、專業的「學院派」邏輯，對待每一位學生如朋友般親切，並給予最高強度的個別指導。
                                </p>
                                <Link to="/teachers" className="inline-flex items-center gap-2 text-primary font-bold hover:translate-x-2 transition-transform">
                                    了解煥然老師的舞蹈藝術 &rarr;
                                </Link>
                            </div>
                            <div className="absolute right-[-10%] bottom-0 w-[60%] opacity-5 mix-blend-overlay group-hover:opacity-20 transition-opacity">
                                <img src={leoCape} alt="Leo Background" className="w-full h-auto grayscale" />
                            </div>
                        </div>

                        {/* Card 2: Venue - Tall */}
                        <div className="group relative p-10 rounded-3xl bg-background border border-white/5 hover:border-accent-blue/50 transition-all duration-500 lg:row-span-2 overflow-hidden">
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="w-14 h-14 rounded-2xl bg-accent-blue/20 text-accent-blue flex items-center justify-center text-3xl mb-8">💎</div>
                                <h3 className="text-3xl font-bold mb-6">竹北核心最美場地</h3>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    專業加拿大楓木地板、頂級劇院級音響系統。位於東元醫院停車場旁，讓您每一次跳舞都不再為交通操心。
                                </p>
                                <div className="mt-auto">
                                    <ul className="text-gray-400 text-sm space-y-4 mb-8">
                                        <li className="flex items-center gap-3">
                                            <span className="text-accent-blue">✓</span> 透明採光大空間
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="text-accent-blue">✓</span> 一站式鞋服代購服務
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="text-accent-blue">✓</span> 家長舒壓休息區
                                        </li>
                                    </ul>
                                    <Link to="/contact" className="btn btn-outline border-white/10 w-full justify-center">聯繫與預約 &rarr;</Link>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Performance Image - Real Action */}
                        <div className="group relative p-0 rounded-3xl bg-background border border-white/5 hover:border-primary/50 transition-all duration-500 md:col-span-2 overflow-hidden min-h-[400px]">
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
                            <img
                                src={danceCouple}
                                alt="Dancing Couple"
                                className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 opacity-60"
                            />
                            <div className="relative z-20 p-10 h-full flex flex-col justify-end">
                                <h3 className="text-3xl font-bold mb-4">邁向專業藝術殿堂</h3>
                                <p className="text-gray-400 max-w-sm mb-6">
                                    我們不僅是教室，更是專業舞蹈藝術團。歡迎展演活動邀請、商演合作與專案編舞。
                                </p>
                                <Link to="/achievements" className="text-primary font-bold hover:translate-x-2 transition-transform">
                                    查看最新成績與影音 &rarr;
                                </Link>
                            </div>
                        </div>

                        {/* Card 4: Equipment / Service - Normal */}
                        <div className="group relative p-10 rounded-3xl bg-background border border-white/10 hover:border-accent-green/50 transition-all duration-500 overflow-hidden">
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-full bg-accent-green/20 text-accent-green flex items-center justify-center text-2xl mb-6">🛋️</div>
                                <h3 className="text-2xl font-bold mb-4">如同家一般的放鬆</h3>
                                <p className="text-gray-500 text-sm">
                                    淋浴空間、高級廁所與家長休息區。我們照顧每一位舞者與陪同者的感受。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Vision Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10"></div>
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 italic">「動見您的藝術之魂」</h2>
                    <p className="text-gray-400 text-xl leading-relaxed mb-12">
                        加入動見，體驗不一樣的舞蹈教育。從零基礎入門到金牌選手巔峰，在專業與溫度的陪伴下，成就最閃耀的自己。
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-8">
                        <button
                            onClick={() => window.open('https://line.me/R/ti/p/%40619wlsxc', '_blank')}
                            className="btn btn-primary px-12 py-5 text-xl flex items-center justify-center gap-2"
                        >
                            <span>立即與老師諮詢</span>
                            <span className="text-2xl">💬</span>
                        </button>
                        <Link to="/courses" className="btn btn-outline px-12 py-5 text-xl flex items-center justify-center gap-2">
                            <span>瀏覽各舞種課程表</span>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
