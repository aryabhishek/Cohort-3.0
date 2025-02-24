interface InputProps {
    onChange?: () => void,
    placeHolder?: string,
    extraStyles?: string,
    type?: string
}

export function Input({onChange, placeHolder, extraStyles, type = "text"}: InputProps) {
    return <input className={"transition-colors duration-700 px-4 py-2 rounded-md m-2 border" + ` ${extraStyles}`} type={type} onChange={onChange} placeholder={placeHolder} />
}