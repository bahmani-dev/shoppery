import { Eye, Heart } from 'lucide-react';
import { router } from '@inertiajs/react';
import axios from 'axios';





const ProductCard = ({ product }) => {

const addToCart = async () => {
    try {
        const response = await axios.post(
            `/cart/add/${product.id}`,
            {},
            {
                withCredentials: true,
            }
        );

        alert(response.data.message);

    } catch (error) {

        if (error.response?.status === 401) {
            window.location.href = "/login";
            return;
        }

    }
};


    const addToWishList = (productID) => {
        router.post('/wishlist', {
            product_id: productID
        })
        console.log(productID);
    }

    return (
        <div className="group relative overflow-hidden rounded-md border bg-white p-4 transition-all duration-300 hover:scale-105 hover:border-green-500 hover:shadow-lg">
            {/* OUT OF STOCK */}

            {!product.stock && (
                <span className="absolute left-3 top-3 z-20 rounded bg-black px-2 py-1 text-xs text-white">
                    Out of stock
                </span>
            )}

            {/* RIGHT ICONS */}

            <div className="absolute right-3 top-3 z-20 flex flex-col gap-2">
                {/* HEART */}

                <button onClick={() => addToWishList(product.id)} className="hidden h-9 w-9 items-center justify-center rounded-full border bg-white shadow-sm group-hover:flex">
                    <Heart size={18} />
                </button>

                {/* EYE */}

                <button className="hidden h-9 w-9 items-center justify-center rounded-full border bg-white shadow-sm group-hover:flex">
                    <Eye size={18} />
                </button>
            </div>

            {/* IMAGE */}

            <div className="flex justify-center">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-52 object-contain"
                />
            </div>

            {/* INFO */}

            <div className="mt-4">
                {/* TITLE */}

                <h2 className="text-sm text-gray-500">{product.title}</h2>

                {/* PRICE */}

                <div className="mt-1 flex items-center gap-2">
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
