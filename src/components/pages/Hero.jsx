import React from 'react';
import myImage from '../../assets/images/slide.png'
export default function Hero() {
  const Sidebar = () => {
    const categories = [
      "Woman's Fashion",
      "Men's Fashion",
    ];

    return (
      <section className='section flex justify-between ml-32 gap-4 mt-10'>
      <div className="w-64 p-5 shadow-md ">
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li
              key={index}
              className="flex justify-between items-center  hover:text-blue-600 cursor-pointer"
            >
              {category}
              <span>{'>'}</span>
            </li>
          ))}
          <li>
            <a className='hover:text-blue-600 cursor-pointer' href="/">Electronics</a>
          </li>
          <li>
    <a className='hover:text-blue-600 cursor-pointer' href="/">Home & Lifestyle</a>
  </li>
  <li>
  <a className='hover:text-blue-600 cursor-pointer' href="/">Medicine</a>
</li>
<li>
  <a className='hover:text-blue-600 cursor-pointer' href="/">Sports & Outdoor</a>
</li>
<li>
  <a className='hover:text-blue-600 cursor-pointer' href="/">Baby’s & Toys</a>
</li>
<li>
  <a className='hover:text-blue-600 cursor-pointer' href="/">Groceries & Pets</a>
</li>
<li>
  <a className='hover:text-blue-600 cursor-pointer' href="/">Health & Beauty</a>
</li>
        </ul>
      </div>
      <div className='image'>
    <img className="w-full " src={myImage} alt="slid" />
    </div>
      </section>
    );
  };

  return (
    <div className="container">
      <Sidebar />
    </div>
  );
}