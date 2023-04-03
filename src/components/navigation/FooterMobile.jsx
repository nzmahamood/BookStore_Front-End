import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

const FooterMobile = () => {
  return (
    <footer className='absolute mt-10 flex flex-col h-[665px] md:h-[332px] w-full bg-gray-900 md:pb-3'>
        {/* Mailing List */}
        <div className='w-full h-[155px] md:h-[116px] flex flex-col items-center justify-center bg-white'>
            <h4 className='font-inter font-semibold text-slate-900 absolute top-1'>Join Our Mailing List</h4>
            <form className='flex flex-col items-center gap-2 md:w-[50%] md:flex-row'>
                <input type="email" placeholder="Enter Your Email Address" className="w-[315px] h-[35px] md:w-[65%] border border-slate-700 rounded-sm px-2" />
                <button className="w-[315px] h-[35px] md:w-[35%] px-2 bg-gradient-to-r from-teal-600 to-teal-900 font-inter text-white tracking-widest rounded-sm">Go</button>
            </form>
        </div>
        {/* Div For All Contents */}
        <div className='md:w-full md:h-[216px] md:flex md:flex-row-reverse'>
        {/* social icons */}
        <div className='w-full h-16 border-b border-white flex items-center justify-center gap-1 md:flex-col md:items-end md:w-[calc(100%_/_3)] md:h-full md:relative md:float-right md:border-none md:justify-between md:gap-0 pr-3'>
            <div className='hidden md:block w-full text-center md:text-right py-2 border-b-2 border-slate-50 relative top-0'><h4 className='font-inter font-medium text-slate-50'>Socials</h4></div>
            <InstagramIcon className='text-white' />
            <YouTubeIcon className='text-white' />
            <GitHubIcon className='text-white' />
        </div>
        {/* footer logo and copyright box */}
        <div className='w-full absolute flex justify-start md:relative bottom-0 md:w-[calc(100%_/_3)] md:flex md:flex-col md:justify-center'>
            <div className='p-2 pr-3 pl-3 rounded-lg relative left-0 flex justify-between flex-col w-full h-full md:justify-center items-center'>
                {/* logo */}
                <div className='flex items-center justify-center hover:cursor-pointer flex-col md:justify-between'>
                <svg className='h-6 md:h-10 fill-slate-50' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zm-118.41 145.1c-59.33-36.32-155.43-46.3-203.79-49.05-16.25-.92-29.8 11.46-29.8 27.09v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87v-245.99c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06v-222.82c-.01-15.63-13.56-28.01-29.81-27.09z"/></svg>
                <h4 className='px-2 mt-1 text-slate-50 text-center font-inter font-semibold font-italic md:text-xl'>Book<span className='font-inter font-semibold'>Store</span></h4>
                </div>
                {/* copyright */}
                <div className='text-center'>
                    <span className='text-slate-50 font-inter font-medium text-xs'>&#169; BookStore Shop 2023</span>
                </div>
            </div>
        </div>
        {/* footer navigations */}
        <div className='w-full md:w-[calc(100%_/_3)] min-h-[354px] md:min-h-full pl-3'>
            {/* header for large screen */}
            <div className='hidden md:block w-full text-center md:text-left py-2 border-b-2 border-slate-50 relative top-0'>
                <h4 className='font-inter font-medium text-slate-50'>BookStore</h4>
            </div>
            <div className='w-full h-[70.8px] md:h-[calc(100%_/_6)] flex items-center'>
                <span className='text-slate-50 text-sm font-inter font-semibold'>About Us</span>
            </div>
            <div className='w-full h-[70.8px] md:h-[calc(100%_/_6)] flex items-center'>
                <span className='text-slate-50 text-sm font-inter font-semibold'>Contact Us</span>
            </div>
            <div className='w-full h-[70.8px] md:h-[calc(100%_/_6)] flex items-center'>
                <span className='text-slate-50 text-sm font-inter font-semibold'>Help</span>
            </div>
            <div className='w-full h-[70.8px] md:h-[calc(100%_/_6)] flex items-center'>
                <span className='text-slate-50 text-sm font-inter font-semibold'>Privacy Policy</span>
            </div>
            <div className='w-full h-[70.8px] md:h-[calc(100%_/_6)] flex items-center'>
                <span className='text-slate-50 text-sm font-inter font-semibold'>Terms and Condtions</span>
            </div>
        </div>
        </div>
        </footer>
  )
}

export default FooterMobile