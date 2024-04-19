
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Root from './Components/Root/Root';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagesToRead from './Components/PagesToRead/PagesToRead';
import BookDetails from './Components/BookDetails/BookDetails';
import Error from './Components/Error/Error';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import { Toaster } from 'react-hot-toast';
import ReadBooks from './Components/ReadBooks/ReadBooks';
import WishlistBooks from './Components/WishlistBooks/WishlistBooks';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/bookdetails/:bookId",
                element: <BookDetails/>,
                loader: () => fetch(`../public/book.json`),

            },
            {
                path: "/listbooks",
                element: <ListedBooks/>,
                children: [
                    {

                        index: true,
                        element: <ReadBooks/>,
                    },
                    {
                        path: "wishlists",
                        element: <WishlistBooks/>,
                    },

                ]
            },
            {
                path: "/pagesread",
                element: <PagesToRead/>
            },

            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/about",
                element: <About/>
            },


        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <div className='container mx-auto'>
        <RouterProvider router={router} />
        <Toaster/>
    </div>,
)
