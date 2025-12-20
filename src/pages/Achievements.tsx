export default function Achievements() {
    return (
        <div className="min-h-screen pt-24 pb-12 bg-[var(--background)]">
            <div className="container mx-auto px-6 max-w-6xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gradient text-center">榮耀時刻</h1>

                <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
                    每一次站上舞台，都是一次成長。從學員到選手，我們見證每一位舞者的努力成果與自信光芒。
                </p>

                {/* Latest Event - 3rd Anniversary */}
                <div className="mb-20 bg-surface/50 border border-primary/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 bg-primary text-white font-bold text-sm rounded-bl-xl z-10">重大活動預告</div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">🔥 動見舞蹈三週年展演 🔥</h2>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                燈光亮起、音樂響起，屬於動見的成果時刻即將展開。誠摯邀請您與我們一起創造美好回憶。
                            </p>
                            <ul className="space-y-3 mb-8 text-gray-400">
                                <li>✨ <strong>吳煥然老師、Rita 老師</strong> 冠軍選手震撼演出</li>
                                <li>🌟 優質學員精心呈現的舞台成果</li>
                                <li>🎭 精彩絕倫的貴賓演出與嘉賓表演</li>
                                <li>📅 <strong>12/28 12:30-16:30</strong> (12:00 入場)</li>
                                <li>📍 新竹縣政府大禮堂</li>
                            </ul>
                            <button
                                onClick={() => window.open('https://line.me/R/ti/p/%40619wlsxc', '_blank')}
                                className="btn btn-primary px-8"
                            >
                                立即購票諮詢
                            </button>
                        </div>
                        <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1545620853-9110499e74fd?w=800&q=80" alt="Anniversary Poster" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Competition Records Grid */}
                <div className="space-y-16">
                    {/* Event 1: 巨星盃 */}
                    <section>
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-4xl">🏆</span>
                            <h2 className="text-2xl font-bold text-white">2025 台灣巨星盃公開賽</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-surface p-8 rounded-2xl border border-white/5 h-full">
                                <h3 className="text-primary font-bold mb-4">成人與單人組傲人成績</h3>
                                <ul className="space-y-4 text-sm">
                                    <li className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="text-gray-300">陳汶伶 Rita | 成人30+單人五項（恰恰/森巴/倫巴/鬥牛/捷舞）</span>
                                        <span className="text-primary font-bold">5面金牌🥇</span>
                                    </li>
                                    <li className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="text-gray-300">曾韻璇 | 壯年A單人拉丁</span>
                                        <span className="text-primary font-bold">金牌🥇</span>
                                    </li>
                                    <li className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="text-gray-300">李尊傑 & 陳柳均 | 壯年B拉丁</span>
                                        <span className="text-primary font-bold">金牌🥇</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-surface p-8 rounded-2xl border border-white/5 h-full">
                                <h3 className="text-primary font-bold mb-4">小小舞者光芒</h3>
                                <ul className="space-y-4 text-sm">
                                    <li className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="text-gray-300">李芯 | U9單項拉丁恰恰/捷舞</span>
                                        <span className="text-primary font-bold">2面金牌🥇</span>
                                    </li>
                                    <li className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="text-gray-300">林采曈 | U9單項兩項拉丁</span>
                                        <span className="text-primary font-bold">銀牌🥈</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Event 2: 總統盃 */}
                    <section>
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-4xl">🏅</span>
                            <h2 className="text-2xl font-bold text-white">114 年總統盃國標舞大賽</h2>
                        </div>
                        <div className="bg-surface p-8 rounded-2xl border border-white/5">
                            <p className="text-gray-400 mb-6 italic">吳老師率領動見學員回到家鄉苗栗，挑戰優質賽事，一舉包辦多面獎牌！</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                                <div>
                                    <strong className="text-white block mb-2">陳汶伶 Rita</strong>
                                    <p className="text-gray-500">社會單人全能、三項、分齡單項 三冠王 🥇</p>
                                </div>
                                <div>
                                    <strong className="text-white block mb-2">曾韻璇</strong>
                                    <p className="text-gray-500">社會單人全能、三項、分齡單項 三項銀牌 🥈</p>
                                </div>
                                <div>
                                    <strong className="text-white block mb-2">林采瞳 & 李芯</strong>
                                    <p className="text-gray-500">U8 兩項/三項拉丁 多項銀牌與優勝🥈</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Video / Photo Gallery Grid */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-8">演出與比賽影音紀錄</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="group relative aspect-video bg-gray-800 rounded-xl overflow-hidden cursor-pointer" onClick={() => window.open('https://www.youtube.com/watch?v=iwdFy-iVgNQ', '_blank')}>
                                <img src="https://images.unsplash.com/photo-1516475429286-465d815a0df7?w=800&q=80" alt="2025竹北市長盃" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 text-center">
                                    <span className="text-primary text-sm font-bold mb-2">YouTube 回顧</span>
                                    <span className="text-white text-lg font-bold">🎬 2025 竹北市長盃</span>
                                </div>
                            </div>
                            <div className="group relative aspect-video bg-gray-800 rounded-xl overflow-hidden cursor-pointer" onClick={() => window.open('https://www.youtube.com/watch?v=Y0-DN9sDHtA', '_blank')}>
                                <img src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&q=80" alt="2024竹北市長盃" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 text-center">
                                    <span className="text-primary text-sm font-bold mb-2">YouTube 回顧</span>
                                    <span className="text-white text-lg font-bold">🎬 2024 竹北市長盃</span>
                                </div>
                            </div>
                            <div className="group relative aspect-video bg-gray-800 rounded-xl overflow-hidden cursor-pointer" onClick={() => window.open('https://www.youtube.com/watch?v=D2XTBT7J8Eg', '_blank')}>
                                <img src="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&q=80" alt="2023聖誕發表" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 text-center">
                                    <span className="text-primary text-sm font-bold mb-2">YouTube 回顧</span>
                                    <span className="text-white text-lg font-bold">🎬 2023 聖誕成果發表</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
