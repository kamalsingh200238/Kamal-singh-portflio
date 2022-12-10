import Link from "next/link"
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";

const LeftSideFixedButton = () => {
  return (
    <aside className="fixed bottom-0 left-[4%] h-[40vh] max-lg:hidden">
      <div className="grid h-full grid-rows-2 place-items-center">
        <div className="grid h-full text-xl text-secondary gap-1">
          <Link href={"https://github.com/kamalsingh200238"} target="_blank">
            <AiFillGithub />
          </Link>
          <Link href={"https://twitter.com/Kamalsingh1605"} target="_blank">
            <AiOutlineTwitter />
          </Link>
          <Link href={"https://www.linkedin.com/in/kamal--singh/"} target="_blank">
            <AiFillLinkedin />
          </Link>
        </div>
        <div className="h-4/5 w-[1px] self-end bg-gray-500" />
      </div>
    </aside>
  )
}

export default LeftSideFixedButton