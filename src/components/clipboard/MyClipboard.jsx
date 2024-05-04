import React from "react";
import { useState } from 'react';


const MyClipboard = ({ copyText }) => {

  const currentAccount = '0x690..7e1ba89e5b-g6'

    copyText = currentAccount
    const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(currentAccount)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  

  return (
    <div style={{textAlign: "center", marginTop: "2rem"}}>
      <input style={{border: "none", color: "indigo"}} type="text" value={currentAccount} readOnly />
      <button style={{color: "indigo", padding: "5px", width: "60px",  color: "white", backgroundColor: "indigo", borderRadius: "10px"}} onClick={handleCopyClick}>
        <span>{isCopied ? 'Copied!' : 'Copy'}</span>
      </button>
    </div>
  );
}

    export default MyClipboard