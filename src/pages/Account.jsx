import { useNavigate } from 'react-router-dom';
import Button from "@/components/ui/Button";

const Account = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4 bg-backgroundLila">
      <div className="flex flex-col items-center w-full">
        <Button className="w-[334px] mb-4 bg-primaryLila text-secondaryWhite font-poppins" onClick={() => navigate('/login')}>
          Log in
        </Button>
        <Button className="w-[334px] h-[50px] rounded-full bg-secondaryLila text-secondaryWhite shadow-lg font-poppins" onClick={() => navigate('/SignUp')}>
          Create Account
        </Button>
      </div>
    </div>
  );
};

export default Account;
