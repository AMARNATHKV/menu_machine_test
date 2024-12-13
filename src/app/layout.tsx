'use client';

import Navbar from '../components/Navbar';
import '../app/globals.css';
import { useState, useEffect } from 'react';


interface Menu {
  id: string;
  title: string;
  content: string; 
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menus, setMenus] = useState<Menu[]>([]); 
  
  useEffect(() => {
    async function fetchMenus() {
      try {
        const res = await fetch('/api/menus');
        const data: Menu[] = await res.json();
        setMenus(data);
      } catch (error) {
        console.error('Error fetching menus:', error);
      }
    }
    fetchMenus();
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Menu</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body className="bg-gray-100 m-0 p-0">
       
        <Navbar />

        
        <main className="min-h-screen">
          <div className=" mx-auto py-4 bg-black">
            <ul className="space-y-4">
              {menus.map((menu, index) => (
                <li key={menu.id || `${menu.title}-${index}`} >
                 
                  <div className="flex justify-between items-center w-full">
                    <span className="text-lg font-medium">{menu.title}</span>
                  </div>
                  
                  <div className="mt-4 text-gray-600">
                    <p>{menu.content}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white text-sm py-4">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            {/* Copyright text */}
            <div className="text-center sm:text-left">
              <p>&copy; {new Date().getFullYear()} Deep Net Soft. All Rights Reserved.</p>
            </div>

            {/* Terms & Privacy links */}
            <div className="text-center sm:text-right mt-4 sm:mt-0">
              <a
                href="#terms"
                className="text-white hover:text-blue-400 text-sm block mb-2 sm:inline-block sm:ml-6"
              >
                Terms & Conditions
              </a>
              <a
                href="#privacy"
                className="text-white hover:text-blue-400 text-sm block sm:inline-block sm:ml-6"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
