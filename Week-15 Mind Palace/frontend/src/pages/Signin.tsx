import { Input } from "../components/Input"
import Button from "../components/ui/Button";
import { BrainIcon } from "../icons/BrainIcon";

export default function Signin() {
    const inputStyles = "bg-myBlack-700 w-full max-w-[400%]";
    return (<>
        <div className="bg-myBlack-500 text-white h-screen w-screen flex justify-center items-center">
            <div className="w-[50%] py-4 bg-myBlack-700 rounded-3xl">
                <div className="pl-6 pb-5 pt-5">
                    <BrainIcon></BrainIcon>
                </div>
                <div className="flex justify-between">
                    <div>
                        <div className="text-3xl pl-6">
                            Sign in
                        </div>
                        <div className="text-sm pl-6 pt-4">
                            <i>
                                Use the account you've made earlier!
                            </i>
                        </div>
                    </div>
                    <div>
                        <div className="pr-8">
                            <div>
                                <Input placeHolder="Email" extraStyles={inputStyles}></Input>
                            </div>
                            <div>
                                <Input placeHolder="Password" extraStyles={inputStyles} type="password"></Input>
                            </div>
                            <div className="flex justify-end">
                                <Button text={"Submit!"} size="md" variant="primary"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
    )
}