import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-[var(--surface)] text-[var(--text-muted)] py-16 mt-20">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-[var(--foreground)] tracking-wide">SERENDIPITY</h3>
                    <p className="text-sm">
                        Experience the elegance of dance in a premium environment.
                        <br />
                        Designed for those who appreciate quality.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-[var(--primary-gold)] font-bold mb-4 uppercase tracking-wider text-sm">Explore</h4>
                    <ul className="space-y-2">
                        <li><Link to="/about" className="hover:text-[var(--foreground)] transition-colors">About Us</Link></li>
                        <li><Link to="/courses" className="hover:text-[var(--foreground)] transition-colors">Courses</Link></li>
                        <li><Link to="/achievements" className="hover:text-[var(--foreground)] transition-colors">Achievements</Link></li>
                        <li><Link to="/venue" className="hover:text-[var(--foreground)] transition-colors">Venue</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-[var(--primary-gold)] font-bold mb-4 uppercase tracking-wider text-sm">Contact</h4>
                    <ul className="space-y-2 text-sm">
                        <li>竹北市光明九路 32 號 2 樓</li>
                        <li>03-558-5581</li>
                        <li>serendipitydance.tw@gmail.com</li>
                        <li>Daily: 10:00 - 22:00</li>
                    </ul>
                </div>

                {/* Newsletter / Social */}
                <div>
                    <h4 className="text-[var(--primary-gold)] font-bold mb-4 uppercase tracking-wider text-sm">Stay Connected</h4>
                    <p className="text-sm mb-4">Join our community for exclusive updates.</p>
                    <div className="flex gap-2">
                        {/* Social Icons */}
                        <a href="https://www.facebook.com/SerendipityDanceStudioTW/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--surface-hover)] flex items-center justify-center hover:bg-[var(--primary-gold)] hover:text-black transition-all cursor-pointer font-bold">FB</a>
                        <div className="w-10 h-10 rounded-full bg-[var(--surface-hover)] flex items-center justify-center hover:bg-[var(--primary-gold)] hover:text-black transition-all cursor-pointer">IG</div>
                        <div className="w-10 h-10 rounded-full bg-[var(--surface-hover)] flex items-center justify-center hover:bg-[var(--primary-gold)] hover:text-black transition-all cursor-pointer">LN</div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center text-xs">
                &copy; {new Date().getFullYear()} Serendipity Dance Studio. All rights reserved.
            </div>
        </footer>
    );
}
