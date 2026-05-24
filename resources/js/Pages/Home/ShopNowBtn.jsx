const ShopNowBtn = (style) => {
    return (
        <button
            className={`flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-white ${style}`}
        >
            Shop Now <img src="/images/Home/shopNow.png" alt="" />
        </button>
    );
};

export default ShopNowBtn;
