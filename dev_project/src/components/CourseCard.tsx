import { Link } from 'react-router-dom';

interface CourseProps {
    id: string;
    title: string;
    category: string;
    image: string;
    level: string;
    teacher: string;
    time: string;
    status: 'Open' | 'Full' | 'Selling Fast' | 'New' | '招生中' | '已額滿' | '即將額滿' | '新開課';
    tags?: string[];
}

export default function CourseCard({ course }: { course: CourseProps }) {
    const statusColor: Record<string, string> = {
        'Open': 'bg-green-500/20 text-green-400',
        '招生中': 'bg-green-500/20 text-green-400',
        'Full': 'bg-red-500/20 text-red-400',
        '已額滿': 'bg-red-500/20 text-red-400',
        'Selling Fast': 'bg-orange-500/20 text-orange-400',
        '即將額滿': 'bg-orange-500/20 text-orange-400',
        'New': 'bg-blue-500/20 text-blue-400',
        '新開課': 'bg-blue-500/20 text-blue-400',
    };

    return (
        <div className="group relative bg-[var(--surface)] rounded-[var(--radius)] overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-xl border border-white/5">
            {/* Image Container */}
            <div className="relative h-64 w-full overflow-hidden">
                <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-10">
                    <span className={`px-3 py-1 text-xs font-bold uppercase rounded-full backdrop-blur-md ${statusColor[course.status] || 'bg-gray-500/20 text-gray-300'}`}>
                        {course.status}
                    </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[var(--surface)] to-transparent">
                    <span className="text-[var(--primary-gold)] text-xs font-bold tracking-wider uppercase mb-1 block">
                        {course.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--primary-gold)] transition-colors">
                    {course.title}
                </h3>

                <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center text-sm text-gray-400">
                        <span>Teacher</span>
                        <span className="text-white font-medium">{course.teacher}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-400">
                        <span>Level</span>
                        <span className="text-white font-medium">{course.level}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-400">
                        <span>Time</span>
                        <span className="text-white font-medium">{course.time}</span>
                    </div>
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                    <div className="flex gap-2">
                        {course.tags?.map(tag => (
                            <span key={tag} className="text-[10px] uppercase tracking-wide text-gray-500 border border-white/10 px-2 py-1 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <Link to={`/courses`} className="text-[var(--primary-gold)] text-sm font-bold hover:underline">
                        Details &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
}
