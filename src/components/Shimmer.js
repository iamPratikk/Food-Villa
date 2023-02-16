

const Shimmer= ()=>{

    return (
        <div className=" flex flex-wrap " >
       { Array(10).fill("").map((e,i)=><div key={i} className=" h-[22rem] w-56 p-2 m-2 shadow-lg mt-24 bg-slate-200" ></div>)}
        </div>
    )
    
    
}
export default Shimmer;