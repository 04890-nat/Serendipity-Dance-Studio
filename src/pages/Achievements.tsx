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
                    <div className="group relative aspect-video bg-gray-800 rounded-xl overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 group-hover:text-white transition-colors">
                            [年度成果展影片]
                        </div>
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white text-lg font-bold">▶ 觀看影片</span>
                        </div>
                    </div>
                    {/* Gallery Item 2 */}
                    <div className="group relative aspect-video bg-gray-800 rounded-xl overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 group-hover:text-white transition-colors">
                            [國標舞比賽剪影]
                        </div>
                    </div>
                    {/* Gallery Item 3 */}
                    <div className="group relative aspect-video bg-gray-800 rounded-xl overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 group-hover:text-white transition-colors">
                            [學員上課紀錄]
                        </div>
                    </div>
                    {/* Gallery Item 4 */}
                    <div className="group relative aspect-video bg-gray-800 rounded-xl overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 group-hover:text-white transition-colors">
                            [兒童班成果發表]
                        </div>
                    </div>
                    {/* Gallery Item 5 */}
                    <div className="group relative aspect-video bg-gray-800 rounded-xl overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 group-hover:text-white transition-colors">
                            [聖誕派對活動照]
                        </div>
                    </div>
                    {/* Gallery Item 6 */}
                    <div className="group relative aspect-video bg-gray-800 rounded-xl overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 group-hover:text-white transition-colors">
                            [冠軍師資示範]
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
