import { useRef } from "react"
import { CrossIcon } from "../icons/CrossIcon"
import { Input } from "./Input"
import Button from "./ui/Button"
import axios from "axios";
import { BACKEND_URL } from "../Config";

export function CreateContentModal({ fetchFn, open, onClose }: any) {
    const titleRef = useRef<any>("");
    const linkRef = useRef<any>("");

    async function handleSubmit() {
        const link = linkRef.current.value;
        const title = titleRef.current.value;
        const response = await axios.post(BACKEND_URL + "/content", {
            link: link,
            title: title
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        alert(response.data.message);
        fetchFn();
        onClose();
    }

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
                            <Input reference={titleRef} placeHolder="Title" limit={15}></Input>
                        </div>
                        <div className="">
                            <Input reference={linkRef} placeHolder="Link"></Input>
                        </div>
                        <Button text={"Submit"} variant="primary" size="md" onClick={handleSubmit}></Button>
                    </div>
                </span>
            </div>
        </div>}
    </div>
} 