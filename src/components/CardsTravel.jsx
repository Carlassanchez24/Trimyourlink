import PropTypes from 'prop-types';

const CardsTravel = ({ image, title, description }) => {
  return (
    <div className="min-w-[100px] bg-white rounded-lg shadow-lg p-2 flex flex-col items-center">
      <div className="w-full h-[200px] flex justify-center items-center overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="mt-2 text-lg font-bold text-center">{title}</h3>
      <p className="text-center text-gray-500">{description}</p>
    </div>
  );
}

CardsTravel.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardsTravel;