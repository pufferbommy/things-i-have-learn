import { BsMoonFill } from 'react-icons/bs'

const Header = () => {
  return (
    <div className="p-6 border-b">
      <div className="container flex items-center justify-between mx-auto">
        <div className="font-bold hover:underline text-xl">Things I Have Learn</div>
        <div>
          <span className="cursor-pointer">
            <BsMoonFill size="1.25rem" />
          </span>
        </div>
      </div>
    </div>
  )
}
export default Header
