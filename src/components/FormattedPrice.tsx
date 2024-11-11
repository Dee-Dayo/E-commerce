import {twMerge} from "tailwind-merge";

interface Props{
    amount: number;
    classname?:string;
}

const FormattedPrice = ({amount, className}: Props) => {
    return (
        <span className={twMerge('text-base font-semibold', className)}>0</span>
    )
}

export default FormattedPrice;