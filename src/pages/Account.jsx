import { useNavigate } from 'react-router-dom';
import Button from "@/components/ui/Button";

const Account = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col items-center min-h-screen p-4 bg-customgray ">
      <div className="relative flex flex-col items-center mt-20 mb-5 pt-10">
        <h1 className="mb-4 text-5xl font-bold text-center text-primaryBlue p-6" aria-label="Plan your trip">
          TRIM <br /> YOUR <br />LINK
        </h1>
      </div>
      <div className="flex flex-col items-center w-full">
        <Button 
          className="w-[334px] mb-4 py-3 bg-primaryBlue text-white font-poppins rounded-full transition-colors hover:bg-accentBlue" 
          onClick={() => navigate('/login')}
        >
          Log in
        </Button>
        <Button 
          className="w-[334px] h-[50px] rounded-full bg-secondaryBlue text-white shadow-lg font-poppins transition-colors hover:bg-accentBlue" 
          onClick={() => navigate('/SignUp')}
        >
          Create Account
        </Button>
      </div>
    </div>
  );
};

export default Account;
