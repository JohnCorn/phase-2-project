import React from 'react'
import {motion} from 'framer-motion';
import { AiFillHome, AiFillCheckSquare, AiFillPlusSquare } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function NavBar () 
{
    return(
        <div className='w-screen h-20  bg-blue-200'>
            <div className='flex justify-center items-center gap-10 h-full'>
               
                <NavLink to="/" exact>     
                    <motion.button
                    whileHover={{ 
                        scale: 1.25, 
                        rotate: -15,
                        background: "white",
                        boxShadow: "3px 3px 0 rgba(0, 0, 0, 0.25)",

                    }}
                    whileTap={{ 
                        scale: 0.75,
                        rotate: 15,

                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className='h-10 w-10 rounded-md'
                    >
                        <AiFillHome 
                        size={35}
                        className='m-auto'
                        />
                    </motion.button>
                </NavLink>

                <NavLink to="/item" exact>     
                    <motion.button     
                        whileHover={{ 
                            scale: 1.25, 
                            rotate: -15,
                            background: "white",
                            boxShadow: "3px 3px 0 rgba(0, 0, 0, 0.25)",

                        }}
                        whileTap={{ 
                            scale: 0.75,
                            rotate: 15,

                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className='h-10 w-10 rounded-md'
                    >
                        <AiFillCheckSquare 
                            size={35}
                            className='m-auto'
                        />
                    </motion.button>
                </NavLink>     

                <NavLink to="/add" exact>     
                    <motion.button
                        whileHover={{ 
                            scale: 1.25, 
                            rotate: -15,
                            background: "white",
                            boxShadow: "3px 3px 0 rgba(0, 0, 0, 0.25)",

                        }}
                        whileTap={{ 
                            scale: 0.75,
                            rotate: 15,

                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className='h-10 w-10 rounded-md'
                    >
                        <AiFillPlusSquare    
                            size={35}
                            className='m-auto'
                            />
                    </motion.button>
                </NavLink>     

            </div>
        </div>
    )
}

export default NavBar