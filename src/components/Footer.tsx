import { Link } from 'react-router-dom';

export default function Footer() {
    const handleLineClick = () => {
        window.open('https://line.me/R/ti/p/%40619wlsxc', '_blank');
    };

    return (
        <footer className="bg-[var(--surface)] text-[var(--text-muted)] py-16 mt-20">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-gray-400">
                {/* Brand */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white tracking-wide">動見舞蹈</h3>
                    <p className="text-sm leading-relaxed">
                        在頂級的環境中體驗舞蹈藝術之美。
                        <br />
                        專為追求卓越品質與優雅生活的您量身打造。
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-primary font-bold mb-6 uppercase tracking-wider text-sm">探索與服務</h4>
                    <ul className="space-y-3">
                        <li><Link to="/about" className="hover:text-white transition-colors">品牌故事 & 大事記</Link></li>
                        <li><Link to="/courses" className="hover:text-white transition-colors">專業課程資訊</Link></li>
                        <li><Link to="/achievements" className="hover:text-white transition-colors">學生成果展示</Link></li>
                        <li><Link to="/venue" className="hover:text-white transition-colors">場地設施參觀</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-primary font-bold mb-6 uppercase tracking-wider text-sm">聯絡我們</h4>
                    <ul className="space-y-3 text-sm">
                        <li>新竹縣竹北市光明九路 32 號 2 樓</li>
                        <li>03-558-5581</li>
                        <li>serendipitydance.tw@gmail.com</li>
                        <li>營業時間: 每日 10:00 - 22:00</li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h4 className="text-primary font-bold mb-6 uppercase tracking-wider text-sm">追蹤社群</h4>
                    <p className="text-sm mb-6 text-gray-400">獲取最新課程資訊與活動花絮。</p>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/SerendipityDanceStudioTW/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-background border border-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all font-bold">FB</a>
                        <div className="w-12 h-12 rounded-full bg-background border border-white/5 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all font-bold cursor-pointer">IG</div>
                        <button
                            onClick={handleLineClick}
                            className="w-12 h-12 rounded-full bg-background border border-white/5 flex items-center justify-center hover:bg-[#06C755] hover:text-white transition-all font-bold cursor-pointer"
                        >
                            LINE
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
                &copy; {new Date().getFullYear()} 動見舞蹈藝術中心 Serendipity Dance Studio. All rights reserved.
            </div>
        </footer>
    );
}
