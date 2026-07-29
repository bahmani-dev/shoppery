import Tag from "./Tag";



const Category = () => {
    return (
        <>
            <div className="hidden lg:block">
                <div className="mt-9">
                    <input
                        type="search"
                        className="rounded-[6px] border-gray-300 px-5 py-2"
                        placeholder="Search..."
                    />
                </div>
                <div className="mt-6 hidden h-[1px] w-[350px] bg-gray-300 lg:block"></div>
                <div className="mt-5">
                    <h1 className="mb-7 text-[20px] font-semibold">
                        Top Categories
                    </h1>
                    <div className="mt-4">
                        <p className="mb-3">
                            Fresh Fruit
                            <span className="ml-[225px]">(134)</span>
                        </p>

                        <p className="mb-3">
                            Vegetables <span className="ml-[210px]">(150)</span>
                        </p>

                        <p className="mb-3">
                            Cooking <span className="ml-[244px]">(14)</span>
                        </p>
                        <p className="mb-3">
                            Snacks <span className="ml-[253px]">(72)</span>
                        </p>
                        <p className="mb-3">
                            Beverages <span className="ml-[225px]">(83)</span>
                        </p>
                        <p className="mb-3">
                            Beauty & Health
                            <span className="ml-[183px]">(27)</span>
                        </p>
                        <p className="mb-3">
                            Bread & Bakery
                            <span className="ml-[187px]">(46)</span>
                        </p>
                    </div>
                </div>
                <Tag />
            </div>
        </>
    );
};

export default Category;