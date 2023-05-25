import { CheckIcon } from '@heroicons/react/24/solid';

type TaskCheckbox = {
  checked: boolean;
};

export default function Checkbox({ checked }: TaskCheckbox) {
  return checked ? (
    <button className="h-[24px] w-[24px] bg-primary rounded-[4px]">
      <CheckIcon className="text-white stroke-2" />
    </button>
  ) : (
    <button className="h-[24px] w-[24px] border-solid border-[#828282] border-[1px] rounded-[4px]"></button>
  );
}
