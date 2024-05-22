'use client'

import React from 'react';
import Link from 'next/link';;
import Image from 'next/image';
import favicon from './favicon.ico'


const NavBar = () => {
  return (
    
    <nav style={{display: 'flex', marginTop:'2em'}}>
      
      <a href='/'>
      <Image style={{display:'flex',marginLeft:'2em'}} src={favicon} alt="Logo" width={100} />         
      </a>
    
      <ul style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center',paddingLeft:'75em'}}>
        <li ><Link href="/"  style={{color: 'white', fontSize: '1.5em', paddingRight:'2em'}}>Landing</Link></li>
        <li ><Link href="/register" passHref style={{color: 'white', fontSize: '1.5em', paddingRight:'2em'}}>Register</Link></li>
        <li ><Link href="/login" passHref style={{color: 'white', fontSize: '1.5em', paddingRight:'2em'}}>Login</Link></li>
      </ul>

    </nav>
  );
};

export default NavBar;