import { NextPage } from "next";
import Header from "../components/Header";
import YetiSvg from "../components/svg/Yeti";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <p>Hello Next.js</p>
      <YetiSvg height={250} width={250} color={"blue"} />
    </div>
  );
};

export default Home;
