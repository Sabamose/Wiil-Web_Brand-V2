import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface AppLayoutProps {
  children: ReactNode;
  showNavbar?: boolean;
  showFooter?: boolean;
}

export const AppLayout = ({ children, showNavbar = true, showFooter = true }: AppLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {showNavbar && <Navbar />}
      <main className="flex-1">{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};