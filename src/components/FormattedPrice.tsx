import { twMerge } from "tailwind-merge";

interface Props {
    amount: number;
    className?: string;
}

const FormattedPrice = ({ amount, className }: Props) => {
    const priceFormat = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 2,
        currencyDisplay: "symbol",
    }).format(amount);

    return (
        <span className={twMerge('text-base font-semibold', className)}>{priceFormat}</span>
    );
}

export default FormattedPrice;
