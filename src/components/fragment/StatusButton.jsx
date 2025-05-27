import ButtonForm from "../common/ButtonForm";

export default function StatusButtons({ onStatusChange }) {
  return (
    <div className="flex gap-3 mt-5">
      <ButtonForm
        type="button"
        text="Progress"
        onClick={() => onStatusChange("Progress")}
        className="w-full py-2 border border-yellow-500 text-yellow-500 rounded hover:bg-yellow-500 hover:text-white transition"
      />
      <ButtonForm
        type="button"
        text="Done"
        onClick={() => onStatusChange("Done")}
        className="w-full py-2 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white transition"
      />
    </div>
  );
}
