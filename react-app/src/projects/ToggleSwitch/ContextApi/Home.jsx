import {  useBioContext } from ".";

export const Home = () => {
  const { myName, myAge } = useBioContext();
  return (
    <h2 className="bg-slate-600 h-[100vh] text-center flex justify-center items-center text-2xl text-white mb-2">
      hi, context api (Home), my name is {myName}
      {myAge}
    </h2>
  );
};
