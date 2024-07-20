function Header() {
  return (
    <header className="flex flex-col items-start gap-100 mb-300 md:flex-row md:mb-500">
      <h2 className="text-preset-2 font-bold">Mortgage Calculator</h2>
      <button className="text-preset-4 underline text-left text-secondary-700 hover:text-secondary-900 focus-visible:text-secondary-900 cursor-pointer transition md:ml-auto">
        Clear All
      </button>
    </header>
  );
}
export default Header;
