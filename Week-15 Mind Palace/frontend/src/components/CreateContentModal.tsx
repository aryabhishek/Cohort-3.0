import { CrossIcon } from "../icons/CrossIcon"
import { Input } from "./Input"
import Button from "./ui/Button"



export function CreateContentModal({ open, onClose }: any) {
    return <div>
        {open && <div className="w-screen h-screen bg-black fixed top-0 left-0 bg-opacity-80 flex justify-center">
            <div className="flex items-center">
                <span className="bg-white opacity-100 text-2xl p-4 rounded-md">
                    <div className="flex justify-end mb-2">
                        <div onClick={onClose} className="cursor-pointer">
                            <CrossIcon />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="">
                            <Input placeHolder="Title"></Input>
                        </div>
                        <div className="">
                            <Input placeHolder="Link"></Input>
                        </div>
                        <Button text={"Submit"} variant="primary" size="md"></Button>
                    </div>
                </span>
            </div>
        </div>}
    </div>
} 