import myImage from '../../assets/images/Services.png';
import myImage2 from '../../assets/images/hitphone.png';
import myImage3 from '../../assets/images/ok.png';

export default function Services(){
  return(
    <section className="ml-32 mt-24">
    <div className="container flex items-center justify-center gap-20 flex-wrap">
      <div>
        <img className='flex justify-center items-center m-auto' src={myImage} alt="" />
        <h3 className='text-center font-bold mt-4 text-xl' >FREE AND FAST DELIVERY</h3>
        <p className='text-center'>Free delivery for all orders over $140</p>
      </div>
      <div>
        <img className='flex justify-center items-center m-auto' src={myImage2} alt="" />
        <h3 className='text-center font-bold  mt-4 text-xl'>24/7 CUSTOMER SERVICE</h3>
        <p className='text-center'>Friendly 24/7 customer support</p>
      </div>
      <div>
        <img className='flex justify-center items-center m-auto' src={myImage3} alt="" />
        <h3 className='text-center font-bold  mt-4 text-xl'>MONEY BACK GUARANTEE</h3>
        <p className='text-center'>We reurn money within 30 days</p>
      </div>
    </div>
    </section>
  )
}