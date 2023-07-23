import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 pl-10 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div >
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-sm">Welcome to GlamGang! We are a premier online destination for the latest fashion trends and stylish clothing. Our mission is to provide high-quality garments that make you look and feel confident. Shop with us and stay ahead in the fashion game!</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Categories</h3>
          <ul className="text-sm">
            <li>Men's Fashion</li>
            <li>Women's Fashion</li>
            <li>Kids' Fashion</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
          <ul className="text-sm">
            <li>Contact Us</li>
            <li>Returns & Exchanges</li>
            <li>Shipping Information</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 5.31 20.33 9.75 20.88V14.86H7.58V12H9.75V9.66C9.75 7.13 11.44 5.85 13.5 5.85C14.55 5.85 15.61 6.15 15.61 6.15V8H14.37C12.92 8 12.25 8.81 12.25 10V12H14.15L13.86 14.86H12.25V20.88C16.69 20.33 20 16.42 20 12C20 6.48 15.52 2 12 2Z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 4.98C22.04 5.47 20.97 5.8 19.85 6.04C20.99 5.33 21.89 4.29 22.36 3.02C21.31 3.75 20.11 4.28 18.82 4.57C17.83 3.52 16.39 3 14.82 3C11.47 3 9.13 5.31 9.13 8.68C9.13 9.04 9.16 9.39 9.22 9.73C6.04 9.56 3.44 7.85 2.2 5.36C1.64 6.3 1.35 7.43 1.35 8.68C1.35 11.05 2.94 13.07 5.02 13.59C4.37 13.74 3.69 13.8 3 13.8C2.69 13.8 2.39 13.77 2.1 13.72C2.69 15.2 4.05 16.3 5.68 16.33C4.47 17.29 3.01 17.86 1.43 17.86C1.16 17.86 0.89 17.84 0.63 17.78C2.27 18.8 4.21 19.4 6.28 19.4C14.81 19.4 19.36 12.04 19.36 6.32C19.36 6.13 19.36 5.94 19.35 5.75C20.47 4.82 21.4 3.68 22.04 2.37C21.23 2.76 20.34 3.04 19.41 3.2C20.49 2.49 21.45 1.59 22.2 0.55C21.46 1.36 20.61 2 19.68 2.53C18.79 1.85 17.77 1.44 16.7 1.44C15.88 1.44 15.1 1.66 14.4 2.06C13.58 1.19 12.45 0.6 11.2 0.6C9.56 0.6 8.18 1.74 7.67 3.28C7.05 3.1 6.4 2.99 5.73 2.99C5.23 2.99 4.74 3.09 4.29 3.27C4.75 4.75 6.14 5.86 7.83 5.89C6.85 6.86 5.47 7.48 3.96 7.5C2.67 7.5 1.47 7.06 0.53 6.31C2.22 7.29 4.14 7.93 6.13 7.93C5.96 7.61 5.87 7.25 5.87 6.88C5.87 6.01 6.61 5.27 7.48 5.27C8.07 5.27 8.59 5.53 8.91 5.95C9.82 5.81 10.75 5.4 11.54 4.77Z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.5 3C15.67 3 15 3.67 15 4.5V7.5H4.5C3.67 7.5 3 8.17 3 9V20C3 20.83 3.67 21.5 4.5 21.5H19.5C20.33 21.5 21 20.83 21 20V9C21 8.17 20.33 7.5 19.5 7.5H9V4.5C9 3.67 8.33 3 7.5 3H16.5ZM12 14.25C14.33 14.25 16.25 12.33 16.25 10C16.25 7.67 14.33 5.75 12 5.75C9.67 5.75 7.75 7.67 7.75 10C7.75 12.33 9.67 14.25 12 14.25ZM18.5 6.5H17C16.75 6.5 16.5 6.25 16.5 6C16.5 5.75 16.75 5.5 17 5.5H18.5C18.78 5.5 19 5.28 19 5V3.5C19 3.22 18.78 3 18.5 3H17C16.75 3 16.5 2.75 16.5 2.5C16.5 2.25 16.75 2 17 2H18.5C19.33 2 20 2.67 20 3.5V5C20 5.83 19.33 6.5 18.5 6.5Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <hr className="mt-8 border-gray-700" />
      <p className="text-sm text-center mt-8">© 2023 GlamGang - Bold Fashion. All rights reserved.</p>
    </div>
  </footer>
  
  )
}
