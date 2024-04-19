import { useState } from "react";
import { Loader } from "react-form-component";
import { Link, Outlet, useNavigation } from "react-router-dom";

const ListedBooks = () => {
    const [tabs, setTabs] = useState(0);

    const navigation = useNavigation()
    if(navigation.state === 'loading') return <Loader/>
    return (
        <section>
            <div className="bg-[#1313130D] font-bold p-5 rounded-lg text-center text-3xl">
                <h1>Books</h1>
            </div>

            {/* tab area */}
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-base-200 dark:text-gray-800">
                <Link
                    onClick={() => setTabs(0)}
                    //   to={`reads`}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                        tabs === 0 ? "border border-b-0" : "border-b"
                    } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
                >
                    <span>Read Books</span>
                </Link>
                <Link
                    onClick={() => setTabs(1)}
                    to={`wishlists`}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                        tabs === 1 ? "border border-b-0" : "border-b"
                    } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
                >
                    <span>Wishlist Books</span>
                </Link>
            </div>
            <Outlet />
        </section>
    );
};

export default ListedBooks;
