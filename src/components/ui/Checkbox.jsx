

const Checkbox = ({ title, options }) => {
  return (
    <div className="flex flex-col justify-between border-t-4 border-gray-300 p-4 h-full bg-white shadow-sm"> {/* Fondo igual que TravelFilter */}
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-2 gap-y-4">
        {options.map((option, index) => (
          <label key={index} className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-teal-600 rounded-md focus:ring-teal-500" />
            <span className="text-gray-700">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Checkbox;





