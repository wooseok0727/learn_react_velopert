import React from "react";
import classNames from "classnames/bind";
import styles from "../CSSmodule.module.scss";

// 미리 styles에서 클래스를 받아 오도록 설정
const cx = classNames.bind(styles);

const CSSModule = () => {
  console.log(styles);
  return (
    <div className={cx("wrapper", "inverted")}>
      {/* 
        className={[styles.wrapper, styles.inverted].join(' ')} 
        className={`${styles.wrapper} ${styles.inverted}`}
    */}
      안녕하세요 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
