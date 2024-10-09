function SettingsTable() {
  return (
    <div className="mt-6">
      <div className="px-2 py-4 flex items-center gap-10">
        <p className=" text-lg font-medium text-zinc-800">User Default Coaching</p>
        <select className="px-4 py-2 font-medium border-2 text-zinc-700 border-zinc-200 rounded-md">
          <option value="bca">BCA Coachings</option>
          <option value="bca">Web Development</option>
          <option value="bca">Software Development</option>
        </select>
      </div>

      <div className="px-2 py-4 flex items-center gap-10">
        <p className=" text-lg font-medium text-zinc-800">Mahaveer Phone Number </p>
        <select className="px-4 py-2 font-medium border-2 text-zinc-700 border-zinc-200 rounded-md">
          <option value="bca">BCA Coachings</option>
          <option value="bca">Web Development</option>
          <option value="bca">Software Development</option>
        </select>
      </div>
    </div>
  );
}

export default SettingsTable;
