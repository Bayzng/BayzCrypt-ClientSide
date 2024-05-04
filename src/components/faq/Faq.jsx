import { useState } from "react";
import "./Faq.scss";

import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const Faq = ({ question, answer }) => {
  const [isFaqShowing, setIsFaqShowing] = useState(false);

  return (
    <div className="faq container" onClick={() => setIsFaqShowing((prev) => !prev)}>

      <article>

        <p>{question}</p>
        
        <button className="faqIcon">
          {isFaqShowing ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
        </button>

      </article>

      {isFaqShowing && <p className="pText faqText">{answer}</p>}

    </div>
  );
};

export default Faq;