import { CiLocationOn } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import { Link } from "react-router-dom";

const ReadBookCard = ({ book }) => {
    const {
        bookId,
        bookName,
        author,
        image,
        category,
        tags,
        rating,
        review,
        publisher,
        yearOfPublishing,
        totalPages,
    } = book;
    return (
        <div className="hero md:w-[800px] w-[350px] m-2">
            <div className="hero-content justify-start items-start flex-col lg:flex-row">
                <img src={image} className="w-[130px] rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-2xl font-bold">{bookName}</h1>
                    <p className="mt-2">
                        By: {author}
                    </p>
                    <div className="flex md:flex-row flex-col  gap-5 md:justify-center md:items-center justify-start items-start">
                        <div className="flex md:flex-row md:gap-4 gap-2 mt-4 mb-4">
                            Tag: {tags.map((tag) => (
                            <button key={tag} className="btn btn-sm text-[#23BE0A]">
                                {tag}
                            </button>
                        ))}
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <CiLocationOn /> <p>Year of Publishing: {yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className="mb-3 flex justify-start items-start gap-5">
                        <div className="flex justify-center items-center gap-2">
                            <FaUserFriends /><p>Publisher: {publisher}</p>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <MdContactPage /><p>Page {totalPages}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="mt-3 flex md:flex-row flex-col justify-start items-start md:gap-5 gap-1">
                        <button className="btn btn-sm text-[#328EFF]">Category: {category}</button>
                        <button className="btn btn-sm text-[#FFAC33]">Rating: {rating}</button>
                        <Link to={`/bookdetails/${bookId}`} className="btn btn-sm bg-[#23BE0A] text-white">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadBookCard;
