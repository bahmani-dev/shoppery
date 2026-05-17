export function AnimatedSection({ children, className = '' }) {
    return (
        <section data-animate className={className}>
            {children}
        </section>
    );
}
