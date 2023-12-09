import React, { ReactNode } from 'react';
import Header from '../app/components/common/Header';  // Assuming you have a Header component
import Footer from '../app/components/common/Footer';  // Assuming you have a Footer component

type MainLayoutProps = {
    children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;

 
