import { Link } from "react-router";
import HeaderWithAccount from "../layout/HeaderWithAccount";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiRead } from "react-icons/ci";
import { useState } from "react";
import myImage from "../../assets/images/image1.png";
import myImage3 from "../../assets/images/delivary.png";
import myImage4 from "../../assets/images/return.png";
import myImage6 from "../../assets/images/ibade.png";
import myImage5 from "../../assets/images/image4.png";
import myImage7 from "../../assets/images/image2.png";
import myImage8 from "../../assets/images/bag.png";
import myImage9 from "../../assets/images/meck.png";
import myImage10 from "../../assets/images/Gp1.png";
import myImage11 from "../../assets/images/jack.png";
import Footer from "../layout/Footer";













export default function ProductDetails(){

  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Havic HV-G92 Gamepad",
      price: 192,
      images: [myImage, myImage, myImage],
      desc: "PlayStation 5 Controller - High quality wireless gamepad with ergonomic design",
      reviews: 65,
      stars: 155,
      colors: ["#000000", "#ffffff", "#ff0000"],
      sizes: ["S", "M", "L"],
    },
    {
      id: 3,
      name: "AK-900 Wired Keyboard",
      price: 200,
      images: [myImage5, myImage5, myImage5],
      desc: "Comfortable wired keyboard with LED lighting and responsive keys. Perfect for and durable buttons. Smooth grip and perfect for gaming enthusiasts,both office and gaming use",
      reviews: 65,
      stars: 4,
      colors: ["#000000", "#00aaff"],
      sizes: ["S", "M"],
    },
  {
     id:2,
      name:"ASUS FHD Gaming Laptop",
      price:960,
      img:myImage6,
      images:[myImage6,myImage6,myImage6],
      desc:"ASUS FHD Gaming Laptop",
       reviews: 65,
 stars: 155,
 colors: ["#000000", "#ffffff", "#ff0000"],
 sizes: ["S", "M", "L"],
  },
  {
        id:4,
      name:"IPS LCD Gaming Monitor",
      price:1160,
      img:myImage7,
      images:[myImage7,myImage7,myImage7],
      desc:"IPS LCD Gaming Monitor",
      reviews: 65,
 stars: 155,
 colors: ["#000000", "#ffffff", "#ff0000"],
 sizes: ["S", "M", "L"],
    },
    {
    id:5,
      name:"Gucci duffle bag",
      price:960,
      img:myImage8,
      images:[myImage8,myImage8,myImage8],
      desc:"Gucci duffle bag",
      reviews: 65,
 stars: 155,
 colors: ["#000000", "#ffffff", "#ff0000"],
 sizes: ["S", "M", "L"],
    },
    {
          id:6,
      name:"RGB liquid CPU Cooler",
      price:1960,
      img:myImage9,
      images:[myImage9,myImage9,myImage9],
      desc:"RGB liquid CPU Cooler",
      reviews: 65,
 stars: 155,
 colors: ["#000000", "#ffffff", "#ff0000"],
 sizes: ["S", "M", "L"],
    },
    {
    id:7,
      name:"GP11 Shooter USB Gamepad",
      price:550,
      img:myImage10,
      images:[myImage10,myImage10,myImage10],
      desc:"GP11 Shooter USB Gamepad",
      reviews: 65,
 stars: 155,
 colors: ["#000000", "#ffffff", "#ff0000"],
 sizes: ["S", "M", "L"],
    },
    {
            id:8,
            name:"Quilted Satin Jacket",
            price:750,
            img:myImage11,
            images:[myImage11,myImage11,myImage11],
            desc:"Quilted Satin Jacket",
            reviews: 65,
       stars: 155,
       colors: ["#000000", "#ffffff", "#ff0000"],
       sizes: ["S", "M", "L"],
    }
  ];

  const product = products.find((item) => item.id === Number(id));

  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <h2 className="text-center mt-10">Product not found</h2>;




  return(
    <div>
      <HeaderWithAccount />
        <div className="mt-16 ml-32 flex gap-5">
  <Link className="text-[--text-color]" to="/Account">Account /</Link>
    <Link className="text-[--text-color]" to="/">Gaming /</Link>
  <Link  to="/">Havic HV G-92 Gamepad </Link>
</div>







   
    <div className="max-w-6xl mx-auto mt-10 p-4 grid md:grid-cols-3 gap-10 ">
     
        <div className="flex gap-4 items-center flex-col">
    {product.images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt=""
        className="w-20 h-20 object-cover border rounded cursor-pointer hover:opacity-70"
      />
    ))}
  </div>
      <div className="flex justify-center items-center">
        <img
          src={product.images[0]}
          alt={product.name}
          className=" rounded-lg shadow-lg max-w-md mr-40 w-96 h-96 mb-40"
        />
      </div>

     
      <div>
        <h2 className="text-2xl font-semibold">{product.name}</h2>
        <p className="text-gray-500 mt-2 text-lg">${product.price}</p>

       
        <div className="flex items-center gap-2 mt-2 text-yellow-400">
           <div className='text-yellow-400 flex gap-1 items-center justify-center'>
  <FaStar />
  <FaStar />
