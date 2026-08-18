import { Eye, Heart } from 'lucide-react';
import { router } from '@inertiajs/react';




const ProductCard = ({ product }) => {

const addToCart = () => {
        // ارسال درخواست POST به لاراول جهت افزودن به دیتابیس و هدایت به /cart
        router.post('/cart/add', {
            product_id: product.id
        });
    };


    const addToWishList = (productID) => {
        router.post('/wishlist', {
            product_id: productID
        })
    }

    return (
        <div className="relative p-4 overflow-hidden transition-all duration-300 bg-white border rounded-md group hover:scale-105 hover:border-green-500 hover:shadow-lg">
            {/* OUT OF STOCK */}

            {!product.stock && (
                <span className="absolute z-20 px-2 py-1 text-xs text-white bg-black rounded left-3 top-3">
                    Out of stock
                </span>
            )}

            {/* RIGHT ICONS */}

            <div className="absolute z-20 flex flex-col gap-2 right-3 top-3">
                {/* HEART */}

                <button onClick={() => addToWishList(product.id)} className="items-center justify-center hidden bg-white border rounded-full shadow-sm h-9 w-9 group-hover:flex">
                    <Heart size={18} />
                </button>

                {/* EYE */}

                <button className="items-center justify-center hidden bg-white border rounded-full shadow-sm h-9 w-9 group-hover:flex">
                    <Eye size={18} />
                </button>
            </div>

            {/* IMAGE */}

            <div className="flex justify-center">
                <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain h-52"
                />
            </div>

            {/* INFO */}

            <div className="mt-4">
                {/* TITLE */}

                <h2 className="text-sm text-gray-500">{product.title}</h2>

                {/* PRICE */}

                <div className="flex items-center gap-2 mt-1">
                    <p className="text-lg font-bold">${product.price}</p>

                    {product.oldPrice && (
                        <span className="text-sm text-gray-400 line-through">
                            ${product.oldPrice}
                        </span>
                    )}
                </div>

                {/* STARS */}

                <div className="mt-1 text-sm text-yellow-400">★★★★★</div>
            </div>

            {/* CART BUTTON */}

            <button onClick={addToCart} 
                className={`absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                    product.stock
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 text-gray-400'
                } `}
            >
                <img src="/images/AddToCart.png" alt="shoping-icon" />
            </button>
        </div>
    );
};

export default ProductCard;
