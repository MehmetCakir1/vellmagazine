import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import Sidebar from './Sidebar'
import { useState } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'
import { menuItems } from '../../utils/menuItems';
import MenuItems from './MenuItems';
import { useContext } from 'react'
import {VellMagazineContext} from '../../context/VellMagazineContext'


const VellNavbar = () => {
  const {theme,setTheme,changeTheme}=useContext(VellMagazineContext)
  const [isShow, setIsShow] = useState(false)
  // const [theme, setTheme] = useState(getStorage Theme())
  const navigate = useNavigate()


  const handleChange = (e) => {
    navigate('/allarticles', { state: e.target.value })
  }

  

  return (
    <nav
      className="fixed top-0 left-0 w-full z-40 pt-2 pl-2 sm:pl-0 sm:px-5 text-[17px] lg:border-b border-slate-400"
      id="vellnavbar"
    >
      <section className="flex justify-between  items-center sm:mb-[1.8rem]">
        <div className="flex justify-start lg:justify-center items-center  w-full translate-x-[60px]">
          <NavLink
            to="/"
            className="font-serif text-[25px] whitespace-nowrap  h-full flex items-center justify-start translate-x-[-45px] lg:translate-x-0"
          >
            Vell Magazine
          </NavLink>
          <p className="px-1 text-sm hidden lg:block">by</p>
          <NavLink
            to="https://vmodel.app/"
            className="font-serif text-[24px] whitespace-nowrap hidden lg:block"
          >
            <img src={theme=="light-theme" ? "/images/Logo.jpg" : "/images/logoForDarkMode.png"}  alt="logo" className="w-[80px] pt-1 " />
          </NavLink>
        </div>

        <div className="text-sm  flex justify-between items-center gap-4 authors h-full px-2  relative z-10">
          <Link
            to="/subscribe"
            className=" items-center justify-center h-full hidden lg:flex align-middle"
          >
            SUBSCRIBE
          </Link>
          {/* <Link
            to=""
            className="hidden lg:flex items-center justify-center h-full align-middle"
          >
            SIGN IN
          </Link> */}
          <button
            className="navbar-switch flex items-center justify-center text-[20px] lg:hidden"
            onClick={changeTheme}
          >
            {theme === 'light-theme' ? (
              <BiMoon />
            ) : (
              <BiSun className="text-yellow-400" />
            )}
          </button>
          <FaBars
            className="text-3xl faBars lg:hidden flex items-center justify-center h-full"
            onClick={() => setIsShow(!isShow)}
          />
          <button
            className="navbar-switch lg:flex items-center justify-center text-2xl hidden"
            onClick={changeTheme}
          >
            {theme === 'light-theme' ? (
              <BiMoon />
            ) : (
              <BiSun className="text-yellow-400" />
            )}
          </button>
        </div>
      </section>
      <section className=" items-center justify-center px-4 lg:flex ">
        {/* <label for="cars">Choose a date</label> */}
        <select
          name="dates"
          id="dates"
          className="border-0 text-sm bg-transparent font-[900] focus-within:ring-0 cursor-pointer hidden lg:block "
          onChange={(e) => handleChange(e)}
          defaultValue={'DEFAULT'}
        >
          <option value="DEFAULT" disabled hidden className="py-2 font-bold cursor-pointer  ">
            SELECT AN EDITION
          </option>
          <option value="DEC 2022 EDITION" className="py-2 font-black cursor-pointer">
          DEC 2022 EDITION
          </option>
          <option value="JAN 2023 EDITION" className="py-2 font-black cursor-pointer ">
            JAN 2023 EDITION
          </option>
        </select>
        <ul className="lg:grid grid-flow-col-dense gap-[2.7rem] ml-[2.2rem] hidden bg-transparent">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
      </ul>
        
      </section>
      {isShow && <Sidebar setIsShow={setIsShow} theme={theme}/>}
    </nav>
  )
}

export default VellNavbar
