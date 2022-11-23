import home from "@/pageStyle/Home.module.scss";

export default function ItWork() {
  return (
    <div className={home.itWorkHow}>
      <h3>How it works</h3>
      <p>
        A partner <b>receives a full payment for the purchases</b>{" "}
        right <br /> away and pays Finangel a fee at the end of the
        month.
      </p>
    </div>
  );
}
