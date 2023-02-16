import ErrorImg from "../Assets/ErrorImg.jpeg";
const CartError = () => {
  return (
    <div className="flex bg-gray-200 flex-col justify-center items-center ">
      <div>
        <img src={ErrorImg} />
      </div>

      <div>
        <h1 className=" m-2 p-2 font-mono text-2xl">No Items found</h1>
      </div>
    </div>
  );
};
export default CartError;
