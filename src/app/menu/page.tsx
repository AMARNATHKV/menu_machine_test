'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import ItemList from '@/components/ItemList';


interface Menu {
  _id: string;
  name: string;
  description: string;
}

export default function MenuPage() {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [selectedMenuId, setSelectedMenuId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchMenus() {
      try {
        const res = await fetch('/api/menus');
        if (!res.ok) throw new Error('Failed to fetch menus');
        const data: Menu[] = await res.json();
        setMenus(data);
      } catch (error) {
        console.error('Error fetching menus:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchMenus();
  }, []);

  const handleMenuClick = (menuId: string) => {
    setSelectedMenuId(menuId);
  };

  return (
    <div>
      {/* Header Section */}
      <section
        className="text-center py-8 relative bg-cover bg-top"
        style={{
          backgroundImage:
            'url(https://s3-alpha-sig.figma.com/img/aefd/7aa0/f81b6208cb3da0f5ecc0f0d109ca4bd0?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZeKHm22hElWdMf84VmnZbIdwhYXQ9sKXSQ0Gz0c22AgjC2lsY3ZtEW2KSzEOvkRwTrHfzkX6WSNl~Ji2CySb6Bkdu~DCmkg0tR72ISS-my04KshYLKOHdwxzeVD64rP7pVqMKmGo557fkvDLd5cndy-Qq4HtVbD10yNF~F0Pv4Zn3ozepMOGlJD6UyUdCDHGfSkiPKfhgFPfM0RdGNRI-AbVqtbUhxm7c~K1hALNzareXxwMjCWrAKGqTze4YhZ4M7WoThL5bmkPwgh-5iHbN7svsFBKon2b0Ueh01TVfh1GYdZWmRBlt0Ad-0BlpsYEgUbAIDX-T4bOh8GIpiWMdw__)',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-bold">MENU</h1>
          <p className="text-lg mt-4">
            Please take a look at our menu featuring food, drinks, and brunch.
            If you had like to place an order, use the Order Online button located below the menu.
          </p>
        </div>
      </section>

      {/* Menu List Section */}
      <div className="bg-black mx-auto px-6 py-8 min-h-screen text-white">
        {loading ? (
          <p className="text-center text-gray-400">Loading menus...</p>
        ) : (
          <>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {menus.map((menu) => (
                <button
                  key={menu._id}
                  className={`px-4 py-2 text-sm font-semibold text-white bg-black hover:bg-blue-500 transition-colors duration-200 border border-blue-600 ${
                    selectedMenuId === menu._id ? 'ring-2 ring-blue-400' : ''
                  }`}
                  onClick={() => handleMenuClick(menu._id)}
                >
                  {menu.name}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              {menus.map((menu) => (
                <div key={menu._id}>
                  {selectedMenuId === menu._id && (
                    <div className="border-4 border-white p-4 max-w-3xl mx-auto">
                      <h2 className="text-2xl font-bold text-center text-blue-400 mb-4">
                        {menu.name}
                      </h2>
                      <ItemList menuId={menu._id} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {/* Footer Section */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center mt-12">
          {/* Connect With Us */}
          <div className="border border-gray-600 p-4 rounded-lg">
            <p className="text-blue-500 font-semibold ">CONNECT WITH US</p>
            <p className="mt-2 text-sm">
              <i className="fas fa-phone-alt"></i> +91 9567843340
            </p>
            <p className="mt-1 text-sm">
info@deepnetsoft.com
            </p>
          </div>

          {/* Logo and Social Icons */}
          <div className="border border-gray-600 p-4 rounded-lg">
            <Image
              src="/images/img4.png" // Update with the correct logo path
              alt="Deep Net Soft Logo"
              className="mx-auto mb-4 h-12"
              width={48}
              height={48}
            />
            <p className="text-blue-500 font-semibold">
              DEEP <span className="text-gray-200">NET</span> <span className="text-gray-400">SOFT</span>
            </p>

          </div>

          {/* Location Section */}
          <div className="border border-gray-600 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Find Us</h3>
            <p className="text-gray-300">
              Address: 123 Tech Avenue,
              <br />
              Innovation City, Techland
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
