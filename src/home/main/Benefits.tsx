import BenefitIcon from "./BenefitIcon";

interface den {
  title: string;
  icon?: React.ReactElement;
  text: string;
}

const benefit: den[] = [
  {
    title: "Статистика",
    text:
      "Получите подробную информацию о заказах, продажах, выкупе и тепловой карте распределения заказов.",
  },
  {
    title: "Финансовая аналитика",
    text:
      "Расчет фактической юнит-экономики, отчет о прибылях и убытках, а также ключевые финансовые показатели: ДРР, ROS, ROI и чистая прибыль.",
  },
  {
    title: "Товарная аналитика",
    text: "АВС анализ для эффективного управления товарным ассортиментом.",
  },
  {
    title: "Телеграмм-Бот",
    icon: <BenefitIcon />,
    text:
      "Управляйте кабинетом и получайте ежедневные отчеты, все это в удобном мессенджере.",
  },
];

const Benefits: React.FC = () => {
  return (
    <div className="mb-36 px-24">
      <h2 className="z-10 font-montserrat text-5xl font-medium text-[#2F2F2F]">
        Преимущества iKnowROS.app
      </h2>
      <div className="flex justify-between w-full mt-16">
        {benefit.map((item, index) => (
          <div key={index} className="flex flex-col max-w-[415px]">
            <div className="z-10 flex justify-between items-center rounded-[14px] p-5 bg-[#2F2F2F] h-[77px]">
              <p className="font-montserrat text-[28px] font-extrabold text-white">
                {item.title}
              </p>
              {item.icon ? item.icon : null}
            </div>
            <div className="z-10 mt-4 p-5 min-h-[163px] bg-[#2F2F2F] rounded-[14px]">
              <p className="font-montserrat text-xl font-normal text-white">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
