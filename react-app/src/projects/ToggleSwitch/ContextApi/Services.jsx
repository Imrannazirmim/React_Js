import {  useBioContext } from "."


export const Services = () =>{
    const {myName, myAge} = useBioContext()
    return (
      <section className="bg-slate-600 mb-2 h-[100vh] text-center flex justify-center items-center text-2xl text-white">
        <h1>
          Context api (Services). my name is {myName}. I am {myAge}
        </h1>
      </section>
    );
}