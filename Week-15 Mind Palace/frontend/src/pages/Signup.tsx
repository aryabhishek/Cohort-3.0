import { useRef } from "react";
import { Input } from "../components/Input"
import Button from "../components/ui/Button";
import { BrainIcon } from "../icons/BrainIcon";
import { BACKEND_URL } from "../Config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const usernameRef = useRef<any>("");
    const passwordRef = useRef<any>("");
    const navigate = useNavigate();

    async function handleSignup() {
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        await axios.post(BACKEND_URL + "/signup", {
            username,
            password
        });
        alert("Signed up succesfully!");
        navigate("/signin");
    }


    const inputStyles = "bg-myBlack-700 w-full";
    return (<>
        <div className="bg-myBlack-500 text-white h-screen w-screen flex justify-center items-center">
            <div className="h-[50%] w-[50%] py-4 bg-myBlack-700 rounded-3xl">
                <div className="pl-6 pb-5 pt-5">
                    <BrainIcon></BrainIcon>
                </div>
                <div className="flex justify-between gap-4">
                    <div className="w-[25%]">
                        <div className="text-3xl pl-6">
                            Sign up
                        </div>
                        <div className="text-sm pl-6 pt-4">
                            <i>
                                Use any account you'd like!
                            </i>
                        </div>
                    </div>
                    <div className="flex-1 pr-6">
                        <div className="space-y-4">
                            <div className="ml-[22%] w-[75%]">
                                <Input reference={usernameRef} placeHolder="Username" extraStyles={inputStyles}></Input>
                            </div>
                            <div className="ml-[22%] w-[75%]">
                                <Input reference={passwordRef} placeHolder="Password" extraStyles={inputStyles} type="password"></Input>
                            </div>
                            <div className="flex justify-end">
                                <Button text={"Submit!"} size="lg" variant="primary" onClick={handleSignup}></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
    )
}