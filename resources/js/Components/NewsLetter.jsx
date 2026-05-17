import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

export default function NewsletterSection() {
    return (
        <section className="mt-20 bg-[#f7f7f7] py-12">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 lg:flex-row">
                <div className="max-w-md">
                    <h2 className="text-3xl font-bold text-[#1a1a1a]">
                        Subscribe our Newsletter
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-gray-500">
                        Pellentesque eu nibh eget mauris congue mattis mattis
                        nec tellus. Phasellus imperdiet elit eu magna.
                    </p>
                </div>

                <div className="flex w-full flex-col items-center gap-5 lg:w-auto lg:flex-row">
                    <div className="flex w-full overflow-hidden rounded-full border border-gray-300 bg-white lg:w-[500px]">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full bg-transparent px-6 py-4 text-sm outline-none placeholder:text-gray-400"
                        />

                        <button className="bg-green-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-green-600">
                            Subscribe
                        </button>
                    </div>

                    <div className="flex items-center gap-3">
                        <a
                            href="#"
                            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-green-600 hover:text-white"
                        >
                            <FaFacebook size={18} />
                        </a>

                        <a
                            href="#"
                            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-green-500 hover:text-white"
                        >
                            <BsTwitter size={18} />
                        </a>

                        <a
                            href="#"
                            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-green-500 hover:text-white"
                        >
                            <BsInstagram size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
