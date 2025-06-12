// src/components/Layout.tsx
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#B8CDD9]">
      <Navbar />
      <main className="p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
