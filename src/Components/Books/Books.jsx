import {useEffect, useState} from "react";
import {useNavigation} from "react-router-dom";
import Loader from "../Loader/Loader.jsx";
import BookCard from "../BookCard/BookCard.jsx";


const Books = () => {
    const [books, setBooks] = useState([])
    const navigation = useNavigation()
    useEffect(() => {
        fetch('book.json')
            .then(res => res.json())
            .then(data => setBooks(data.books))
    },[])
    if(navigation.state === 'loading') return <Loader/>
    return (
        <div className="grid grid-cols md:grid-cols-3 gap-4 justify-center items-center">
            {
                books.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
            }
        </div>
    );
};

export default Books;