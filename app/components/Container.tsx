'use client'

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
    return (<div
        className="
        px-5
        max-w-[2520px]
        mx-auto
        xl:px-20
        md:px-10
        sm:px-5
        xs:px-5
        "
    >
        {children}
    </div>)
}

export default Container;