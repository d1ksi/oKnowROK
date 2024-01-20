import FooterBlock from "./footer/FooterBlock";
import HeaderBlock from "./header/HeaderBlock";
import Benefits from "./main/Benefits";
import Guide from "./main/Guide";
import IknowRos from "./main/iknowros";
import Welcome from "./main/Welcome";
import WhyIknowRos from "./main/WhyIknowRos";

const HomePage: React.FC<{}> = () => {
  return (
    <div className="overflow-hidden">
      <HeaderBlock />
      <Guide />
      <Welcome />
      <WhyIknowRos />
      <Benefits />
      <IknowRos />
      <FooterBlock />
    </div>
  );
};

export default HomePage;
