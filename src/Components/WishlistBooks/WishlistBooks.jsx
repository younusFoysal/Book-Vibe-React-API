import { useEffect, useState } from "react";
import {  getWishlist, sortData } from "../Utilitis";
import ReadBookCard from "../ReadBookCard/ReadBookCard";
import { useNavigation } from "react-router-dom";
import { Loader } from "react-form-component";

const WishlistBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const storeBooks = getWishlist();
        setBooks(storeBooks);
    }, []);
    const handleSort = (event) => {
        const selectedValue = event.target.value;
        const sortedBooks = sortData(books, selectedValue);
        setBooks(sortedBooks);
    }
    const navigation = useNavigation()
    if(navigation.state === 'loading') return <Loader/>
    return (
        <>
            {/* select for filter or sort */}
            <div className="flex flex-col justify-center items-center m-5">
                <select onClick={handleSort}  className="select bg-[#23BE0A] text-white  w-[120px]">
                    <option disabled selected>
                        Sort By
                    </option>
                    <option value='rating'>Rating</option>
                    <option value='totalPages'>Number of Pages</option>
                    <option value='yearOfPublishing'>Published Year</option>
                </select>
            </div>
            <div className="grid grid-cols md:grid-cols-1 gap-5">
                {
                    books.map(book => <ReadBookCard key={book.bookId} book={book}></ReadBookCard>)
                }
            </div>
        </>

    );
};

export default WishlistBooks;