import DessertSelection from "./DessertSelection";
import DrinkSelection from "./DrinkSelection";
import MenuSelection from "./MenuSelection";

export default function SearchMobile() {
  return (
    <div className="xl:hidden font-medium">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4">
          <MenuSelection />
          <DrinkSelection />
          <DessertSelection />
          <div className="flex items-center px-6">
            <button className="btn btn-sm w-[164px] mx-auto dark:bg-white dark:text-black text-lg">
              Ara
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
