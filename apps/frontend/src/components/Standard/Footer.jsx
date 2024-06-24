import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-4">
            <div className="container mx-auto text-center">
                <p className="mb-2">Made with ❤️ by Team DhanSaavy</p>
                <p className="mb-2">
                    <a href="https://github.com/kirinain" target="_blank" rel="noopener noreferrer" className="underline text-white hover:text-gray-400">@kirinain</a> and
                    <a href="https://github.com/exploring-solver" target="_blank" rel="noopener noreferrer" className="underline text-white hover:text-gray-400"> @exploring-solver</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
