import classAction from '../assets/images/class-action.png';
import eventGroup from '../assets/images/event-group.png';
import eventHuddle from '../assets/images/event-huddle.png';

export default function Venue() {
    return (
        <div className="min-h-screen pt-24 pb-12 bg-[var(--background)]">
            <div className="container mx-auto px-6 max-w-5xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gradient text-center">場地與設備</h1>

                {/* Main Info */}
                <div className="bg-[var(--surface)] p-8 rounded-2xl border border-white/5 mb-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-white">動見舞蹈藝術中心</h2>
                            <p className="text-xl text-[var(--primary-gold)] font-medium">
                                新竹縣竹北市光明九路 32 號 2 樓
                            </p>
                            <p className="text-gray-400">
                                位於竹北精華地段，為您打造最舒適、專業的舞蹈學習天堂。
                            </p>
                        </div>
                        {/* Google Map Placeholder Link Button */}
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=新竹縣竹北市光明九路32號2樓"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                        >
                            在 Google Maps 上查看
                        </a>
                    </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-[var(--surface)] p-6 rounded-xl text-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="text-5xl mb-4">🩰</div>
                        <h3 className="text-xl font-bold mb-2">加拿大楓木地板</h3>
                        <p className="text-sm text-gray-400">
                            採用頂級專業舞蹈地板，提供最佳的彈性與防滑係數，保護您的關節，讓每一次跳躍都安全無虞。
                        </p>
                    </div>
                    <div className="bg-[var(--surface)] p-6 rounded-xl text-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="text-5xl mb-4">❄️</div>
                        <h3 className="text-xl font-bold mb-2">舒適冷氣空調</h3>
                        <p className="text-sm text-gray-400">
                            全室恆溫空調系統，無論四季如何更迭，教室內永遠保持最適合運動的舒適溫度。
                        </p>
                    </div>
                    <div className="bg-[var(--surface)] p-6 rounded-xl text-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="text-5xl mb-4">🚗</div>
                        <h3 className="text-xl font-bold mb-2">便利停車資訊</h3>
                        <p className="text-sm text-gray-400">
                            緊鄰「東元醫院」大型停車場，交通與停車極其便利，優雅從容地抵達。
                        </p>
                    </div>
                </div>

                {/* Gallery Placeholder */}
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-center">空間展示</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="h-64 bg-gray-800 rounded-lg overflow-hidden relative group">
                            <img src={classAction} alt="舞蹈教室" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-white font-bold">專業教室</span>
                            </div>
                        </div>
                        <div className="h-64 bg-gray-800 rounded-lg overflow-hidden relative group">
                            <img src={eventGroup} alt="休息區" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-white font-bold">舒適休息區</span>
                            </div>
                        </div>
                        <div className="h-64 bg-gray-800 rounded-lg overflow-hidden relative group">
                            <img src={eventHuddle} alt="更衣室" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-white font-bold">更衣空間</span>
                            </div>
                        </div>
                        <div className="h-64 bg-gray-800 rounded-lg overflow-hidden relative group">
                            <img src={classAction} alt="接待區" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-white font-bold">接待大廳</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
