import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-gray-900">Corporate Portfolio</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="/" className="text-gray-600 hover:text-gray-900">Home</a></li>
                            <li><a href="/portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Outlet />
            </main>
            <footer className="bg-white border-t border-gray-200 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500">
                    © {new Date().getFullYear()} Corporate Portfolio. All rights reserved.
                </div>
            </footer>
        </div>
    );
};
