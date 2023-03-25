import Image from "next/image"
import logo from '@/images/avatar.png'

export default function Logo() {
    return (
        <div className="flex w-16">
            <Image src={logo} alt={"Fermyon Logo"} />
        </div>
    )
}
