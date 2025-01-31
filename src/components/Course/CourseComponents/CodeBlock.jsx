import React from "react";

const CodeBlock = ({ code, system, styling, visible, description, pStyling, Minidescription, mpStyling }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      alert("Kod został skopiowany!");
    }).catch(err => {
      console.error("Błąd kopiowania tekstu : ", err);
    });
  };

  return (
    <>
      <p className={`${pStyling} mt-8 font-semibold`}>{description}</p>
      <div className={`relative bg-boxBackground rounded-[12px] p-[1rem] ${styling} `}>
        <p className="font-semibold text-primary text-[8px]">{system}</p>
        <pre style={styles.pre}>
          <code>{code}</code>
        </pre>
        <button onClick={copyToClipboard} className={`absolute top-4 right-4 bg-primary py-2 px-5 rounded-[8px] hover:bg-primaryDarker ${visible}`}>
          Copy
        </button>
      </div>
      <p className={`${mpStyling}`}>{Minidescription}</p>

    </>
  );
};

const styles = {
  pre: {
    margin: 0,
    overflowX: "auto",
    whiteSpace: "pre-wrap",
  },
};

export default CodeBlock;
