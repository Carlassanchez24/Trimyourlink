import Checkbox from "@/components/ui/Checkbox"; 
import Button from "@/components/ui/Button";


const TravelFilter = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white w-[90%] max-w-md h-[100vh] overflow-y-scroll p-6 shadow-lg"> 
        <h2 className="mb-6 text-xl font-semibold">Tell us about yourself</h2>
        <div className="flex flex-col justify-between h-full">
          <Checkbox
            title="How do you like to travel?"
            options={["Alone (or By myself)", "With family", "Whatever comes up", "With friends"]}
          />
          <Checkbox
            title="Are you more into...?"
            options={["Beach", "City", "Mountains", "River"]}
          />
          <Checkbox
            title="Preferred accommodation type:"
            options={["City Hotel", "Cottage", "Motel", "Downtown Hotel", "Resort Hotel", "Glamping"]}
          />
          <Checkbox
            title="Do you prefer to travel in...?"
            options={["Autumn", "Spring", "Winter", "Summer"]}
          />
          <Checkbox
            title="Trip recommendations:"
            options={["Long trips", "Medium trips", "Short trips", "It doesn't matter"]}
          />
          <Checkbox
            title="Preferred activities:"
            options={["Adventure Sports", "Relaxation", "Cultural Experiences", "Food & Wine", "Nightlife", "Shopping"]}
          />
          
          <div className="mt-8 space-y-4">
            <Button>Apply</Button>
            <Button className="bg-white border border-primaryBlue text-primaryBlue">Save to account</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelFilter;





