const Academic = () => {
  return (
    <div id="Academic" className="flex flex-col items-center justify-center bg-[#050505] text-white py-14 px-8">
      <h2 className="text-4xl font-bold mb-12 text-blue-400">Academic Background</h2>
      <div className="max-w-4xl w-full flex flex-col gap-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#050505] bg-blue-500 text-slate-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-[#111] border border-gray-800 shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-xl text-white">B.Tech in Computer Science</h3>
              <span className="text-sm font-medium text-blue-400">2022 - 2026</span>
            </div>
            <div className="text-gray-400">TKR COLLEGE OF ENGINEERING AND TECHNOLOGY</div>
            <div className="text-gray-300 mt-2 font-semibold">CGPA: 7.7/10</div>
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#050505] bg-purple-500 text-slate-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-[#111] border border-gray-800 shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-xl text-white">Intermediate Education</h3>
              <span className="text-sm font-medium text-purple-400">2020-2022</span>
            </div>
            <div className="text-gray-400">SHADDHA JUNIOR COLLEGE</div>
            <div className="text-gray-300 mt-2 font-semibold">Percentage: 94%</div>
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#050505] bg-purple-500 text-slate-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-[#111] border border-gray-800 shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-bold">Secondary School Education</h3>
              <span className="text-sm font-medium text-purple-400">2019-2020</span>
            </div>
            <div className="text-gray-400">ZP High School Peddur</div>
            <div className="text-gray-300 mt-2 font-semibold">Percentage: 100%</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Academic;
