import classAction from '../assets/images/class-action.png';
import leoCape from '../assets/images/leo-cape.png';
import danceCouple from '../assets/images/dance-couple.png';

export default function About() {
    return (
        <div className="min-h-screen pt-24 pb-12 bg-[var(--background)]">
            <div className="container mx-auto px-6 max-w-5xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gradient text-center">關於我們</h1>

                {/* Brand Story */}
                <section className="mb-20 space-y-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                            <h2 className="text-3xl font-bold text-white relative inline-block">
                                品牌故事
                                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
                            </h2>
                            <blockquote className="border-l-4 border-primary pl-4 italic text-white/80 my-6">
                                「為成功找方法，不為失敗找藉口。」
                            </blockquote>
                            <p>
                                動見舞蹈藝術中心 (Serendipity Dance Studio) 由台灣金牌選手 <strong>吳煥然</strong> 老師創辦。
                                「動見」的含義是「在動作中看見真實的自己」，不僅是一間教室，更是吳老師傳遞「家」的溫度的藝術港灣。
                            </p>
                            <p>
                                我們座落於竹北，致力於將國標舞從運動昇華為藝術。煥然老師以專業的態度看待每一位學員，給予高強度的個別指導，在專業要求中同時如好友般親切。
                            </p>
                            <p>
                                我們的長期願景是朝向 <strong>「專業舞蹈藝術團」</strong> 發展，提供專業表演與舞蹈編排，讓國標舞展現極致的藝術美感。
                            </p>
                        </div>
                        <div className="bg-surface p-1 rounded-2xl border border-white/5 overflow-hidden aspect-video relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 flex items-end p-6">
                                <p className="text-white font-bold">動見舞蹈：在優雅中看見卓越</p>
                            </div>
                            <img
                                src={classAction}
                                alt="Studio Action"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                    </div>
                </section>

                {/* Milestones / 大事記 */}
                <section className="mb-24 py-16 border-y border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full -mr-32 -mt-32"></div>
                    <h2 className="text-3xl font-bold mb-12 text-white text-center">成長里程碑</h2>
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-white/10 hidden md:block"></div>

                        <div className="space-y-12 relative">
                            {[
                                { year: '2004', title: '開啟舞蹈生涯', desc: '吳煥然老師 6 歲開始習舞，展現過人的舞蹈天賦與對旋律的執著。' },
                                { year: '2013', title: '獲選國手資格', desc: '15 歲代表台灣出征國際賽事，取得亞洲第十名的佳績，確立職業舞者志向。' },
                                { year: '2017', title: '清華大學首位國標舞專長生', desc: '全國第一位以國標舞專長錄取國立清華大學，攻讀管理與心理雙學士位。' },
                                { year: '2021', title: '動見舞蹈藝術中心正式創立', desc: '大學畢業後於竹北成立旗艦教室，引進頂級加拿大楓木地板與教學設備。' },
                                { year: '2022-2024', title: '連任四屆全運會代表選手', desc: '蟬聯全民運動會代表資格，並晉升為台灣最年輕的國標舞職業組金牌選手。' }
                            ].map((item, index) => (
                                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="flex-1 text-center md:text-left">
                                        <div className={`p-6 rounded-2xl bg-surface/50 border border-white/5 hover:border-primary/30 transition-all ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                            <span className="text-primary font-bold text-xl mb-2 block">{item.year}</span>
                                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                            <p className="text-gray-400">{item.desc}</p>
                                        </div>
                                    </div>
                                    <div className="relative flex items-center justify-center">
                                        <div className="w-4 h-4 rounded-full bg-primary z-10 ring-4 ring-primary/20"></div>
                                    </div>
                                    <div className="flex-1 hidden md:block"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Introduction */}
                <section className="pb-12">
                    <h2 className="text-3xl font-bold mb-12 text-white text-center">核心師資</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="group bg-[var(--surface)] overflow-hidden rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500">
                            <div className="aspect-[4/5] bg-gray-900 overflow-hidden relative">
                                <img
                                    src={leoCape}
                                    alt="吳煥然 老師"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-2 text-white">吳煥然 Leo Wu</h3>
                                <p className="text-primary font-medium mb-4">創辦人 / 國立清華大學雙學士</p>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    台灣最年輕國標舞職業選手，擁有 18 年賽事經驗。擅長將藝術曲線融合於舞蹈表演中，教學風格能動能靜，深受學員信賴。
                                </p>
                                <ul className="text-sm text-gray-500 space-y-2">
                                    <li>• 十項全能金牌選手 & 專業評審教練</li>
                                    <li>• 四屆全民運動會國標舞代表選手</li>
                                    <li>• 國立清華大學 管理、心理雙專長學士</li>
                                </ul>
                            </div>
                        </div>

                        <div className="group bg-[var(--surface)] overflow-hidden rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500">
                            <div className="aspect-[4/5] bg-gray-900 overflow-hidden relative">
                                <img
                                    src={danceCouple}
                                    alt="何柏蓁 老師"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-2 text-white">何柏蓁 Bozhen He</h3>
                                <p className="text-primary font-medium mb-4">核心師資 / 資深職業舞者</p>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    專注於舞蹈美學與女性體態雕塑，與吳煥然老師共同征戰國內外各大賽事，以細膩的教學風格帶領學員展現魅力。
                                </p>
                                <ul className="text-sm text-gray-500 space-y-2">
                                    <li>• 國家職業組拉丁舞/摩登舞亞軍</li>
                                    <li>• 知名健身與舞蹈教育美學推廣者</li>
                                    <li>• 專長：社交舞、拉丁舞技術細節、雙人舞美學</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
