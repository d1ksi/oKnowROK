const Guide: React.FC = () => {
  return (
    <div className="flex px-24 mb-80">
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
          <button className="rounded-lg border border-[#E81CFF] border-solid py-5 px-10 font-montserrat text-2xl font-semibold">
            Узнать больше
          </button>
        </div>
      </div>
    </div>
  );
};

export default Guide;
