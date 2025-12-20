import leoCape from '../assets/images/leo-cape.png';
import danceCouple from '../assets/images/dance-couple.png';

export default function Teachers() {
    return (
        <div className="min-h-screen pt-24 pb-12 bg-[var(--background)]">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gradient text-center">教師陣容</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Wu Huanran */}
                    <div className="group bg-[var(--surface)] rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300">
                        <div className="relative h-96 overflow-hidden">
                            <img src={leoCape} alt="吳煥然 老師" className="w-full h-full object-cover object-top" />
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                                <h2 className="text-3xl font-bold text-white mb-1">吳煥然 Leo Wu</h2>
                                <p className="text-primary uppercase tracking-wider text-sm font-bold">Founder / youngest pro in taiwan</p>
                            </div>
                        </div>
                        <div className="p-8 space-y-6">
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-white">資歷與榮耀</h3>
                                <ul className="space-y-2 text-gray-400 text-sm list-disc list-inside">
                                    <li>專業國標舞評審教練 / 十項全能金牌選手</li>
                                    <li>18 年舞蹈賽事經驗，連續四屆全運會代表</li>
                                    <li>國立清華大學 管理、心理雙專長學士</li>
                                    <li>全國首位以國標舞專長錄取清華大學之學生</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-white">教學風格</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    吳老師致力於將「旋律轉化為藝術線條」。他擁有管理與心理學背景，能精準洞察學生的心理狀態與物理阻力，建立獨到的教學方法。課程中風格能動能靜，輕鬆自在卻充滿挑戰，深獲學生喜愛。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* He Bozhen */}
                    <div className="group bg-[var(--surface)] rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300">
                        <div className="relative h-96 overflow-hidden">
                            <img src={danceCouple} alt="何柏蓁 老師" className="w-full h-full object-cover object-top" />
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                                <h2 className="text-3xl font-bold text-white mb-1">何柏蓁 Bozhen He</h2>
                                <p className="text-primary uppercase tracking-wider text-sm font-bold">Co-Founder / Elite Instructor</p>
                            </div>
                        </div>
                        <div className="p-8 space-y-6">
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-white">專業經歷</h3>
                                <ul className="space-y-2 text-gray-400 text-sm list-disc list-inside">
                                    <li>資深國標舞職業組選手</li>
                                    <li>專注於舞蹈美學與身體線條雕塑</li>
                                    <li>國內外各大公開賽職業組優異成績</li>
                                    <li>致力於推廣國標舞與生活美學的結合</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-white">教學風格</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    何老師以細膩的觀察力著稱，擅長引導學生突破身體侷限。其教學方式溫柔而堅定，特別強調在舞蹈中展現自信與柔美線條，讓每位學員都能從零基礎開始體驗舞蹈的魅力。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
