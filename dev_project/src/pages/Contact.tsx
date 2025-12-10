export default function Contact() {
    return (
        <div className="min-h-screen pt-24 pb-12 bg-[var(--background)]">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gradient text-center">聯繫我們</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Info Section */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">聯絡資訊</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <span className="text-2xl">📍</span>
                                    <div>
                                        <h4 className="font-bold text-[var(--primary-gold)]">地址</h4>
                                        <p className="text-gray-300">新竹縣竹北市光明九路 32 號 2 樓</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-2xl">📞</span>
                                    <div>
                                        <h4 className="font-bold text-[var(--primary-gold)]">電話</h4>
                                        <p className="text-gray-300">03-558-5581</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-2xl">✉️</span>
                                    <div>
                                        <h4 className="font-bold text-[var(--primary-gold)]">Email</h4>
                                        <p className="text-gray-300">serendipitydance.tw@gmail.com</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-2xl">⏰</span>
                                    <div>
                                        <h4 className="font-bold text-[var(--primary-gold)]">營業時間</h4>
                                        <p className="text-gray-300">每日 10:00 - 22:00</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="pt-8 border-t border-white/10">
                            <h3 className="text-xl font-bold text-white mb-4">常見問題 (FAQ)</h3>
                            <div className="space-y-4">
                                <details className="group bg-[var(--surface)] p-4 rounded-lg cursor-pointer">
                                    <summary className="font-medium text-gray-200 group-hover:text-[var(--primary-gold)] transition-colors list-none flex justify-between items-center">
                                        上課需要準備什麼服裝？
                                        <span className="rotate-0 group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <div className="mt-3 text-sm text-gray-400 leading-relaxed">
                                        建議穿著舒適、好活動的衣物。國標舞課程建議穿著舞鞋，若初次體驗可穿著乾淨的室內運動鞋或軟底鞋。
                                    </div>
                                </details>
                                <details className="group bg-[var(--surface)] p-4 rounded-lg cursor-pointer">
                                    <summary className="font-medium text-gray-200 group-hover:text-[var(--primary-gold)] transition-colors list-none flex justify-between items-center">
                                        如果需要請假怎麼辦？
                                        <span className="rotate-0 group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <div className="mt-3 text-sm text-gray-400 leading-relaxed">
                                        請於課程開始前 24 小時通知櫃台或老師，我們將協助您安排補課事宜。詳細補課規範請參考報名時的學員須知。
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>

                    {/* Form Section Placeholder */}
                    <div className="bg-[var(--surface)] p-8 rounded-2xl border border-white/5">
                        <h3 className="text-2xl font-bold mb-6 text-white text-center">發送訊息</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">姓名</label>
                                <input type="text" className="w-full bg-black/30 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:border-[var(--primary-gold)]" placeholder="您的姓名" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">電話</label>
                                <input type="tel" className="w-full bg-black/30 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:border-[var(--primary-gold)]" placeholder="您的聯絡電話" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                <input type="email" className="w-full bg-black/30 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:border-[var(--primary-gold)]" placeholder="name@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">訊息內容</label>
                                <textarea rows={4} className="w-full bg-black/30 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:border-[var(--primary-gold)]" placeholder="想詢問的課程或內容..." />
                            </div>
                            <button className="w-full btn btn-primary mt-4">送出訊息</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
