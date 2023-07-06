'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

    return (
        <Image 
            onClick={() => router.push('/')}
            alt="logo"
            className="hidden md:block cursor-pointer"
            height="100"
            width="100"
            src="https://links.papareact.com/qd3"
        />
    )
}

export default Logo;