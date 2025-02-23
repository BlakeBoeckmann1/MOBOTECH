import React from "react";

const MoboGobblerPage = () => {
  const handleCheckout = () => {
    // Redirect to the Stripe payment page
    window.location.href = "https://buy.stripe.com/5kAdRd9kv1M94MgaEE";
  };

  return (
    <div>
      {/* Main Section with Video Background */}
      <section className="flat-pages-title-home2 relative">
        {/* Video Background */}
        <div className="video-container relative w-full h-screen">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover absolute top-0 left-0"
          >
            <source src="/assets/your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Mobo Gobbler Text and Button Section */}
      <section className="absolute top-0 left-0 w-full h-screen flex items-center justify-center text-center px-8">
        <div className="bg-black bg-opacity-50 text-white p-8 rounded-lg">
          <h2 className="text-4xl font-bold mb-6">MOBOTECH</h2>
          <p className="text-xl mb-6 leading-relaxed">
            
          </p>

          {/* Buy Decoy Button */}
          <div className="mt-8">
            <button
              onClick={handleCheckout}
              className="px-6 py-3 bg-green-800 text-white rounded-lg text-lg"
            >
              Buy Decoy
            </button>
          </div>
        </div>
      </section>

      {/* Showcase Videos Section */}
      <section className="w-full bg-gray-900 text-white py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">MOBO-GOBBLER </h2>
          <p className="text-xl">CONTROL YOUR HUNT </p>
          
          
        </div>

        {/* Flexbox Row for Videos (Horizontal Layout) */}
        <div className="flex space-x-12 overflow-x-auto px-12">
          {/* Video 1 */}
          <div className="video-container">
            <video autoPlay loop muted className="w-full h-full object-cover rounded-lg">
              <source src="/assets/decoyproduct.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-white mt-4"> MOBOGOBBLER </p>
          </div>
          

          {/* Video 3 */}
          <div className="video-container">
            <video autoPlay loop muted className="w-full h-full object-cover rounded-lg">
              <source src="/assets/showcase-video3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-white mt-4"> </p>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="w-full bg-gray-900 text-white py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">Gallery</h2>
          <p className="text-xl font-semibold">Explore images of the Mobo Gobbler in the field!</p>
          
          <p className="text-left">The Mobo Gobbler remote-controlled turkey decoy will change the way you hunt forever. If a gobbler is out of range, drive the decoy to him and bring him right back to your setup. The old toms can’t resist! It works amazingly on field birds.

Have you ever been hunting and had an old tom hang up with hens and stay just out of range? You can close the gap by driving the decoy to him. The old tom will feel challenged and follow the decoy back to you.

Anyone can use this decoy! Any age or hunting level, this decoy is guaranteed to increase your success with turkey hunting. The Mobo Gobbler is lightweight and easily portable. If you change locations, just take out your straps, throw it on your back, and enjoy your hunt wherever you go.
</p>
        </div>

        {/* Image Grid with 5 images across */}
        <div className="grid grid-cols-5 gap-8 px-8">
          {[...Array(30).keys()].map((index) => (
            <div className="image-container" key={index}>
              <img
                src={`/assets/image${index + 1}.jpg`}
                alt={`Mobo Gobbler Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-gray-900 text-white text-center py-4 mt-auto">
        <p>&copy; 2025 Mobo Gobbler. All rights reserved.</p>
        <p>
          <a href="/terms" className="text-green-800 hover:underline">
            Terms of Service
          </a>
          {" | "}
          <a href="/privacy" className="text-green-800 hover:underline">
            Privacy Policy
          </a>
        </p>
      </footer>
    </div>
  );
};

export default MoboGobblerPage;