export default function About() {
    return (
        <div className="min-h-screen pt-24 pb-12 bg-[var(--background)]">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gradient text-center">關於我們</h1>

                {/* Brand Story */}
                <section className="mb-16 space-y-8">
                    <div className="bg-[var(--surface)] p-8 rounded-xl border border-white/5">
                        <h2 className="text-2xl font-bold mb-6 text-[var(--primary-gold)]">品牌故事</h2>
                        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                            <p>
                                動見舞蹈藝術中心 (Moving Insight Dance Art Center) 成立於新竹，由知名國標舞冠軍 <strong>吳煥然</strong> 老師與 <strong>何柏蓁</strong> 老師共同創辦。
                                我們致力於打造一個結合專業舞蹈教學與優雅生活美學的空間。
                            </p>
                            <p>
                                「Serendipity (動見)」意味著在動作中看見真實的自己。我們相信，舞蹈不僅僅是肢體的律動，更是一種內在意識的覺醒與表達。
                                在這裡，我們提供專業的加拿大楓木地板與頂級的教學環境，讓每一位學員都能在舒適的空間中，享受舞蹈帶來的自信與快樂。
                            </p>
                            <p>
                                無論您是追求專業競賽表現的舞者，還是希望透過舞蹈提升氣質的愛好者，動見舞蹈藝術中心都是您最值得信賴的選擇。
                                我們強調建立歷史與穩定感，讓您在每一次的旋轉與跳躍中，感受到穩固的基礎與無限的可能。
                            </p>
                        </div>
                    </div>
                </section>

                {/* Team Introduction */}
                <section>
                    <h2 className="text-2xl font-bold mb-8 text-[var(--primary-gold)] text-center">專業師資團隊</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-[var(--surface)] p-6 rounded-xl border border-white/5 hover:border-[var(--primary-gold)]/30 transition-colors">
                            <h3 className="text-xl font-bold mb-2">吳煥然 老師</h3>
                            <p className="text-gray-400 mb-4">創辦人 / 國標舞職業組冠軍</p>
                            <p className="text-sm text-gray-500">
                                擁有豐富的國際賽事經驗，教學風格嚴謹而幽默，擅長引導學生突破自我，展現自信風采。
                            </p>
                        </div>
                        <div className="bg-[var(--surface)] p-6 rounded-xl border border-white/5 hover:border-[var(--primary-gold)]/30 transition-colors">
                            <h3 className="text-xl font-bold mb-2">何柏蓁 老師</h3>
                            <p className="text-gray-400 mb-4">創辦人 / 知名舞蹈教育家</p>
                            <p className="text-sm text-gray-500">
                                專注於舞蹈美學與身體線條的雕塑，以細膩的教學方式，深受學員喜愛，特別針對女性學員展現優雅氣質。
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
