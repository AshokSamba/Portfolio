const Achievements = () => {
  return (
    <div id="Achievements" className="flex flex-col items-center justify-center bg-[#0a0a0a] text-white py-14 px-8">
      <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Achievements</h2>
      <div className="max-w-4xl w-full">
        <ul className="space-y-6">
          <li className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 flex items-start gap-4 hover:border-pink-500 transition-colors">
            <span className="text-pink-500 text-2xl">🏆</span>
            <div>
              <h3 className="text-xl font-bold">Institute First Rank on GeeksForGeeks </h3>
              <p className="text-gray-400 mt-2">Problem solving in Java.</p>
            </div>
          </li>
          <li className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 flex items-start gap-4 hover:border-pink-500 transition-colors">
            <span className="text-pink-500 text-2xl">🏆</span>
            <div>
              <h3 className="text-xl font-bold">160 Days Summer Bootcamp on GeeksForGeeks </h3>
              <p className="text-gray-400 mt-2">Problem solving in Java. Consistency and understanding of methods, problem-solving.</p>
            </div>
          </li>
          <li className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 flex items-start gap-4 hover:border-pink-500 transition-colors">
            <span className="text-pink-500 text-2xl">🏆</span>
            <div>
              <h3 className="text-xl font-bold">Top 100+ Problems Solved on LeetCode</h3>
              <p className="text-gray-400 mt-2">Solved over 100+ data structures and algorithm problems.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Achievements;
