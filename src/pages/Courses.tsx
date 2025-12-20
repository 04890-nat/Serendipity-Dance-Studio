import { useState, useMemo } from 'react';
import CourseCard from '../components/CourseCard';

// Type Definitions
type Level = '基礎' | '初級' | '進階' | '選手' | '不限';
type Category = '摩登舞' | '拉丁舞' | '社交舞' | '競技專項' | '身心律動';

// Data from the provided schedule image
const COURSES_DATA = [
    {
        id: "adult-latin-rumba",
        title: "成人單人拉丁 - Rumba 入門",
        category: "拉丁舞",
        image: "https://images.unsplash.com/photo-1545620853-9110499e74fd?w=800&q=80",
        level: "基礎",
        teacher: "吳煥然 Leo Wu",
        time: "週一晚間",
        timeDetail: "每週一 19:30-20:30",
        status: "招生中",
        tags: ["零基礎可", "美感訓練"]
    },
    {
        id: "adult-latin-samba",
        title: "成人單人拉丁 - Samba 入門",
        category: "拉丁舞",
        image: "https://images.unsplash.com/photo-1516475429286-465d815a0df7?w=800&q=80",
        level: "基礎",
        teacher: "吳煥然 Leo Wu",
        time: "週四晚間",
        timeDetail: "每週四 20:15-21:15",
        status: "招生中",
        tags: ["律動開發", "節奏感"]
    },
    {
        id: "adult-latin-jive",
        title: "成人單人拉丁 - Jive 入門",
        category: "拉丁舞",
        image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&q=80",
        level: "基礎",
        teacher: "吳煥然 Leo Wu",
        time: "週五晚間",
        timeDetail: "每週五 20:00-21:00",
        status: "招生中",
        tags: ["輕快活潑", "心肺訓練"]
    },
    {
        id: "women-latin-comprehensive",
        title: "女子綜合拉丁",
        category: "拉丁舞",
        image: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=1200&q=80",
        level: "初級",
        teacher: "專業師資",
        time: "週二晚間",
        timeDetail: "每週二 19:00-20:00",
        status: "熱門",
        tags: ["貴婦首選", "美體雕塑"]
    },
    {
        id: "adult-comp-latin-mon",
        title: "成人綜合拉丁 (週一班)",
        category: "拉丁舞",
        image: "https://images.unsplash.com/photo-1552062637-642157d6051c?w=800&q=80",
        level: "初級",
        teacher: "專業師資",
        time: "週一午後",
        timeDetail: "每週一 15:00-16:00",
        status: "招生中",
        tags: ["綜合練習", "多元舞風"]
    },
    {
        id: "kids-latin-a",
        title: "兒童拉丁 A",
        category: "競技專項",
        image: "https://images.unsplash.com/photo-1449824913929-233a36b23f2c?w=800&q=80",
        level: "基礎",
        teacher: "吳煥然 Leo Wu",
        time: "週五晚間",
        timeDetail: "每週五 19:00-20:00",
        status: "招生中",
        tags: ["專注力", "協調性"]
    },
    {
        id: "kids-elite",
        title: "兒童選手班",
        category: "競技專項",
        image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&q=80",
        level: "選手",
        teacher: "吳煥然 Leo Wu",
        time: "週六午前",
        timeDetail: "每週六 09:00-11:00",
        status: "專業組",
        tags: ["比賽培訓", "菁英計畫"]
    },
    {
        id: "latin-couple-skill",
        title: "拉丁雙人技巧班",
        category: "競技專項",
        image: "https://images.unsplash.com/photo-1516475429286-465d815a0df7?w=800&q=80",
        level: "進階",
        teacher: "吳煥然 Leo Wu",
        time: "週六午後",
        timeDetail: "每週六 13:00-14:30",
        status: "進階訓練",
        tags: ["雙人默契", "技術精進"]
    },
    {
        id: "gyrokinesis",
        title: "禪柔 GYROKINESIS",
        category: "身心律動",
        image: "https://images.unsplash.com/photo-1518611012118-29a8d63ee0c2?w=800&q=80",
        level: "不限",
        teacher: "專業團體班",
        time: "週四午後",
        timeDetail: "每週四 14:00-15:30",
        status: "招生中",
        tags: ["身心連結", "脊椎活動"]
    }
];

