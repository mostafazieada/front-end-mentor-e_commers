
export default function Button({ id, direction, size, position, onClick }) {
    return (
        <button
            id={id}
            className={`absolute ${size} ${position} rounded-full bg-white 
            ${direction === 'left' ? '' : 'rotate-180'} `}
            onClick={onClick}
        >
            <svg className='translate-x-[100%]' width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" />
            </svg>
        </button>
    )
}