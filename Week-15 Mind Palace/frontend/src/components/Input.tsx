interface InputProps {
    onChange?: () => void,
    placeHolder?: string
}

export function Input({onChange, placeHolder}: InputProps) {
    return <input className="transition-colors duration-700 px-4 py-2 rounded-lg m-2 border focus:bg-myPurple-200" type="text" onChange={onChange} placeholder={placeHolder} />
}