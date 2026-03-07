import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header'; /* <-- Correção aqui */
import { Footer } from '../Footer/Footer';

export const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden">
            <Header />
            
            <main className="flex-grow w-full">
                <Outlet />
            </main>
            
            <Footer />
        </div>
    );
};