import { AnimatedSection } from '@/Components/Layout/AnimatedSection';

const Categories = () => {
    return (
        <AnimatedSection className="relative bg-[#F7F7F7]">
            <section className="container mx-auto px-4 py-20"></section>
            <div className="absolute -right-3 bottom-10">
                <img src="/images/Home/Category/sideDesign.png" alt="" />
            </div>
        </AnimatedSection>
    );
};

export default Categories;
