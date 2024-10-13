import Button from "./Button"
import { SiFlipkart } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";

function Main() {
  return (
    <div className="flex py-20">
        <div className="l-main flex-1">
            <h1 className="uppercase tracking-wide font-black text-7xl">Your feet deserve <br /> the best...</h1>
            <p className="my-10 w-96 uppercase text-sm font-medium text-gray-500 leading-5">lor sitr pisicing elit. Tenetur error nam fuga, ea expedita provsunt placeat ex spernatur omnis aspiores dicta accusantium magnam natus.</p>

            <div className="btns flex gap-10">
                <Button bgColor="bg-red-700" color="text-white" fontSize="text-md">Shop Now</Button>
                <Button bgColor="bg-gray-200" color="text-black font-bold" fontSize="text-md">Categories</Button>
            </div>
            <p className="mt-6 mb-2">Also available on</p>
            <div className="icons flex gap-3">
                <span><SiFlipkart /></span>
                <span><FaAmazon />
                </span>
            </div>
        </div>
        <div className="r-main flex-1 ">
            <img src='https://static.vecteezy.com/system/resources/previews/022/639/243/non_2x/illustration-of-a-shoe-in-blue-color-and-white-background-vector.jpg' alt="" />
        </div>
    </div>
  )
}

export default Main