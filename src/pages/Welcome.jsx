import { useNavigate } from 'react-router-dom';
import Button from "@/components/ui/Button";

const Page1 = () => {
  const backgroundImage = '/images/girl.webp';
  const navigate = useNavigate();
  return (
    
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4 bg-backgroundGray">
    <div className="relative flex flex-col items-center -mt-12">
        <img
          src={backgroundImage}
          alt="The image shows a woman in a suit, resting her right hand on a suitcase and her left hand inside her trouser pocket"
          className="w-[369px] h-[369px] mb-4"
          loading="lazy"
          onError={(e) => {
            e.target.src = '/images/image_not_available.webp';
            e.target.alt = 'Image not available';
          }}
          />
        <h1 className="mb-4 text-3xl font-bold text-center text-primaryBlue" aria-label="Plan your trip">Plan your trip</h1>
        <p className="mb-8 text-xs text-center text-accentBlack">
          Custom and fast planning <br />
          with a low price
        </p>
      </div>
      <div className="flex flex-col items-center w-full">
        <Button className="w-[334px] mb-4 font-roboto" onClick={() => navigate('/login')}>Log in</Button>
        <Button textColor="black" className="w-[334px] h-[50px] rounded-full text-16 bg-secondaryWhite shadow-lg font-roboto" onClick={() => navigate('/SignUp')}>
          Create Account
        </Button>
      </div>
    </div>
  );
};

export default Page1;
