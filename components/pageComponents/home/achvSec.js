import {
  HiOutlineShoppingBag,
  HiOutlineCurrencyDollar,
  HiOutlineUserCircle,
} from "react-icons/hi2";
import home from "@/pageStyle/Home.module.scss";

export default function AchvSection() {
  return (
    <div className={home.achieveSection}>
      <h3>Achieve higher results together</h3>
      <ul>
        <li>
          <span>
            <HiOutlineShoppingBag />
          </span>
          <h4>+10%</h4>
          <p>average order value</p>
        </li>
        <li>
          <span>
            <HiOutlineUserCircle />
          </span>
          <h4>+22%</h4>
          <p>customer retention</p>
        </li>
        <li>
          <span>
            <HiOutlineCurrencyDollar />
          </span>
          <h4>$5 mln</h4>
          <p>Finangel marketing budget 2019</p>
        </li>
      </ul>
    </div>
  );
}
