import home from "@/pageStyle/Home.module.scss";

export default function Hero() {
  return (
    <div className={home.heroSection}>
      <h1>
        Connect your shop to the No.1 <br /> instalment club in the UK
      </h1>
      <span>Become a partner</span>
    </div>
  );
}
