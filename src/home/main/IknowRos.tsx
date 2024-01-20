import { Link } from "react-router-dom";
import sticker from "../../../public/Stickers.png";
const IknowRos: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-24 pb-48">
      <div>
        <p className="z-10 max-w-[1156px] font-montserrat text-3xl font-bold text-[#2F2F2F]">
          <span className="text-[#E81CFF]">iKnowROS.app</span> - ваш надежный
          инструмент для принятия обоснованных решений, адаптированный под ваш
          бизнес на Wildberries и Ozon. Начните свой путь к успеху прямо сейчас!
        </p>
        <Link to="/register">
          <button
            style={{
              background:
                "linear-gradient(90deg, #E81CFF 5.65%, #E81CFF 5.66%, #45CAFF 97.49%)",
            }}
            className="mt-11 rounded-lg py-5 px-10 font-semibold text-2xl leading-1 text-white font-montserrat"
          >
            Зарегистрироваться
          </button>
        </Link>
      </div>
      <img src={sticker} alt="sticker" />
    </div>
  );
};

export default IknowRos;
