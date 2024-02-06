const Header = () => {
  return (
    <div className="flex items-center justify-between h-[50px] max-w-[1440px] mx-auto ">
      <ul className="flex items-center gap-16">
        <li className="text-sm font-medium">Home</li>
        <li className="text-sm font-medium">Product</li>
        <li className="text-sm font-medium">Insight</li>
      </ul>
      <div className="flex items-center gap-8">
        <button className="text-sm font-medium bg-transparent px-4  rounded-md border-2 border-black/30">
          Login
        </button>
        <button className="text-sm font-medium bg-black text-white px-4  rounded-md">
          Register
        </button>
      </div>
    </div>
  );
};

export default Header;
