import { useState } from "react";

const Toggle = () => {
  const arr = [1, 2, 3, 4, 5];
  const [show, setShow] = useState(null);
  return (
    <div>
      {arr.map((item, index) => (
        <Article
          index={index}
          title={"title1"}
          setShow={setShow}
          show={show === index}
        />
      ))}
    </div>
  );
};
export default Toggle;

const Article = ({ show, setShow, title, index }) => {
  return (
    <div className="border-2 border-black">
      <h1>{title}</h1>
      {show ? (
        <button
          onClick={() => setShow("")}
          className="m-2 p-2 bg-black text-white "
        >
          hide
        </button>
      ) : (
        <button
          onClick={() => setShow(index)}
          className="m-2 p-2 bg-black text-white "
        >
          show
        </button>
      )}
      {show ? (
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      ) : null}
    </div>
  );
};

/* <Article title={"title1"} setShow={setShow} show={show=="title1"} />
   <Article title={"title2"} setShow={setShow} show={show=="title2"} /> */
