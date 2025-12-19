export default function Achievements() {
    return (
        <div className="min-h-screen pt-24 pb-12 bg-[var(--background)]">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gradient text-center">學生成果</h1>

                <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
                    每一位學員的進步，都是我們最大的驕傲。
                    在這裡，我們見證了無數自信與優雅的誕生。
                </p>

                {/* Video / Photo Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Gallery Item 1 */}
                    {/* Gallery Item 1 */}
                    <div className="group relative aspect-video bg-gray-800 rounded-xl overflow-hidden cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1516475429286-465d815a0df7?w=800&q=80" alt="年度成果展" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <span className="text-white text-lg font-bold">▶ 觀看 2024 年度公演</span>
                        </div>
                    </div>
                    {/* Gallery Item 2 */}
                    <div className="group relative aspect-video bg-gray-800 rounded-xl overflow-hidden cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&q=80" alt="比賽剪影" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-white text-lg font-bold">國標舞大賽</span>
                        </div>
                    </div>
                    {/* Gallery Item 3 */}
                    <div className="group relative aspect-video bg-gray-800 rounded-xl overflow-hidden cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&q=80" alt="上課紀錄" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-white text-lg font-bold">日常課程</span>
                        </div>
                    </div>
                    {/* Gallery Item 4 */}
                    <div className="group relative aspect-video bg-gray-800 rounded-xl overflow-hidden cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1449824913929-233a36b23f2c?w=800&q=80" alt="兒童班" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-white text-lg font-bold">小小舞者</span>
                        </div>
                    </div>
                    {/* Gallery Item 5 */}
                    <div className="group relative aspect-video bg-gray-800 rounded-xl overflow-hidden cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1514525253440-b393452e8d26?w=800&q=80" alt="聖誕派對" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-white text-lg font-bold">聖誕晚會</span>
                        </div>
                    </div>
                    {/* Gallery Item 6 */}
                    <div className="group relative aspect-video bg-gray-800 rounded-xl overflow-hidden cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&q=80" alt="師資示範" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-white text-lg font-bold">大師示範</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
