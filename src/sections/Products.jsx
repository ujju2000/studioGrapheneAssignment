import React, { useEffect, useState } from 'react'
import Box from '../components/Box';
export default function Products() {
  const [product, setProduct]  = useState([]);
  const [category, setCategory] = useState([]);
  const [clickedCategory, setClickedCategory] = useState("men's clothing");
  const handleClick = (event) => {

    setClickedCategory(event.target.getAttribute('value'));
    
  } 
    const fetchedInfo =  async () => {
        const resProduct = await fetch('https://fakestoreapi.com/products');
        const resCategory = await fetch('https://fakestoreapi.com/products/categories')
        const responseProduct = await resProduct.json();
        const responseCategory = await resCategory.json();
        return {
          responseProduct , responseCategory
        };
    }
    useEffect(() => {
        const data = fetchedInfo();
        data.then((data) => {
          setProduct(data.responseProduct)
          setCategory(data.responseCategory);
        });
        
    }, []);

  return (
    <div className = 'w-full '>
        <div className = 'w-full flex justify-between items-center px-[20px] '>
          <h2 className = 'font-WorkSans text-[40px] md:text-[90px] font-semibold'>New products</h2>
          <div className="hidden md:flex basis-60 arrows  justify-around items-center cursor-pointer">
            <img src="assets/leftArrow.svg" alt="" />
            <img src="assets/rightArrow.svg" alt="" />
          </div>
        </div>
        <div className ='px-[15px] flex justify-start items-center'>
          <img src="assets/blackStar.svg" alt="" className = ''/>
          <hr className='w-[643px] h-[2px] bg-black'/>
        </div>

        <div className='p-[20px] '>
          <div className = 'flex flex-col md:flex-row '>
            <ul className = 'md:basis-[30rem] flex md:flex-col justify-around md:justify-start items-center font-WorkSans text-[14px] md:text-[18px] font-normal  cursor-pointer capitalize '>
              
              {
                category.map((list) => {
                  return (<li className = 'hover:font-bold my-6' onClick = {handleClick} value = {list}>{list}</li>)
                })
              }
            </ul>

            <div className = 'product-list flex justify-start overflow-x-scroll overflow-y-auto gap-[20px] '> 
                {
                  product.map((prod, index) => {return ( prod.category === clickedCategory && <Box key = {index} product = {prod} />) })
                }
            </div>
          </div>

          
        </div>
    </div>
  )
}
