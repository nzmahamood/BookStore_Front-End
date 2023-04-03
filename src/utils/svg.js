import { useNavigate } from "react-router-dom"

const Basket = ({height, fill}) => {
    const fillColor = fill ? fill: 'fill-slate-50'
    return(
        <svg className={`fill-slate-50 hover:cursor-pointer ${height}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <rect width="32" height="128" x="120" y="304" fill="#f8fafc" className="ci-primary hover:fill-slate-900"/>
                <rect width="32" height="128" x="200" y="304" fill="#f8fafc" className="ci-primary hover:fill-slate-900"/>
                <rect width="32" height="128" x="280" y="304" fill="#f8fafc" className="ci-primary hover:fill-slate-900"/>
                <rect width="32" height="128" x="360" y="304" fill="#f8fafc" className="ci-primary hover:fill-slate-900"/>
                <path fill="#f8fafc" d="M473.681,168,394.062,16H357.938l79.619,152H74.443L154.062,16H117.938L38.319,168H16V279.468L58.856,496H453.117L496,281.584V168ZM464,278.416,426.883,464H85.144L48,276.332V272H464ZM464,240H48V200H464Z" class="ci-primary"/>
        </svg>
    )
}

const AuthLogo = () => {
    const navigate = useNavigate()
    return (
        <div onClick={()=> navigate('/')} className='p-2 pr-3 pl-3 bg-gradient-to-r from-teal-500 to-teal-700 rounded-lg mt-12'>
        <div className='flex items-center justify-center hover:cursor-pointer'>
        <svg className='h-6 fill-slate-50' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zm-118.41 145.1c-59.33-36.32-155.43-46.3-203.79-49.05-16.25-.92-29.8 11.46-29.8 27.09v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87v-245.99c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06v-222.82c-.01-15.63-13.56-28.01-29.81-27.09z"/></svg>
        <h4 className='px-2 mt-1 text-slate-50 text-center font-inter font-semibold font-italic'>Book<span className='font-inter font-semibold'>Store</span></h4>
        </div>
        </div>
    )
}

const MsLogo = () =>{
    return(
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24"><path d="M0 0h15.206v15.206H0z" fill="#f25022"/><path d="M16.794 0H32v15.206H16.794z" fill="#7fba00"/><path d="M0 16.794h15.206V32H0z" fill="#00a4ef"/><path d="M16.794 16.794H32V32H16.794z" fill="#ffb900"/></svg>
    )
}
export {Basket, AuthLogo, MsLogo}