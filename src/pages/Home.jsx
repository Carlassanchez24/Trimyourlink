import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from "@/components/ui/Button";


const homeImage = '/images/home.webp';

const Home = () => {
    const navigate = useNavigate();
    const [hasError, setHasError] = useState(false);

    const handleExplore = () => {
        try {
            navigate('welcome');
        } catch (error) {
            console.error("Error while browsing:", error);
            setHasError(true);
        }
    };
    
    if (hasError) {
        return <h1>Something went wrong. Try reloading the page.</h1>;
    }

    return (
        <>
            <div
                className="relative flex flex-col items-center justify-center min-h-screen p-4 text-center bg-center bg-cover"
                aria-label="Background illustration showing a suitcase, an umbrella, a lounge chair, and a life preserver, with clouds in the background, representing a relaxing travel destination with the title 'Travel Buddy'"
                role="img"
                style={{ backgroundImage: `url(${homeImage})` }}>
                <div className="flex flex-col items-center pt-24">
                    <h1 className="mb-4 text-5xl font-bold font-roboto text-primaryBlue">Travel Buddy</h1>
                    <p className="text-xs text-accentBlack">
                        Plan your next adventure with ease.
                    </p>
                </div>
                <div className="flex-grow"></div>
                <Button className="absolute w-full py-3 mt-4 font-semibold rounded-full text-16 text-secondaryWhite bg-primaryBlue bottom-[calc(5rem)]" onClick={handleExplore}>
                    Start Exploring!
                </Button>
            </div>
        </>
    );
};

export default Home;
