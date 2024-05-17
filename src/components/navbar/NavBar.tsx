import AccountMenu from './AccountMenu';

export default function NavBar() {

  return (
    <>
      <div className="flex justify-between items-center w-full">
        <p className="text-2xl">AnnaLena Shop</p>
        <div className="flex">
          <AccountMenu />
        </div>
      </div>
    </>
  )
}