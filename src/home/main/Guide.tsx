import img from "../../../public/photo1705862469-removebg-preview.png";
import { Link } from "react-router-dom";

const Guide: React.FC = () => {
  return (
    <div className="flex justify-between items-center px-24 mb-80">
      <div>
        <h2 className="z-10 font-montserrat text-5xl font-medium text-[#2F2F2F]">
          Ваш путеводитель в мире <br /> успешного бизнеса <br />
          на Wildberries и Ozon
        </h2>
        <div className="flex gap-5 mt-14">
          <button
            style={{
              background:
                "linear-gradient(90deg, #E81CFF 5.65%, #E81CFF 5.66%, #45CAFF 97.49%)",
            }}
            className="rounded-lg py-5 px-10 font-semibold text-2xl leading-1 text-white font-montserrat"
          >
            Попробовать бесплатно
          </button>
          <Link to="/analytics">
            <button className="rounded-lg border border-[#E81CFF] border-solid py-5 px-10 font-montserrat text-2xl font-semibold">
              Узнать больше
            </button>
          </Link>
        </div>
      </div>
      <div className="relative">
        <img
          className="mr-[-50px] mt-[100px] w-[750px] h-[627px]"
          src={img}
          alt="photo"
        />
        <div className="absolute top-[270px] left-[200px] w-[227px] h-[100px] profit rounded-xl border border-[#E81CFF] absolute">
          <div className="m-2.5">
            <p className="font-montserrat text-[#2F2F2F] text-lg font-semibold not-italic">
              Чистая прибыль
            </p>
            <p className="mt-[-8px] opacity-20 text-[#2F2F2F] font-montserrat text-sm font-semibold not-italic">
              за год
            </p>
          </div>
          <p className="ml-2.5 mt-[12px] text-[#2F2F2F] font-montserrat text-2xl font-semibold not-italic">
            1 243 942 ₽
          </p>
        </div>
        <div className="absolute top-[30px] left-[100px] w-[227px] h-[100px] profit rounded-xl border border-[#E81CFF] absolute">
          <div className="m-2.5">
            <p className="font-montserrat text-[#2F2F2F] text-lg font-semibold not-italic">
              Себестоимость
            </p>
            <p className="mt-[-8px] opacity-20 text-[#2F2F2F] font-montserrat text-sm font-semibold not-italic">
              за месяц
            </p>
          </div>
          <p className="ml-2.5 mt-[12px] text-[#2F2F2F] font-montserrat text-2xl font-semibold not-italic">
            210 353 ₽
          </p>
        </div>
        <div className="absolute top-[370px] left-[-30px] w-[227px] h-[100px] profit rounded-xl border border-[#E81CFF] absolute">
          <div className="m-2.5">
            <p className="font-montserrat text-[#2F2F2F] text-lg font-semibold not-italic">
              Прочие расходы
            </p>
            <p className="mt-[-8px] opacity-20 text-[#2F2F2F] font-montserrat text-sm font-semibold not-italic">
              за год
            </p>
          </div>
          <p className="ml-2.5 mt-[12px] text-[#2F2F2F] font-montserrat text-2xl font-semibold not-italic">
            321 424 ₽
          </p>
        </div>
        <div className="absolute top-[460px] left-[420px] w-[227px] h-[100px] profit rounded-xl border border-[#E81CFF] absolute">
          <div className="m-2.5 flex">
            <p className="font-montserrat leading-6 text-[#2F2F2F] text-lg font-semibold not-italic">
              Комиссия маркетплейса
            </p>
            <p className="text-nowrap mt-[27px] opacity-20 text-[#2F2F2F] font-montserrat text-sm font-semibold not-italic">
              за год
            </p>
          </div>
          <p className="ml-2.5 mt-[-8px] text-[#2F2F2F] font-montserrat text-2xl font-semibold not-italic">
            194 432 ₽
          </p>
        </div>
        <div className="absolute top-[360px] right-[-30px] flex flex-col gap-y-2">
          <div className="flex items-center gap-x-1">
            <div className="w-2.5 h-2.5 bg-[#B94EFF]"></div>
            <p className="font-inter text-xs">Чистая прибыль</p>
          </div>
          <div className="flex items-center gap-x-1">
            <div className="w-2.5 h-2.5 bg-[#49C0F9]"></div>
            <p className="font-inter text-xs">Чистая прибыль</p>
          </div>
          <div className="flex items-center gap-x-1">
            <div className="w-2.5 h-2.5 bg-[#8587FF]"></div>
            <p className="font-inter text-xs">Чистая прибыль</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
