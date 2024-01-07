import "./home.css";
import Header from "../../component/header/Header";
import Navbar from "../../component/navbar/navbar";
import Featured from "../../component/featured/featured";
import PropertyList from "../../component/propertyList/propertyList";
import HomeGuest from "../../component/featuredProperties/featuredProperties";
import MailList from "../../component/mailList/mailList";
import Footer from "../../component/footer/footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home guest love</h1>
        <HomeGuest />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
