import AnimatedLayout from './AnimatedLayout';
import Footer from './Footer';
import Navbar from './Navbar';

export default function MainLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <AnimatedLayout>
                <main className="flex-1">{children}</main>

                <Footer />
            </AnimatedLayout>
        </div>
    );
}
