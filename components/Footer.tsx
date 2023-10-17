import React from 'react'

const Footer = () => {
    let currentYear = new Date().getFullYear();

  return (
    <footer className='mb-10 w-full flex items-center text-center justify-center'>
        <small>Copyright &copy;{currentYear} Created by Son Trong Vo</small>
    </footer>
  )
}

export default Footer