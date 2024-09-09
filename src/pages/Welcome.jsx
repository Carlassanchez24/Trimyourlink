import { useState } from 'react';
import Button from "@/components/ui/Button";
import { Clipboard } from 'feather-icons-react';

const Page1 = () => {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const handleShorten = async () => {
    if (!url) {
      setError('Please enter a valid URL');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/shorten/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Failed to shorten URL');
      }

      const data = await response.json();
      setShortenedUrl(data.shortened_url);
      setError('');
    } catch (error) {
      setError('An error occurred while shortening the URL');
      console.error(error);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((error) => {
        console.error('Failed to copy:', error);
      });
  };

  return (
    <div className="flex min-h-screen relative flex-col items-center p-4 bg-customgray" >
      <div className="relative flex flex-col items-center mt-20 mb-5 pt-10">
        <h1 className="mb-4 text-5xl font-bold text-center text-primaryBlue p-6" aria-label="Plan your trip">
          TRIM <br /> YOUR <br />LINK
        </h1>
        <p className="mb-8 text-xs text-center text-accentBlue">
          Shorten your URL, <br />
          make your life easy
        </p>
      </div>
      <div className="flex flex-col items-center w-full max-w-md">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your URL"
          className="w-full p-3 mb-4 text-white bg-darkGray border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryBlue"
        />
        <Button
          className="w-full mb-4 p-3 text-white bg-primaryBlue  font-poppins"
          onClick={handleShorten}
        >
          Shorten URL
        </Button>
        {error && <p className="text-red-500">{error}</p>}
        {shortenedUrl && (
          <div className="w-full mt-4 p-3 text-white bg-secondaryBlue  rounded-md shadow-md flex items-center justify-between">
            <div>
              <p className="text-center font-poppins text-sm">Your shortened URL:</p>
              <a
                href={shortenedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-whitetext-primaryBlue underline mt-2"
              >
                {shortenedUrl}
              </a>
            </div>
            <button
              onClick={copyToClipboard}
              className="ml-4 p-2 bg-darkGray text-secondaryWhite rounded-md shadow-md hover:bg-darkGrayBlue transition-colors"
              aria-label="Copy URL to clipboard"
            >
              <Clipboard className="w-5 h-5" />
              {copied && <span className="ml-2 text-sm">Copied!</span>}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page1;
