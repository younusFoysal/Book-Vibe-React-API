import img from '../../assets/b.png'

const About = () => {
    return (
        <div className="bg-gray-100 py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className=" playfair text-3xl font-bold text-gray-800 mb-8">About Us</h2>
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                        <img
                            src={img}
                            alt="About Us"
                            className="w-full rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <p className=" playfair text-lg leading-relaxed mb-4">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Greetings from Book Vibe, the greatest place for readers. We are dedicated to giving you the greatest reading experience since we are enthusiastic about books. We have the books you need, whether you're searching for thought-provoking non-fiction, contemporary fiction, or classic bestsellers.
                        </p>
                        <p className=" playfair text-lg leading-relaxed mb-4">
                            Our goal is to empower and inspire readers by providing a wide range of books that appeal to different interests and genres. We aim to make your book-buying experience pleasurable and hassle-free with our user-friendly website and first-rate customer support.
                        </p>
                        <p className=" playfair text-lg leading-relaxed mb-4">
                            Book Vibe is a company that believes in the transforming potential of books to enlighten, entertain, and educate people. Come along on this literary journey as we jointly explore the intriguing world of literature.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;