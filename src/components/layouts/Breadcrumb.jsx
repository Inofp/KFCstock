import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md"

const Breadcrumb = ({category}) => {
    return (
        <div className="flex items-center ">
            <Link href="/catalog" className="text-[#777778] no-underline hover:text-inherit hover:no-underline">Каталог</Link>
            <MdOutlineKeyboardArrowRight className="text-xl"/>
            <Link href="/catalog" className="text-[#777778] no-underline hover:text-inherit hover:no-underline">{category}</Link>
        </div>
    );
};

export default Breadcrumb;