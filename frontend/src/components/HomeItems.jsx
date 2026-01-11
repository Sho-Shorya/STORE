import React, { useState } from 'react'
import { addToCart } from '../Context/ProductProvider';
const HomeItems = ({ addToCart, products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const handleProductClick = (item) => {
    setSelectedProduct(item);
    console.log("you clicked");
  };
  // const confirmMessage = ()=>{
  //   return(
  //     <div className='bg-emerald-600 text-white'></div>
  //   )
  // }
  const handleSubmit = (e, item) => {
    e.preventDefault()
    console.log(item);

    // addToCart(item.id,item.companies ? item.companies : null,item.type ? item.type : null)
    setSelectedProduct(null);
  }
  return (
    <div id='Home-items-div' className='mb-20 mt-2 relative'>
      {products.map((item, idx) => {
        return (
          <div key={idx} onClick={() => handleProductClick(item)} className='relative bg-gray-100 flex m-2 p-2 rounded'>
            {selectedProduct ?
              <div onClick={(e) => e.stopPropagation()} className='z-500 fixed bottom-0 rounded-tl-[40px] rounded-tr-[40px] left-0 right-0 bg-gray-200 border-t-6 border-red-600 h-[80%] p-5 z-20'>
                <div className='flex flex-row  justify-between gap-3 ml-3' >
                  <div className='flex items-center '>
                    <img className='h-18 ' src={selectedProduct.image ? selectedProduct.image : selectedProduct.name} alt={selectedProduct.name} />
                  </div>
                  <div className='font-semibold'>
                    <h1 className=' text-[19px] max-w-[220px] '>{selectedProduct.name} / {selectedProduct.hinglishName}</h1>
                    <h1 className='text-[17px] text-red-600 p-[2px]'>₹ {selectedProduct.price}/- </h1>
                  </div>
                  <img onClick={() => { setSelectedProduct(null) }} className='h-10' src='close.png'></img>
                </div >
                <form onSubmit={handleSubmit} className='relative mt-8 flex flex-col justify-center gap-5 text-xl'>
                  {selectedProduct.companies ? (<div className='flex flex-col justify-center gap-5'>
                    <label className=''>कंपनी👇</label>
                    <select className='p-2 text-[20px] bg-gray-300 rounded-lg outline-none'>
                      <option value="">--कोई भी--</option>
                      {selectedProduct.companies.map((company, id) => (
                        <option key={id} value="">{company}</option>
                      ))}
                    </select>
                  </div>
                  ) : ''}
                  {selectedProduct.type ? (<div className='flex flex-col justify-center gap-5'>
                    <label className=''>प्रकार👇</label>
                    <select required className='p-2  text-[20px] bg-gray-300 rounded-lg outline-none'>
                      <option value="">--कोई भी--</option>
                      {selectedProduct.type.map((type, id) => (
                        <option value={id} >{type}</option>
                      ))}
                    </select>
                  </div>
                  ) : ''}
                  <div className='flex flex-row gap-2 justify-between align-center'>
                    <input placeholder='मात्रा' required className='text-[20px] border-2 border-red-700 rounded-lg outline-none p-2 w-[65%] ' type='number'></input>
                    {selectedProduct.measurement ? (
                      <select className='text-[20px] p-2 bg-gray-300 rounded-lg outline-none'>
                        <option value="">--चुने--</option>
                        {selectedProduct.measurement.map((company, id) => (
                          <option value={id}>{company}</option>
                        ))}
                      </select>
                    ) : ''}
                  </div>
                  <button className='fixed w-[90%] bottom-10 bg-red-600 text-white font-bold rounded text-xl p-2'>ऑर्डर✅</button>
                </form>

              </div> : ''}
            <div className='flex items-center '>
              <img className='h-18' src={item.image ? item.image : "chips.png"} alt="" />
            </div>
            <div className='flex flex-col justify-between ml-3'>
              <div>
                <h1 className='text-[17px] max-w-[220px] '>{item.name} / {item.hinglishName}</h1>
                <h1 className='text-xl text-red-600 p-[2px]'>₹ {item.price}/- </h1>
              </div>
              <div>
                <h1 className='text-[15px]'>{item.availability}</h1>
              </div>
                <h1 className='absolute right-0 bottom-8 text-[10] px-1 '>➕</h1>
            </div>
          </div>
        )
      })
      }
    </div >
  )
}

export default HomeItems