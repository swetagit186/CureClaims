import React from 'react'
import logo from "../assets/Logo.svg"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"
import { NavbarLinks } from '../data/navbar-links'


const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-evenly bg-yellow-50 h-[70px] items-center'>

        <Link to="/" className='text-white text-2xl'> 
            CureClaims
        </Link>

        <nav>
            <ul className='flex gap-3'>
                {
                    NavbarLinks.map((item,index)=>
                    (
                        <li>
                            <Link to={item?.path}>{item.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex ml-5 mr-3 gap-3'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button>
                        Login
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button >
                        Sign Up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
      
    </div>
  )
}

export default Navbar
