import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const ProfileInfo = ({
  email = "user@example.com",
  phone = "+123 456 7890",
  location = "123 Main Street, New York, USA",
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center sm:text-left">
      <div className="flex items-center space-x-3">
        <FontAwesomeIcon icon={faEnvelope} className="text-neon text-xl" />
        <div>
          <h3 className="text-lg font-bold text-neiado mb-1">Email</h3>
          <p className="text-lightText text-base">{email}</p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <FontAwesomeIcon icon={faPhone} className="text-neon text-xl" />
        <div>
          <h3 className="text-lg font-bold text-neon mb-1">Phone</h3>
          <p className="text-lightText text-base">{phone}</p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-neon text-xl" />
        <div>
          <h3 className="text-lg font-bold text-neon mb-1">Location</h3>
          <p className="text-lightText text-base">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;