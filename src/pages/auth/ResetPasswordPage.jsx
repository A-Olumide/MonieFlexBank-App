import PasswordFormField from "../../components/formfields/PasswordFormField";
import OnboardingHeader from "../../components/headers/OnboardingHeader";
import { useState } from "react";
import {AuthLinkButton, Button} from "../../components/Buttons";
import OurRoutes from "../../commons/OurRoutes";
import Assets from "../../assets/Assets";
import Title from "../../commons/Title"

function ResetPasswordPage() {
    const [password, setPassword] = useState("")
    const [visible, setVisible] = useState(true)
    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmVisible, setConfirmVisible] = useState(true)

    const handleToggle = () => {
        setVisible(!visible)
    }
    const handleConfirmToggle = () => {
        setConfirmVisible(!confirmVisible)
    }
    const suggestPassword = () => {
        let value = "";
        const CHARACTERS = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+~";
        for(let i = 0; i < 8; i++) {
            value += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length))
        }
        console.log(value)
        setPassword(value)
        setConfirmPassword(value)
    }

    Title("MonieFlex - Reset Your Password")

    return (
        <div className="bg-stone-100 flex flex-col items-stretch">
            <OnboardingHeader />
            <div className="flex max-md:flex-col max-md:items-stretch">
                <div className="flex flex-col items-center justify-center items-stretch w-[49%] max-md:w-full max-md:ml-0">
                    <div className="shadow-sm bg-white flex grow flex-col w-full px-20 py-12 max-md:max-w-full max-md:px-5">
                        <p className="text-zinc-800 text-3xl font-bold tracking-wide text-left w-[500px] max-w-full mt-32 max-md:mt-10"
                            style={{
                                width: '500px', color: '#2E2E2E',
                                fontFamily: 'Urbanist', fontSize: '28px',
                                fontStyle: 'normal', fontWeight: 700,
                                lineHeight: 'normal', letterSpacing: '0.28px',
                            }}
                        >
                            RESET PASSWORD
                        </p>
                        <p
                            className="text-neutral-400 text-left font-medium tracking-normal mt-1.5
                                max-md:max-w-full"
                            style={{
                                color: '#5B5B5B', fontFamily: 'Urbanist',
                                fontSize: '16px', fontStyle: 'normal',
                                fontWeight: 500, lineHeight: 'normal',
                                letterSpacing: '0.16px'
                            }} >
                            Create a new password you can remember to avoid forgetting 
                            or click on suggest for a strong password.
                        </p>
                        <PasswordFormField
                            id={"new-password"}
                            title={"Enter New Password"}
                            visible={visible}
                            value={ password }
                            onValueChanged={e => setPassword(e)}
                            onToggle={handleToggle}
                        />
                        <button
                            onClick={suggestPassword}
                            className="text-zinc-800 text-center text-sm whitespace-nowrap mt-2
                            self-end max-md:mr-2.5"
                        >
                            Suggest a strong password
                        </button>
                        <PasswordFormField
                            id={"confirm-password"}
                            title={"Confirm New Password"}
                            visible={confirmVisible}
                            value={ confirmPassword }
                            onValueChanged={e => setConfirmPassword(e)}
                            onToggle={handleConfirmToggle}
                        />
                        <Button text={"Reset Password"} isWhite={true}/>
                        <AuthLinkButton title={"Back to Login"} path={ OurRoutes.login }/>
                    </div>
                </div>
                <img src={ Assets.resetPassword } alt="Reset Password" />
            </div>
        </div>

    );
}

export default ResetPasswordPage