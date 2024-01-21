import LightSwitch from "./home/header/LightSwitch";
import imeges from "../public/imges.png";
interface link {
  link: string;
  href: string;
}

const links: link[] = [
  {
    link: "Общая аналитика",
    href: "#",
  },
  {
    link: "Фактическая юнитка",
    href: "#",
  },
  {
    link: "ОПУ",
    href: "#",
  },
  {
    link: "АВС анализ",
    href: "#",
  },
  {
    link: "Тепловая карта РЗ",
    href: "#",
  },
];

const Analytics: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center my-[30px] mx-[62px]">
        <div>
          <nav>
            <ul className="flex gap-[40px]">
              {links.map((item, index) => (
                <li
                  key={index}
                  className="font-montserrat font-semibold text-2xl underlining"
                >
                  <a href={item.href}>{item.link}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-5">
          <LightSwitch />
          <button className="h-[45px] py-[13px] px-[23px] flex items-center rounded-lg border border-[#2F2F2F] text-[#2F2F2F]">
            Пополнить
          </button>
          <button className="h-[45px] py-[7px] px-[18px] flex items-center rounded-lg bg-[#2F2F2F] text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              className="mr-[4px] min-h-[30px] min-w-[30px]"
            >
              <path
                d="M6.25 20L3.75 6.25L10.625 12.5L15 5L19.375 12.5L26.25 6.25L23.75 20H6.25ZM23.75 23.75C23.75 24.5 23.25 25 22.5 25H7.5C6.75 25 6.25 24.5 6.25 23.75V22.5H23.75V23.75Z"
                fill="white"
              />
            </svg>
            26 дней
          </button>
        </div>
      </div>
      <div className="bg-[#F8F9FC] mx-[62px]">
        <div className="mt-[29px]">
          <h2 className="font-montserrat text-2xl font-bold">
            КПЭ за последние 30 дней
          </h2>
          <img className="w-[100%]" src={imeges} alt="photo" />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
