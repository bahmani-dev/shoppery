import { useEffect, useRef } from 'react';

export default function AnimatedLayout({ children }) {
    const containerRef = useRef(null);

    useEffect(() => {
        // Smooth scrolling
        document.documentElement.style.scrollBehavior = 'smooth';

        const sections =
            containerRef.current.querySelectorAll('[data-animate]');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            'opacity-100',
                            'translate-y-0',
                        );

                        entry.target.classList.remove(
                            'opacity-0',
                            'translate-y-10',
                        );

                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
            },
        );

        sections.forEach((section) => {
            section.classList.add(
                'transition-all',
                'duration-1000',
                'ease-out',
                'opacity-0',
                'translate-y-10',
            );

            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className="overflow-x-hidden bg-white">
            {children}
        </div>
    );
}
