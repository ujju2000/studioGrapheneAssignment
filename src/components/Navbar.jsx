import  React , {useState}  from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
import { AiOutlineClose} from 'react-icons/ai';

export default function Navbar() {
    const [toggle , setToggle] = useState(false);
    const [nav , setNav] = useState(false);
    const handleNavMenu = () => {
        setNav(!nav);
    }
    const navbar = [
        { name: 'Home', id: 'home'},
        { name: 'About', id: 'about' },
        { name: 'Our Products', id: 'product', child: [
        { name: 'Product 1', id: 'p1'},
        { name: 'Product 2', id: 'p2' },
        { name: 'Product 3', id: 'p3'},
        { name: 'Product 4', id: 'p4' },
        ] },
        { name: 'Contact Us', id: 'contact'},
    ];

    const handleClick = () => {
       
        setToggle(!toggle);
       
    }

  return (
    <div className='w-full text-white font-Poppins'>
        <div className = 'flex justify-between items-center px-[40px]'>
            <h1 className = 'text-[40px] font-light '>ShopKart</h1>
            <ul className = 'hidden  basis-40 md:flex justify-between items-center text-[14px] font-[WorkSans] font-bold'>
                <li className = ''>WISHLIST (0)</li>
                <li>BAG (0)</li>
            </ul>
        <div className = 'md:hidden cursor-pointer' onClick = {handleNavMenu}>
            {!nav  ? <GiHamburgerMenu size = {25} color = 'white'/>: <AiOutlineClose size = {25} color = 'white'/>}
        </div>
        </div>
        <div className = 'relative mb-7 px-[40px]'>
            <hr className = 'h-[1px] bg-white'/>
            <img src="assets/star.png" alt=""  className = 'absolute left-[40%] top-[-10px] '/>
        </div>
        
        <ul className = {nav  ? 'h-[300px] w-full z-10 flex flex-col justify-around items-center bg-black' : 'hidden md:flex w-[60%]  uppercase justify-between cursor-pointer px-[40px]'}>

            {navbar.map((nav) => {
                return (nav.id === "product" ? <li id = {nav.id} onClick = {handleClick} >{toggle ? <ShowToggled child = {nav.child}/>: "Our Products"}</li> : <li id = {nav.id}>{nav.name}</li> )
            })}
        </ul>

       
    </div>
  )
}

function ShowToggled({child}) {
    return (

        <ul className = 'flex flex-col text-white uppercase cursor-pointer transition ease-linear duration-300'>
            <li>Our Products</li>
            {
                
                child.map((val) =>  <li>{val.name}</li>)
                
            }
        </ul>
    )
}
