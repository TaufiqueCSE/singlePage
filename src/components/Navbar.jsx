import Button from "./Button";
function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-extrabold">Nike</h1>
      <ul className="flex gap-10 items-center">
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <Button bgColor="bg-red-700" color="text-white" fontSize="text-xs">
        Click Me
      </Button>
    </div>
  );
}

export default Navbar;
