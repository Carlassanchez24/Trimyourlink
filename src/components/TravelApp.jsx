import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CardsTravel from '@/components/CardsTravel';
import CardsDestination from '@/components/CardsDestination';
import { useNavigate } from 'react-router-dom';

const TravelApp = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleNavigate = () => {
    navigate('/travelfilter');
  };

  const handleSearch = async () => {
    if (!query) return;

    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`http://localhost:8000/api/users/images/search/?query=${query}`);
      const data = response.data;
      if (Array.isArray(data) && data.length > 0) {
        setImages(data);
      } else {
        setError('No se encontraron resultados para la búsqueda.');
      }
    } catch (error) {
      setError('Error al buscar imágenes.');
      console.error('Error al buscar imágenes:', error);
    } finally {
      setLoading(false);
    }
  };
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center p-0 mx-0 bg-gray-100 rounded-lg shadow-xl">
      <div className="relative flex flex-col justify-start pb-40">
        <div className="relative">
          <img
            src="/images/inspirete.png"
            alt="Travel"
            className="object-cover w-full h-auto rounded-t-lg"
          />
          <div className="absolute left-0 flex flex-col items-center justify-center w-full h-full text-white top-32">
            <h1 className="text-2xl font-bold">Where are you going next?</h1>
          </div>
        </div>

        <div className="relative flex flex-col items-center p-4 mx-4 -mt-12 bg-gray-100 rounded-lg shadow-lg">
          <div className="flex items-center w-full">
            <input
              type="text"
              value={query}
              placeholder="Search"
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-4 py-2 border rounded-full focus:outline-none"
            />
            <button onClick={handleSearch} className="p-2 ml-2 rounded-full bg-primaryBlue">
              <FontAwesomeIcon icon={faArrowRight} style={{ color: "#fafafa" }} />
            </button>
          </div>

          <div className="my-4 text-center">
            <span className="text-gray-500">or</span>
          </div>
          <button
            className="w-full px-4 py-2 mt-2 text-center text-white rounded-full bg-primaryBlue"
            onClick={handleNavigate}
          >
            Tell us about yourself
          </button>
        </div>

        <div className="p-4">
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {images.length > 0 && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {images.map((image, index) => (
                <div key={index} className="text-center">
                  <img src={image.url} alt={image.name} className="object-cover w-full h-48 rounded-lg shadow-md" />
                  <p className="mt-2 text-sm font-semibold">{image.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="px-4">
          <h2 className="mb-2 text-xl font-bold">Recommended List</h2>
          <div className="flex space-x-4 overflow-x-auto">
            <CardsTravel
              image="/images/islascies.jpg"
              title="Galicia"
              description="Islas Cíes"
            />
            <CardsTravel
              image="/images/congost.jpg"
              title="Cataluña"
              description="Congost de Mont-Rebei"
            />
            <CardsTravel
              image="/images/catedrales.jpg"
              title="Galicia"
              description="Playa de las Catedrales"
            />
          </div>
        </div>

        <div className="px-4 mt-4">
          <h2 className="mt-2 text-xl font-bold">Popular Destination</h2>
          <div className="flex space-x-4 overflow-x-auto">
            <CardsDestination
              image="/images/torrehercules.jpg"
              altText="Torre de Hércules"
              title="La Coruña"
              className="object-cover w-full h-full"
            />
            <CardsDestination
              image="/images/sagradafamilia.jpg"
              altText="Sagrada Familia"
              title="Barcelona"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelApp;

