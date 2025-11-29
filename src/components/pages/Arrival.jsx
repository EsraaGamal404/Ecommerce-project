import { useCart } from "../../assets/CartContext";
import myImage from '../../assets/images/crt.png'
import myImage2 from '../../assets/images/women.png'
import myImage3 from '../../assets/images/amazone.png'
import myImage4 from '../../assets/images/prefume.png'





export default function  Arrival(){
      const {addToCart} = useCart();
  
  return(
    <div className="ml-32 mt-16">
         <div className="title flex gap-3 ">
 <div className="bg-[--alt-text-color] w-4 h-6 rounded"></div>
 <h2 className="text-[--alt-text-color] font-medium">Featured</h2>
 </div>
 <div>
 <h2 className="text-2xl font-medium mt-5">New Arrival</h2>
 </div>

<div className="new-arrival-container">
  <div className="big-card">
    <div className="overlay">
      <h3>PlayStation 5</h3>
      <p>Black and White version of the PS5<br />coming out on sale.</p>
      <button  onClick={() => addToCart("PlayStation 5", 260, myImage)}>Shop Now</button>
    </div>
  </div>

  <div className="right-column">
    <div className="small-card women">
      <div className="overlay">
        <h3>Women’s Collections</h3>
        <p>Featured woman collections that<br />give you another vibe.</p>
        <button  onClick={() => addToCart("Women’s Collections", 260, myImage2)}>Shop Now</button>

      </div>
    </div>

    <div className="bottom-cards">
      <div className="small-card speakers">
        <div className="overlay">
          <h3>Speakers</h3>
          <p>Amazon wireless speakers</p>
          <button  onClick={() => addToCart("Speakers", 240, myImage3)}>Shop Now</button>
        </div>
      </div>

      <div className="small-card perfume">
        <div className="overlay">
          <h3>Perfume</h3>
          <p>GUCCI INTENSE OUD EDP</p>
          <button  onClick={() => addToCart("Perfume", 110, myImage4)}>Shop Now</button>
        </div>
      </div>
    </div>
  </div>
</div>

 </div>
  )
}