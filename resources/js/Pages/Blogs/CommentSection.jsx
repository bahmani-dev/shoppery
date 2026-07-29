import { div } from "framer-motion/client";

const CommentSection = () => {

    const comments = [
        {
            id: 1,
            img_url: "/images/SingleBlog/pic1.png",
            name: "John Doe",
            date: "March 15, 2024",
            comment: "This is a great blog post! I learned a lot about organic farming."
        },
        {
            id: 2,
            img_url: "/images/SingleBlog/pic2.png",
            name: "John Doe",
            date: "March 15, 2024",
            comment: "This is a great blog post! I learned a lot about organic farming."
        },
        {
            id: 3,
            img_url: "/images/SingleBlog/pic3.png",
            name: "John Doe",
            date: "March 15, 2024",
            comment: "This is a great blog post! I learned a lot about organic farming."
        },
        {
            id: 4,
            img_url: "/images/SingleBlog/pic4.png",
            name: "John Doe",
            date: "March 15, 2024",
            comment: "This is a great blog post! I learned a lot about organic farming."
        },
        {
            id: 5,
            img_url: "/images/SingleBlog/pic5.png",
            name: "John Doe",
            date: "March 15, 2024",
            comment: "This is a great blog post! I learned a lot about organic farming."
        },
        {
            id: 6,
            img_url: "/images/SingleBlog/pic5.png",
            name: "John Doe",
            date: "March 15, 2024",
            comment: "This is a great blog post! I learned a lot about organic farming."
        },
        {
            id: 7,
            img_url: "/images/SingleBlog/pic5.png",
            name: "John Doe",
            date: "March 15, 2024",
            comment: "This is a great blog post! I learned a lot about organic farming."
        }
    ]
    return (
        <div className="mt-5 flex flex-col gap-5">
            <h2 className="text-[24px] font-medium leading-[150%] tracking-[0%] text-[#1A1A1A]">
                Leave a comment
            </h2>
            <div className="flex flex-col lg:flex-row justify-between gap-4">
                <div className="flex w-full flex-col items-start gap-3">
                    <label
                        className="text-[14px] font-normal leading-[150%] tracking-[0%] text-[#1A1A1A]"
                        htmlFor="full-name"
                    >
                        Full Name
                    </label>
                    <input
                        className="w-full rounded-md border-[1px] border-[#E5E5E5] outline-none focus:border-[#00B207] focus:ring-0"
                        type="text"
                        id="full-name"
                        placeholder="Enter Your Name"
                    />
                </div>
                <div className="flex w-full flex-col items-start gap-3">
                    <label
                        className="text-[14px] font-normal leading-[150%] tracking-[0%] text-[#1A1A1A]"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="w-full rounded-md border-[1px] border-[#E5E5E5] outline-none focus:border-[#00B207] focus:ring-0"
                        type="email"
                        id="email"
                        placeholder="Enter Your Email"
                    />
                </div>
            </div>
            <div className="flex w-full flex-col items-start gap-3">
                <label htmlFor="comment">Message</label>
                <textarea
                    rows={4}
                    className="w-full rounded-md border-[1px] border-[#E5E5E5] outline-none focus:border-[#00B207] focus:ring-0"
                    name=""
                    id="comment"
                ></textarea>
            </div>
            <div className="flex items-center gap-2">
                <input
                    className="rounded-[3px] border-[1px] border-[#CCCCCC] accent-[#00B207] outline-none focus:border-[#00B207] focus:ring-0"
                    type="checkbox"
                />
                <p className="text-[10px] md:text-[12px] lg:text-[14px] font-medium leading-[150%] tracking-[0%] text-[#666666]">
                    Save my name and email in this browser for the next time I
                    comment.
                </p>
            </div>
            <button className="w-[171px] md:w-[191px] xl:w-[211px] rounded-[43px] bg-[#00B207] py-4 text-[12px] md:text-[14px] lg:text-[16px] font-semibold leading-[120%] text-white">
                Post Comments
            </button>
            <div className="mt-[20px]">
                <h2 className="font-medium text-[24px] leading-[150%] tracking-[0%] mb-[20px]">Comments</h2>
                <div className="flex flex-col gap-6">
                    {
                        comments.map(comment => {
                            return (
                                <div key={comment.id} className={`mt-[5px] flex gap-4 items.center ${comment.id > 1 ? "border-t-[1px] border-[#E6E6E6] pt-4" : ""}`}>
                                    <img className="w-[40px] h-[40px]" src={comment.img_url} alt="" />
                                    <div className="flex flex-col gap-1">
                                        <p className="font-medium text-[14px] leading-[150%] tracking-[0%] text-[#1A1A1A]">{comment.name} • <span className="text-[#999999]">{comment.date}</span></p>
                                        <p className="text-[14px] font-normal leading-[150%] tracking-[0%] text-[#666666]">
                                            {comment.comment}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <button className="mt-[50px] py-2 w-[138px] border-[2px] border-[#00B207] rounded-[43px] font-semibold text-[14px] leading-[120%] tracking-[0%] text-[#00B207] h-[45px]">Load More</button>
            </div>
        </div>
    );
};

export default CommentSection;
