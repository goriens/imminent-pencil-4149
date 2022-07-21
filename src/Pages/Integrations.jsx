import React from "react";
import style from "../Styles/Integrations.module.css";
const Integrations = () => {
  return (
    <div className={style.Cont}>
      <div className={style.Box_1}>
        <div className={style.cont_2}>
          <h4>Integrate TimeCamp with your favorite apps</h4>
          <p>
            No need to change your current workflow. Use TimeCamp alongside your
            other trusted tools.
          </p>
          <div className={style.cont_btn}>
            <button className={style.btn_1}>
              {/* <img
                className={style.logo_img_chrome}
                src="data:image/jpeg;base64,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"
                alt=""
              />{" "} */}
              <label>Track time in Chrome</label>
            </button>
            <button className={style.btn_1}>
              {/* <img
                className={style.logo_img_chrome}
                src="data:image/jpeg;base64,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"
                alt=""
              />{" "} */}
              <label>Track time in Edge</label>
            </button>
          </div>
        </div>
        <div className={style.cont_2}>
          <img
            className={style.logo_img}
            src="https://cdn-m.timecamp.com/img/greenbranding/rightHero.png"
            alt="Logo_Images"
          />
        </div>
      </div>
      <div className={style.link_cont}>
        <div>sd</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default Integrations;