import styles from "./Home.module.css";
import Navigator from "../../components/Navigator";
import Banner from "../../components/HomeComponents/Banner";

function Home() {
  return (
    <>
      <Navigator/>
      <Banner>
        <div className={styles.apresentacao}>
          
        </div>
      </Banner>
    </>
  );
}

export default Home;