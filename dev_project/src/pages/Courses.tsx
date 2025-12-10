import { useState, useMemo } from 'react';
import CourseCard from '../components/CourseCard';

// Type Definitions
type Level = '基礎' | '初級' | '進階' | '大師班' | '不限';
type Category = '國標舞' | '拉丁舞' | '芭蕾舞' | '街舞' | '現代舞' | 'Jazz';
type Time = '平日晚間' | '平日日間' | '週末';

// Mock Data
// Mock Data
const COURSES_DATA = [
    {
        id: "waltz-basic",
        title: "優雅華爾滋基礎班",
        category: "國標舞",
        image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&q=80",
        level: "基礎",
        teacher: "何柏蓁",
        time: "平日晚間",
        timeDetail: "每週三 19:30-21:00",
        status: "招生中",
        tags: ["試聽課", "熱門課程"]
    },
    {
        id: "latin-master",
        title: "拉丁大師班",
        category: "拉丁舞",
        image: "https://images.unsplash.com/photo-1516475429286-465d815a0df7?w=800&q=80",
        level: "大師班",
        teacher: "吳煥然",
        time: "週末",
        timeDetail: "每週六 14:00-16:00",
        status: "即將額滿",
        tags: ["冠軍親授"]
    },
    {
        id: "ballet-adult",
        title: "成人芭蕾體態雕塑",
        category: "芭蕾舞",
        image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&q=80",
        level: "不限",
        teacher: "專業師資",
        time: "平日晚間",
        timeDetail: "每週二 20:00-21:30",
        status: "新開課",
        tags: ["新開課程"]
    },
    {
        id: "tango-int",
        title: "探戈進階技巧",
        category: "國標舞",
        image: "https://images.unsplash.com/photo-1552062637-642157d6051c?w=800&q=80", // Tango image placeholder
        level: "進階",
        teacher: "吳煥然",
        time: "平日晚間",
        timeDetail: "每週四 19:30-21:00",
        status: "招生中",
        tags: []
    },
    {
        id: "kids-hiphop",
        title: "兒童街舞啟蒙",
        category: "街舞",
        image: "https://images.unsplash.com/photo-1535525266644-dc289136932e?w=800&q=80",
        level: "基礎",
        teacher: "專業師資",
        time: "週末",
        timeDetail: "每週日 10:00-11:30",
        status: "招生中",
        tags: ["兒童專屬"]
    }
];

export default function Courses() {
    const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
    const [selectedLevel, setSelectedLevel] = useState<Level | 'All'>('All');

    const filteredCourses = useMemo(() => {
        return COURSES_DATA.filter(course => {
            const matchCategory = selectedCategory === 'All' || course.category === selectedCategory;
            const matchLevel = selectedLevel === 'All' || course.level === selectedLevel;
            return matchCategory && matchLevel;
        });
    }, [selectedCategory, selectedLevel]);

    return (
        <div className="min-h-screen pt-24 pb-12 bg-[var(--background)]">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold mb-4 text-gradient text-center">課程資訊</h1>
                <p className="text-gray-300 mb-12 text-center max-w-2xl mx-auto">
                    無論您是初學者還是進階舞者，我們都有適合您的課程。
                    透過下方的篩選器找到您心儀的課程，開始您的舞蹈旅程。
                </p>

                {/* Filters */}
                <div className="mb-12 flex flex-col md:flex-row justify-center gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-primary uppercase tracking-wider">依舞風篩選</label>
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value as Category | 'All')}
                            className="bg-[var(--surface)] border border-white/10 text-white rounded px-4 py-2 focus:outline-none focus:border-primary"
                        >
                            <option value="All">所有舞風</option>
                            <option value="國標舞">國標舞</option>
                            <option value="拉丁舞">拉丁舞</option>
                            <option value="芭蕾舞">芭蕾舞</option>
                            <option value="街舞">街舞</option>
                            <option value="現代舞">現代舞</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-primary uppercase tracking-wider">依程度篩選</label>
                        <select
                            value={selectedLevel}
                            onChange={(e) => setSelectedLevel(e.target.value as Level | 'All')}
                            className="bg-[var(--surface)] border border-white/10 text-white rounded px-4 py-2 focus:outline-none focus:border-primary"
                        >
                            <option value="All">所有程度</option>
                            <option value="基礎">基礎 (Beginner)</option>
                            <option value="初級">初級 (Elementary)</option>
                            <option value="進階">進階 (Intermediate)</option>
                            <option value="大師班">大師班 (Master)</option>
                        </select>
                    </div>
                </div>

                {/* Course Grid */}
                {filteredCourses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCourses.map(course => (
                            // @ts-ignore - Ignoring strict type check for now to match component props
                            <CourseCard key={course.id} course={{
                                ...course,
                                time: course.timeDetail, // Map timeDetail to time prop for card
                                // Map status string to specific union type if needed, or update CourseCard types
                            }} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24 text-gray-500">
                        <p className="text-xl">目前沒有符合篩選條件的課程。</p>
                        <button
                            onClick={() => { setSelectedCategory('All'); setSelectedLevel('All'); }}
                            className="text-primary mt-4 hover:underline"
                        >
                            清除篩選條件
                        </button>
                    </div>
                )}

                {/* Additional Activity Section */}
                <div className="mt-24 pt-12 border-t border-white/10">
                    <h2 className="text-3xl font-bold mb-8 text-center text-white">特別活動 & 派對</h2>
                    <div className="bg-[var(--surface)] rounded-2xl p-8 border border-white/5 flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-full md:w-1/3 h-64 bg-gray-800 rounded-xl overflow-hidden relative">
                            <img src="https://images.unsplash.com/photo-1514525253440-b393452e8d26?w=800&q=80" alt="社交舞會" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full md:w-2/3 space-y-4">
                            <h3 className="text-2xl font-bold text-primary">週末社交舞會</h3>
                            <p className="text-gray-300">
                                每月舉辦一次的社交舞會，是學員展現成果與交流的最佳場合。
                                我們提供精緻茶點與優美的音樂，讓您在輕鬆的氛圍中享受舞蹈的樂趣。
                            </p>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>• 定期品酒會</li>
                                <li>• 節慶主題派對</li>
                                <li>• 國際大師講座</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
