import "./Baner.css";
import {QRcode} from "../../svg";

const Baner = () => {
  return (
    <>
      <div className="baner">
        <span className="baner_header">ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!
        </span>
        <QRcode />
        <span className="baner__scan">Сканируйте QR-код или нажмите ОК</span>

        <button className="baner__btn">OK</button>
      </div>
    </>
  );
};
export { Baner };
