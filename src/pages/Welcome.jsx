import { useState } from 'react';
import Button from "@/components/ui/Button";
import { Clipboard } from 'feather-icons-react';

const Page1 = () => {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const handleShorten = () => {
    const fakeShortenedUrl = `https://short.url/${Math.random().toString(36).substring(7)}`;
    setShortenedUrl(fakeShortenedUrl);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Mostrar el mensaje por 2 segundos
      })
      .catch((error) => {
        console.error('Failed to copy:', error);
      });
  };

  return (
    <div className="flex min-h-screen relative flex-col items-center justify-center p-4 bg-darkGrayBlue">
      <div className="relative flex flex-col items-center -mt-12">
        <h1 className="mb-4 text-3xl font-bold text-center text-primaryBlue" aria-label="Plan your trip">
          TRIM YOUR LINK
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
          className="w-full p-3 mb-4 text-gray-700 bg-darkGray border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryBlue"
        />
        <Button
          className="w-full mb-4 bg-primaryBlue text-secondaryWhite font-poppins"
          onClick={handleShorten}
        >
          Shorten URL
        </Button>
        {shortenedUrl && (
          <div className="w-full mt-4 p-3 bg-secondaryBlue text-secondaryWhite rounded-md shadow-md flex items-center justify-between">
            <div>
              <p className="text-center font-poppins text-sm">Your shortened URL:</p>
              <a
                href={shortenedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-primaryBlue underline mt-2"
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
