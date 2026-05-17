import { Link } from '@inertiajs/react';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb({
    items = [],
    backgroundImage = '/images/breadcrumb.jpg',
}) {
    return (
        <section
            className="relative flex h-[120px] items-center overflow-hidden"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 lg:px-6">
                <div className="flex flex-wrap items-center gap-2 text-sm text-white/80">
                    <Link
                        href="/"
                        className="flex items-center gap-2 transition hover:text-green-400"
                    >
                        <Home size={16} />
                    </Link>

                    {items.map((item, index) => {
                        const isLast = index === items.length - 1;

                        return (
                            <div
                                key={index}
                                className="flex items-center gap-2"
                            >
                                <ChevronRight size={16} />

                                {isLast ? (
                                    <span className="font-medium text-green-400">
                                        {item.label}
                                    </span>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="transition hover:text-green-400"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
