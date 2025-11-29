import myImage7 from "../../assets/images/image1.png"

export default function ProductCard(){

  const Products = [
    {
      id: 1,
      name:"HAVIT HV-G92 Gamepad",
      price:560,
      img:myImage7,
      images:[myImage7,myImage7,myImage7],
      desc:"PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
       reviews: 65,
 stars: 155,
 colors: ["#000000", "#ffffff", "#ff0000"],
 sizes: ["S", "M", "L"],
    },{
     id:3,
      name:"AK-900 Wired Keyboard",
      price:200,
      img:myImage7,
      images:[myImage7,myImage7,myImage7],
      desc:"AK-900 Wired Keyboard",
       reviews: 65,
 stars: 155,
 colors: ["#000000", "#ffffff", "#ff0000"],
 sizes: ["S", "M", "L"],
    },{
    id:2,
      name:"ASUS FHD Gaming Laptop",
      price:960,
      img:myImage7,
      images:[myImage7,myImage7,myImage7],
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
      img:myImage7,
      images:[myImage7,myImage7,myImage7],
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
      img:myImage7,
      images:[myImage7,myImage7,myImage7],
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
      img:myImage7,
      images:[myImage7,myImage7,myImage7],
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
      img:myImage7,
      images:[myImage7,myImage7,myImage7],
      desc:"Quilted Satin Jacket",
      reviews: 65,
 stars: 155,
 colors: ["#000000", "#ffffff", "#ff0000"],
 sizes: ["S", "M", "L"],
    }
  ];
  return(
    <div className="flex flex-wrap gap-8 justify-center mt-10">
      {Products.map((p) =>(
      <ProductCard
      key={p.id}
      id={p.id}
      name={p.name}
      img={p.img}
      addToCart={() =>
        console.log("add", p.name)}/>
      
      ))}

    </div>
  )
}