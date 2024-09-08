import { useNavigate } from 'react-router-dom';
import Button from "@/components/ui/Button";

const Account = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 bg-darkGrayBlue">
      <div className="flex flex-col items-center w-full">
        <Button 
          className="w-[334px] mb-4 py-3 bg-primaryBlue text-secondaryWhite font-poppins rounded-full transition-colors hover:bg-accentBlue" 
          onClick={() => navigate('/login')}
        >
          Log in
        </Button>
        <Button 
          className="w-[334px] h-[50px] rounded-full bg-secondaryBlue text-secondaryWhite shadow-lg font-poppins transition-colors hover:bg-accentBlue" 
          onClick={() => navigate('/SignUp')}
        >
          Create Account
        </Button>
      </div>
    </div>
  );
};

export default Account;
