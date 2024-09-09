import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { getUserUrls, deleteUserUrl } from "@/services/api";
import { useNavigate } from 'react-router-dom';
import Button from "@/components/ui/Button";

function UserURLs() {
  const navigate = useNavigate();
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState("");

  
  const accessToken = localStorage.getItem('access_token');

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await getUserUrls(accessToken);
        setUrls(response);
      } catch (error) {
        setError("Failed to fetch URLs. Please try again.");
      }
    };

    fetchUrls();
  }, [accessToken]);

  const handleDelete = async (id) => {
    try {
      await deleteUserUrl(id, accessToken);
      setUrls(urls.filter(url => url.id !== id)); 
    } catch (error) {
      setError("Failed to delete URL. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-darkGrayBlue">
      <div className="relative flex flex-col justify-start p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-left mb-12 text-primaryBlue">Your Shortened URLs</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <div className="mb-4">
          {urls.length > 0 ? (
            urls.map((url) => (
              <div key={url.id} className="flex justify-between items-center mb-4 p-4 bg-white shadow-lg rounded-lg">
                <div>
                  <p className="text-sm text-darkGrayBlue">{url.original_url}</p>
                  <a
                    href={url.shortened_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accentBlue hover:underline"
                  >
                    {url.shortened_url}
                  </a>
                </div>
                <button
                  onClick={() => handleDelete(url.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ))
          ) : (
            <p className="text-darkGrayBlue text-center">No URLs found.</p>
          )}
        </div>

        <Button
          type="button"
          className="w-full py-2 mb-4 bg-primaryBlue text-secondaryWhite font-poppins transition-colors rounded-full hover:bg-accentBlue"
          onClick={() => navigate("/")}
        >
          Back to URL Shortener
        </Button>
      </div>
    </div>
  );
}

export default UserURLs;
