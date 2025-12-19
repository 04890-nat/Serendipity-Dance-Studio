import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-[var(--surface)] text-[var(--text-muted)] py-16 mt-20">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-[var(--foreground)] tracking-wide">動見舞蹈</h3>
                    <p className="text-sm">
                        在頂級的環境中體驗舞蹈藝術之美。
                        <br />
                        專為追求卓越品質的您量身打造。
                    </p>
                </div>

                {/* Quick Links */}
                {/* Quick Links */}
                <div>
                    <h4 className="text-[var(--primary-gold)] font-bold mb-4 uppercase tracking-wider text-sm">探索</h4>
                    <ul className="space-y-2">
                        <li><Link to="/about" className="hover:text-[var(--foreground)] transition-colors">關於我們</Link></li>
                        <li><Link to="/courses" className="hover:text-[var(--foreground)] transition-colors">課程介紹</Link></li>
                        <li><Link to="/achievements" className="hover:text-[var(--foreground)] transition-colors">學生成果</Link></li>
                        <li><Link to="/venue" className="hover:text-[var(--foreground)] transition-colors">場地設備</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-[var(--primary-gold)] font-bold mb-4 uppercase tracking-wider text-sm">聯絡資訊</h4>
                    <ul className="space-y-2 text-sm">
                        <li>竹北市光明九路 32 號 2 樓</li>
                        <li>03-558-5581</li>
                        <li>serendipitydance.tw@gmail.com</li>
                        <li>每日: 10:00 - 22:00</li>
                    </ul>
                </div>

                {/* Newsletter / Social */}
                <div>
                    <h4 className="text-[var(--primary-gold)] font-bold mb-4 uppercase tracking-wider text-sm">關注我們</h4>
                    <p className="text-sm mb-4">加入我們的社群以獲得最新消息。</p>
                    <div className="flex gap-2">
                        {/* Social Icons */}
                        <a href="https://www.facebook.com/SerendipityDanceStudioTW/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--surface-hover)] flex items-center justify-center hover:bg-[var(--primary-gold)] hover:text-black transition-all cursor-pointer font-bold">FB</a>
                        <div className="w-10 h-10 rounded-full bg-[var(--surface-hover)] flex items-center justify-center hover:bg-[var(--primary-gold)] hover:text-black transition-all cursor-pointer">IG</div>
                        <div className="w-10 h-10 rounded-full bg-[var(--surface-hover)] flex items-center justify-center hover:bg-[var(--primary-gold)] hover:text-black transition-all cursor-pointer">LN</div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center text-xs">
                &copy; {new Date().getFullYear()} 動見舞蹈藝術中心 Moving Insight Dance Art Center. All rights reserved.
            </div>
        </footer>
    );
}
