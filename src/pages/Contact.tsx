export default function Contact() {
    const handleLineClick = () => {
        window.open('https://line.me/R/ti/p/%40619wlsxc', '_blank');
    };

    return (
        <div className="min-h-screen pt-24 pb-12 bg-[var(--background)]">
            <div className="container mx-auto px-6 max-w-5xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gradient text-center">聯繫我們</h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-12 mb-8 text-center bg-surface/30 p-8 rounded-3xl border border-white/5">
                        <p className="text-xl text-gray-300">
                            「每一支舞都是一段故事，我們在這裡等著聽您的故事。」
                        </p>
                    </div>

                    {/* Info Section */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">聯絡資訊</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <span className="text-2xl">📍</span>
                                    <div>
                                        <h4 className="font-bold text-primary">地址</h4>
                                        <p className="text-gray-300">新竹縣竹北市光明九路 32 號 2 樓</p>
                                        <p className="text-gray-500 text-sm mt-1">(緊鄰東元醫院停車場，交通與停車極其便利)</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-2xl">📞</span>
                                    <div>
                                        <h4 className="font-bold text-primary">電話</h4>
                                        <p className="text-gray-300">室內：03-558-5581</p>
                                        <p className="text-gray-300">行動：0978-813-048 (吳老師)</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-2xl">✉️</span>
                                    <div>
                                        <h4 className="font-bold text-primary">Email</h4>
                                        <p className="text-gray-300">serendipitydance.tw@gmail.com</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-2xl">⏰</span>
                                    <div>
                                        <h4 className="font-bold text-primary">營業時間</h4>
                                        <p className="text-gray-300">每日 10:00 - 22:00 <br /><span className="text-xs text-gray-500">(課程預約請詳洽 LINE)</span></p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="pt-8 border-t border-white/10">
                            <h3 className="text-xl font-bold text-white mb-4">快速諮詢 FAQ</h3>
                            <div className="space-y-4">
                                <details className="group bg-[var(--surface)] p-4 rounded-xl cursor-pointer border border-white/5 hover:border-primary/20 transition-all">
                                    <summary className="font-medium text-gray-200 group-hover:text-primary transition-colors list-none flex justify-between items-center">
                                        如何預約吳煥然老師的私人課？
                                        <span className="rotate-0 group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <div className="mt-3 text-sm text-gray-400 leading-relaxed">
                                        請直接加入官方 LINE (@619wlsxc) 並留下您的姓名與想諮詢的舞風（摩登/拉丁），專人將根據老師課表為您安排。
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>

                    {/* Registration CTA Section */}
                    <div className="lg:col-span-7">
                        <div className="bg-surface p-10 rounded-3xl border border-white/5 relative overflow-hidden flex flex-col items-center justify-center text-center h-full">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#06C755]/10 blur-3xl rounded-full -mr-20 -mt-20"></div>

                            <div className="relative z-10 max-w-md w-full">
                                <div className="w-20 h-20 bg-[#06C755]/10 text-[#06C755] rounded-2xl flex items-center justify-center text-4xl mb-8 mx-auto">
                                    💬
                                </div>
                                <h3 className="text-3xl font-bold mb-4 text-white">官方 LINE 即時報名</h3>
                                <p className="text-gray-400 text-lg mb-10">
                                    掃描或點擊下方按鈕加入官方 LINE <br />
                                    <span className="text-[#06C755] font-mono font-bold">@619wlsxc</span>
                                </p>

                                <button
                                    onClick={handleLineClick}
                                    className="w-full bg-[#06C755] hover:bg-[#05b14c] text-white px-8 py-5 rounded-2xl font-bold text-xl transition-all shadow-xl shadow-[#06C755]/20 flex items-center justify-center gap-3 active:scale-[0.98]"
                                >
                                    立即加入 LINE 諮詢
                                </button>

                                <div className="mt-12 p-4 bg-white rounded-xl inline-block">
                                    {/* Placeholder for QR Code */}
                                    <div className="w-32 h-32 bg-gray-200 flex items-center justify-center text-gray-400 text-xs text-center p-2">
                                        QR Code <br /> @619wlsxc
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
