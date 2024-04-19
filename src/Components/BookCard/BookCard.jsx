import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";


const BookCard = ({book}) => {

    const {bookId,bookName,author,image,category,tags,rating} = book;

    return (
        <Link
            to={`bookdetails/${bookId}`}
            className="card card-compact md:w-[374px] w-[300px] bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Loading..."
                    className="w-[134px] h-[166px]"
                />
            </figure>
            <div className="card-body">

                <div className="flex gap-4">
                    {
                        tags.map(tag => <button key={tag} className="btn btn-sm text-[#23BE0A]">{tag}</button>)
                    }
                </div>
                <h2 className="card-title text-[#131313] text-2xl">{bookName}</h2>
                <p className="text-[#131313CC] text-[16px]">By: {author}</p>
                <div className="card-actions text-[#131313CC]">
                    <p>{category}</p>
                    <div className="flex gap-1 justify-center items-center">
                        {rating}<CiStar />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;