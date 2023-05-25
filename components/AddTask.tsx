export default function AddTask() {
  return (
    <div className="flex justify-between space-x-[25px] mt-[18px]">
      <input
        placeholder="add details"
        className="rounded-[12px] py-[20px] px-[12px] border-solid border-[1px] border-[#BDBDBD] w-full"
      />
      <button className="rounded-[12px] bg-primary text-[14px] font-semibold leading-[17.07px] w-[109px] text-[#FFFFFF]">
        Add
      </button>
    </div>
  );
}
