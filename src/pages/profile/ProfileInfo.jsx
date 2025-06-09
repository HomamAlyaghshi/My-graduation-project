
const ProfileInfo = ({ email = "user@example.com", phone = "+123 456 7890", location = "123 Main Street, New York, USA"
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-neon mb-1">Email :</h3>
        <p className="text-lightText">{email}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold text-neon mb-1">Phone :</h3>
        <p className="text-lightText">{phone}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold text-neon mb-1">Location :</h3>
        <p className="text-lightText">{location}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;