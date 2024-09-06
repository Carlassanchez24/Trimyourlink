import PropTypes from 'prop-types';

const CardsDestination  = ({ image, altText, title, description }) => {
  return (
    <div className="relative mt-12 min-w-[120px] h-[400px] bg-white rounded-lg shadow-lg p-2 overflow-hidden">
      <img
        src={image}
        alt={altText}
        className="object-cover w-full h-full rounded-lg" 
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-white bg-black bg-opacity-10">
        <h3 className="mt-auto text-lg font-bold">{title}</h3> 
        {description && <p className="mt-2 text-sm">{description}</p>}
      </div>
    </div>
  );
};

CardsDestination.propTypes = {
  image: PropTypes.string.isRequired,       
  altText: PropTypes.string.isRequired,     
  title: PropTypes.string.isRequired,      
  description: PropTypes.string,           
};

export default CardsDestination;
