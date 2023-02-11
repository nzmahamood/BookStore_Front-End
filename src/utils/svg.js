const Basket = ({height}) => {
    return(
        <svg className={`fill-slate-50 hover:cursor-pointer ${height}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <rect className='fill-slate-50' width="32" height="128" x="120" y="304" fill="#f8fafc" class="ci-primary"/>
                <rect className='fill-slate-50' width="32" height="128" x="200" y="304" fill="#f8fafc" class="ci-primary"/>
                <rect className='fill-slate-50' width="32" height="128" x="280" y="304" fill="#f8fafc" class="ci-primary"/>
                <rect className='fill-slate-50' width="32" height="128" x="360" y="304" fill="#f8fafc" class="ci-primary"/>
                <path className='fill-slate-50' fill="#f8fafc" d="M473.681,168,394.062,16H357.938l79.619,152H74.443L154.062,16H117.938L38.319,168H16V279.468L58.856,496H453.117L496,281.584V168ZM464,278.416,426.883,464H85.144L48,276.332V272H464ZM464,240H48V200H464Z" class="ci-primary"/>
        </svg>
    )
}
export {Basket}