<FaStar />
<FaStar />
<p className="text-[--text-color]">(65)</p>
</div>
          <span className="text-gray-500 text-sm">
            ({product.reviews} reviews)
          </span>
        </div>

       
        <p className="mt-4 text-gray-700">{product.desc}</p>

      
        <div className="mt-6">
          <p className="font-medium mb-2">Size:</p>
          <div className="flex gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`border px-4 py-1 rounded ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

     
        <div className="mt-6">
          <p className="font-medium mb-2">Colours:</p>
          <div className="flex gap-3">
            {product.colors.map((color) => (
              <div
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
                  selectedColor === color ? "border-black" : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>

      
        <div className="mt-6 flex items-center gap-3">
          <p className="font-medium">Quantity:</p>
          <button
            onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
            className="px-3 py-1 border rounded"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="px-3 py-1 border rounded"
          >
            +
          </button>
        </div>

       
        <div className="mt-6 flex items-center gap-3">
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
            Buy Now
          </button>
          <Link to="/cart" className="border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition">
            Add To Cart
          </Link>
        </div>

        <div className="mt-8 text-sm border p-2 border-black">
          <div className="flex justify-between items-center gap-4">
<img className="w-7 h-5" src={myImage3} alt="" />
          <div>
          <p className="text-black font-medium">Free Delivery</p>
          <p className="text-black mt-2">Enter your postal code for Delivery Availability</p>
          </div></div>
          <hr />
          <div className="flex justify-between items-center ">
            <img className="w-7 h-5" src={myImage4} alt="" />
          <div className="mr-12 mt-1">
          <p className="text-black font-medium">30-Day Return Guarantee</p>
          <p className="text-black  mt-2">Free 30 Days Delivery Returns. Details</p>
        </div></div></div>
      </div>
    </div>
    <div className="flex items-center mt-16 ml-32">
      <div className="bg-[--alt-text-color] w-4 h-6 rounded"></div>
        <h3 className="text-xl">Related Item</h3></div>
    <div className="flex items-center gap-5 mt-16 ml-32">

   <div className="card-list mt-5 flex gap-5 flex-wrap">
     <div className="card w-fit">
    <div className='relative'>
       <img className='p-8 bg-[--secondary-color] ' src={myImage} alt="" />
       <p className='absolute top-4 left-3 bg-[--alt-text-color] text-white rounded p-1'>-40%</p>
       <p className='absolute top-4 left-52 bg-white rounded p-1 text-xl'>
       <CiHeart />
       </p>
       <p className='absolute bottom-40 left-52  bg-white rounded p-1 text-xl'>
       <CiRead />
        </p>
       </div>
       <h3 className='font-bold mt-2'>HAVIT HV-G92 Gamepad</h3>
       <div className='flex gap-3 font-bold mt-2' >
         <p className='text-[--alt-text-color]'>$120</p>
         <p className='text-[--text-color]'><del>$160</del></p>
       </div>
       <div className='flex gap-3 mt-3 items-center'>
       <div className='text-yellow-400 flex gap-1'>
     <FaStar />
     <FaStar />
     <FaStar />
     <FaStar />
     <FaStar />
       </div>
       <p className='text-[--text-color]'>(88)</p>
  </div>
     </div> 
     


      <div className="card w-fit">
      <div className='relative bg-[--secondary-color] h-[245px]'>
         <img className='p-10  ' src={myImage5} alt="" />
         <p className='absolute top-4 left-3 bg-[--alt-text-color] text-white rounded p-1'>-35%</p>
         <p className='absolute top-4 left-56 bg-white rounded p-1 text-xl'>
         <CiHeart />
         </p>
         <p className='absolute bottom-40 left-56  bg-white rounded p-1 text-xl'>
         <CiRead />
          </p>
         </div>
         <h3 className='font-bold mt-2'>AK-900 Wired Keyboard</h3>
         <div className='flex gap-3 font-bold mt-2' >
           <p className='text-[--alt-text-color]'>$960</p>
           <p className='text-[--text-color]'><del>$1160</del></p>
         </div>
         <div className='flex gap-3 mt-3 items-center'>
         <div className='text-yellow-400 flex gap-1'>
       <FaStar />
       <FaStar />
       <FaStar />
       <FaStar />
      </div>
      <p className='text-[--text-color]'>(75)</p>
    </div>
       </div>

           <div className="card w-fit">
      <div className='relative bg-[--secondary-color] h-[245px]'>
         <img className='p-10  ' src={myImage7} alt="" />
         <p className='absolute top-4 left-3 bg-[--alt-text-color] text-white rounded p-1'>-35%</p>
         <p className='absolute top-4 left-56 bg-white rounded p-1 text-xl'>
         <CiHeart />
         </p>
         <p className='absolute bottom-40 left-56  bg-white rounded p-1 text-xl'>
         <CiRead />
          </p>
         </div>
         <h3 className='font-bold mt-2'>IPS LCD Gaming Monitor</h3>
         <div className='flex gap-3 font-bold mt-2' >
           <p className='text-[--alt-text-color]'>$960</p>
           <p className='text-[--text-color]'><del>$1160</del></p>
         </div>
         <div className='flex gap-3 mt-3 items-center'>
         <div className='text-yellow-400 flex gap-1'>
       <FaStar />
       <FaStar />
       <FaStar />
       <FaStar />
      </div>
      <p className='text-[--text-color]'>(75)</p>
    </div>
       </div>
     
     
     
           <div className="card w-fit">
     <div className='relative h-[245px]  bg-[--secondary-color] '>
        <img className='p-12 ' src={myImage9} alt="" />
        <p className='absolute top-4 left-60 bg-white rounded p-1 text-xl'>
        <CiHeart />
        </p>
        <p className='absolute bottom-40 left-60  bg-white rounded p-1 text-xl'>
        <CiRead />
         </p>
        </div>
        <h3 className='font-bold mt-2'>Gucci duffle bag </h3>
        <div className='flex gap-3 font-bold mt-2' >
          <p className='text-[--alt-text-color]'>$960</p>
          <p className='text-[--text-color]'><del>$360</del></p>
        </div>
        <div className='flex gap-3 mt-3 items-center'>
        <div className='text-yellow-400 flex gap-1'>
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
     </div>
     <p className='text-[--text-color]'>(65)</p>
   </div>
      </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}