export default function Courses() {
    const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');

    const filteredCourses = useMemo(() => {
        return COURSES_DATA.filter(course => {
            return selectedCategory === 'All' || course.category === selectedCategory;
        });
    }, [selectedCategory]);

    const handleLineClick = () => {
        window.open('https://line.me/R/ti/p/%40619wlsxc', '_blank');
    };

    return (
        <div className="min-h-screen pt-24 pb-12 bg-[var(--background)]">
            <div className="container mx-auto px-6">
                <header className="mb-16 text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient italic">為成功找方法，不為失敗找藉口</h1>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        動見舞蹈藝術中心精心規劃多元課程。從優雅貴婦拉丁、兒童菁英選手到身心舒緩的禪柔。
                        我們強調高強度的專業指導，對待學員如友，共同邁向專業舞蹈之門。
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <button onClick={handleLineClick} className="btn btn-primary px-10 py-4 shadow-xl shadow-primary/20">
                            💬 LINE 預約與價格諮詢
                        </button>
                    </div>
                </header>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {['All', '拉丁舞', '競技專項', '身心律動'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat as any)}
                            className={`px-6 py-2 rounded-full border transition-all ${selectedCategory === cat
                                ? 'bg-primary border-primary text-white'
                                : 'border-white/10 text-gray-400 hover:border-primary/50'
                                }`}
                        >
                            {cat === 'All' ? '全部課程' : cat}
                        </button>
                    ))}
                </div>

                {/* Pricing Policy Notice */}
                <div className="mb-12 bg-surface/50 p-6 rounded-2xl border border-primary/20 text-center">
                    <p className="text-gray-400">
                        為了維護教學品質與提供最合適的建議，所有課程價格統一由 <strong className="text-white">LINE 或現場諮詢</strong>。
                        我們也歡迎 <strong>個人課預約、團體包班、企業合作</strong>，滿四位即可開班！
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.map(course => (
                        <div key={course.id} className="group bg-surface rounded-3xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500">
                            <div className="relative h-64 overflow-hidden">
                                <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-40"></div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-black/60 backdrop-blur-md text-primary text-[10px] font-bold px-3 py-1 rounded-full border border-primary/30 uppercase tracking-widest leading-none">
                                        {course.category}
                                    </span>
                                </div>
                                <div className="absolute bottom-4 left-4 flex gap-2">
                                    {course.tags.map(tag => (
                                        <span key={tag} className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded border border-primary/10">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white leading-tight">{course.title}</h3>
                                    <span className="text-[10px] text-accent-yellow border border-accent-yellow/30 px-2 py-0.5 rounded shrink-0">{course.status}</span>
                                </div>
                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center text-sm gap-2">
                                        <span className="text-gray-500">指導：</span>
                                        <span className="text-gray-300">{course.teacher}</span>
                                    </div>
                                    <div className="flex items-center text-sm gap-2">
                                        <span className="text-gray-500">時段：</span>
                                        <span className="text-gray-300">{course.timeDetail}</span>
                                    </div>
                                    <div className="flex items-center text-sm gap-2 bg-white/5 p-2 rounded-lg">
                                        <span className="text-primary font-bold">💳 價目諮詢：</span>
                                        <button onClick={handleLineClick} className="text-primary hover:underline">私訊 LINE 洽詢 &rarr;</button>
                                    </div>
                                </div>
                                <button onClick={handleLineClick} className="w-full bg-white/5 hover:bg-primary hover:text-white text-gray-300 p-4 rounded-xl font-bold transition-all text-sm">
                                    了解課程細節
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional USPs */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { title: '竹北核心最專業', desc: '環境美、採光佳，採用頂級加拿大楓木地板，緊鄰東元醫院停車場。', icon: '💎' },
                        { title: '一站式代購服務', desc: '提供完整專業舞鞋、練舞服代購服務，從頭到腳在動見一條龍完成。', icon: '🛍️' },
                        { title: '溫馨家長休息區', desc: '備有舒適沙發、茶水間、淋浴空間及高級化妝室，陪伴不累。', icon: '🛋️' },
                        { title: '不定時試聽體驗', desc: '對課程感興趣？歡迎透過 LINE@ 聯繫，了解最新試聽與開班資訊。', icon: '✉️' }
                    ].map((item, i) => (
                        <div key={i} className="text-center p-8 rounded-3xl bg-surface/30 border border-white/5">
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
