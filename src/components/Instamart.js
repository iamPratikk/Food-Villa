import { useState } from "react";

const Section = ({ title, visible, setIsvisible }) => {
  return (
    <div className="border-2 border-black ">
      <h3 className="text-4xl">{title}</h3>
      {visible ? (
        <button
          onClick={() => setIsvisible(false)}
          className="bg-black text-white m-1 p-1"
        >
          hide
        </button>
      ) : (
        <button
          onClick={() => setIsvisible(true)}
          className="bg-black text-white m-1 p-1"
        >
          Show
        </button>
      )}
      {visible ? (
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      ) : null}
    </div>
  );
};

const Instamart = () => {
  const [isVisible, setIsvisible] = useState("career");

  return (
    <div>
      <h1>Instamart</h1>
      <Section
        setIsvisible={(val) => {
          val ? setIsvisible("career") : setIsvisible("");
        }}
        visible={isVisible === "career"}
        title={"career"}
      />
      <Section
        setIsvisible={(val) => {
          val ? setIsvisible("about") : setIsvisible("");
        }}
        visible={isVisible === "about"}
        title={"about"}
      />
      <Section
        setIsvisible={(val) => {
          val ? setIsvisible("glory") : setIsvisible("");
        }}
        visible={isVisible === "glory"}
        title={"glory"}
      />
    </div>
  );
};
export default Instamart;
