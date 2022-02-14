import "./BurgerMenu.css";
import { PhonePage } from "../PhonePage/PhonePage";

const BurgerMenu = ({ active, setActive }) => {
  return (
    <div className={active ? "menu active" : "menu"}>
      <div className="backdrop" />
      <div className="menu__content">
        <div className="menu__header">
          <span className="baner_header">
            ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!
          </span>
          <PhonePage />
        </div>

        <span className="menu__main">и с Вами свяжется наш менеждер для дальнейшей консультации</span>
        <button className="menu__btn ">Подтвердить номер</button>
      </div>
    </div>
  );
};
export { BurgerMenu };
