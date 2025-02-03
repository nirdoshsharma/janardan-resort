const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto z-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">
              Janardan Resort
            </h3>
            <p className="text-gray-300 text-sm">
              Luxury resort offering premium accommodations and world-class
              amenities amidst natural beauty.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Janardan Resort. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
