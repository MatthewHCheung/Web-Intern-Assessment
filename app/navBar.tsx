'use client'

import React from 'react';
import Link from 'next/link';;
import Image from 'next/image';
import favicon from './favicon.ico'


const NavBar = () => {
  return (
    
    <nav style={{display: 'flex', marginLeft: '2em', marginTop:'2em'}}>
        <Image src={favicon} alt="Logo" width={100} />         
      <ul style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginLeft: '72em'}}>
        <li ><Link href="/"  style={{color: 'white', fontSize: '1.5em', paddingRight:'2em'}}>Landing</Link></li>
        <li ><Link href="/register" passHref style={{color: 'white', fontSize: '1.5em', paddingRight:'2em'}}>Register</Link></li>
        <li ><Link href="/login" passHref style={{color: 'white', fontSize: '1.5em', paddingRight:'2em'}}>Login</Link></li>
      </ul>

    </nav>
  );
};

export default NavBar;