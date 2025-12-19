export default function Teachers() {
    return (
        <div className="min-h-screen pt-24 pb-12 bg-[var(--background)]">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gradient text-center">教師陣容</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Wu Huanran */}
                    <div className="group bg-[var(--surface)] rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300">
                        <div className="relative h-96 overflow-hidden">
                            {/* Placeholder for Teacher Image */}
                            <img src="https://images.unsplash.com/photo-1552062637-642157d6051c?w=800&q=80" alt="吳煥然 老師" className="w-full h-full object-cover object-top" />
                            {/* Overlay for Name */}
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                                <h2 className="text-3xl font-bold text-white mb-1">吳煥然 老師</h2>
                                <p className="text-primary uppercase tracking-wider text-sm font-bold">Founder / Champion</p>
                            </div>
                        </div>
                        <div className="p-8 space-y-6">
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-white">冠軍榮耀 & 專業證明</h3>
                                <ul className="space-y-2 text-gray-400 text-sm list-disc list-inside">
                                    <li>國際國標舞公開賽 職業組 冠軍</li>
                                    <li>亞巡賽 台灣站 優異成績表現</li>
                                    <li>多項國內外大型賽事 評審委員</li>
                                    <li>動見舞蹈藝術中心 (Moving Insight Dance Art Center) 創辦人</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-white">教學風格</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    吳老師的教學強調『基本功』與『音樂性』的結合。他擅長用淺顯易懂的方式解析複雜的舞蹈動作，
                                    讓初學者也能輕鬆上手，並引導進階學員在舞池中展現霸氣與自信。
                                    <br /><br />
                                    在他的課堂上，你不僅學會跳舞，更學會如何成為舞池中的焦點。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* He Bozhen */}
                    <div className="group bg-[var(--surface)] rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300">
                        <div className="relative h-96 overflow-hidden">
                            {/* Placeholder for Teacher Image */}
                            <img src="https://images.unsplash.com/photo-1516475429286-465d815a0df7?w=800&q=80" alt="何柏蓁 老師" className="w-full h-full object-cover object-top" />
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                                <h2 className="text-3xl font-bold text-white mb-1">何柏蓁 老師</h2>
                                <p className="text-primary uppercase tracking-wider text-sm font-bold">Co-Founder / Top Instructor</p>
                            </div>
                        </div>
                        <div className="p-8 space-y-6">
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-white">專業經歷</h3>
                                <ul className="space-y-2 text-gray-400 text-sm list-disc list-inside">
                                    <li>國際標準舞職業選手</li>
                                    <li>資深舞蹈教育工作者</li>
                                    <li>與吳煥然老師搭檔，征戰國內外無數賽事</li>
                                    <li>動見舞蹈藝術中心 (Moving Insight Dance Art Center) 共同創辦人</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-white">教學風格</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    何老師以細膩的肢體語言與優雅的風格著稱。她特別擅長引導女性學員展現身體的柔美與線條，
                                    建立足夠的自信與魅力。
                                    <br /><br />
                                    她的教學溫柔而堅定，深受貴婦名媛喜愛，是許多學員心目中的優雅典範。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
