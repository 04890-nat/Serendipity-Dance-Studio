import { Link } from 'react-router-dom';
import leoCape from '../assets/images/leo-cape.png';
import danceCouple from '../assets/images/dance-couple.png';

export default function Home() {
    return (
        <div className="bg-background min-h-screen text-white font-sans overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-6 overflow-hidden">
                {/* Background Glows */}
                <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
                <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10"></div>

                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 animate-fade-in-up">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-bold uppercase tracking-widest mb-8">
                                🔥 動見三週年・12/28 校慶展演即將登場
                            </div>

                            <h1 className="text-7xl md:text-9xl font-bold leading-[0.85] tracking-tighter mb-10">
                                見證 <br />
                                <span className="text-gradient">優雅的力量</span>
                            </h1>

                            <p className="text-gray-400 text-xl md:text-2xl max-w-xl leading-relaxed mb-12 italic border-l-2 border-primary/50 pl-6">
                                「為成功找方法，不為失敗找藉口」
                            </p>

                            <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed mb-12">
                                由清大雙學士金牌選手 <strong>吳煥然</strong> 老師親自帶領。
                                在竹北最專業、最漂亮的採光空間，看見您在旋律中綻放藝術線條。
                            </p>

                            <div className="flex flex-wrap gap-6">
                                <button
                                    onClick={() => window.open('https://line.me/R/ti/p/%40619wlsxc', '_blank')}
                                    className="btn btn-primary text-xl px-10 py-5 shadow-2xl shadow-primary/40 hover:scale-105 transition-transform"
                                >
                                    立即報名 / 諮詢價格
                                </button>
                                <button
                                    onClick={() => window.open('https://www.facebook.com/SerendipityDanceStudioTW', '_blank')}
                                    className="btn btn-outline text-xl px-10 py-5 hover:bg-white/5 transition-all"
                                >
                                    追蹤最新消息
                                </button>
                            </div>
                        </div>

                        {/* Hero Image - Leo in Cape */}
                        <div className="lg:col-span-5 relative flex justify-center items-center h-full">
                            <div className="relative w-full max-w-[500px] lg:max-w-none animate-float">
                                {/* Decorative elements behind the image */}
                                <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10 transform scale-125"></div>
                                <img
                                    src={leoCape}
                                    alt="吳煥然老師"
                                    className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(102,103,171,0.5)] transform hover:scale-105 transition-transform duration-700 pointer-events-none"
                                />
                            </div>
                        </div>
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
