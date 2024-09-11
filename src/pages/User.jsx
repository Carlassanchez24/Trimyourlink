// UserURLs.jsx
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { getUserUrls, deleteUserUrl } from "@/services/api";
import { useNavigate } from 'react-router-dom';
import Button from "@/components/ui/Button";

function UserURLs() {
  const navigate = useNavigate();
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUrls = async () => {
      setLoading(true);
      try {
        const accessToken = localStorage.getItem('accessToken');  // Obtén el token aquí

        if (!accessToken) {
          setError("No access token found. Please log in.");
          return;
        }

        const response = await getUserUrls(accessToken);  // Pasa el token aquí
        setUrls(response);
      } catch (error) {
        setError("Failed to fetch URLs. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUrls();
  }, []);

  const handleDelete = async (id) => {
    try {
      const accessToken = localStorage.getItem('accessToken');  // Obtén el token aquí

      if (!accessToken) {
        setError("No access token found. Please log in.");
        return;
      }

      await deleteUserUrl(id, accessToken);
      setUrls(urls.filter(url => url.id !== id)); 
    } catch (error) {
      setError("Failed to delete URL. Please try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    navigate('/login'); 
  };

  return (
    <div className="min-h-screen flex flex-col bg-customgray">
      <div className="flex justify-end p-4">
        <button
          onClick={handleLogout}
          className="flex items-center text-gray-500 hover:text-gray-700"
        >
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
          <span>Logout</span>
        </button>
      </div>

      <div className="flex flex-col items-center p-8 rounded-lg max-w-md w-full mx-auto">
        <h2 className="text-2xl font-bold text-left mb-12 text-primaryBlue">Your Shortened URLs</h2>

        {loading ? (
          <p className="text-darkGrayBlue text-center">Loading...</p>
        ) : error ? (
          <p className="text-red-500 text-center mb-4">{error}</p>
        ) : (
          <div className="mb-4 w-full">
            {urls.length > 0 ? (
              urls.map((url) => (
                <div key={url.id} className="flex justify-between items-center mb-4 p-4 bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="flex-1 overflow-hidden">
                    <p className="text-sm text-darkGrayBlue truncate">{url.original_url}</p>
                    <a
                      href={url.shortened_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accentBlue hover:underline block truncate"
                    >
                      {url.shortened_url}
                    </a>
                  </div>
                  <button
                    onClick={() => handleDelete(url.id)}
                    className="text-red-500 hover:text-red-700 ml-4"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-darkGrayBlue text-center">No URLs found.</p>
            )}
          </div>
        )}

        <Button
          type="button"
          className="w-full py-2 mb-4 bg-primaryBlue text-white font-poppins transition-colors rounded-full hover:bg-accentBlue"
          onClick={() => navigate("/")}
        >
          Back to URL Shortener
        </Button>
      </div>
    </div>
  );
}

export default UserURLs;
