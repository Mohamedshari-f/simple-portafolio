import eventone from "../Images/alhafidban.jpg"
import evenrTwo from "../Images/ilab.jpg"
import eventThree from "../Images/talking.jpg"
import eventFour from "../Images/alkowneyn.jpg"
import React from "react";
import { Link } from "react-router-dom";

function Preview() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Events</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Event 1 */}
        <div className="bg-white shadow-lg p-4 rounded">
          <img src={eventone} alt=""className="w-full h-64 object-cover rounded"/>
          <p className="text-center font-semibold text-5xl text-sm mt-2 text-gray-700">Lorem ipsum dolor sit amet.</p>
        </div>

        {/* Event 2 */}
        <div className="bg-white shadow-lg p-4 rounded">
          <img src={evenrTwo} alt="Event 2" className="w-full  h-64 object-cover rounded"/>
          <p className="text-center text-sm mt-2 text-gray-700 font-semibold text-5xl">Lorem ipsum dolor sit amet.</p>
        </div>

        {/* Event 3 */}
        <div className="bg-white shadow-lg p-4 rounded">
          <img src={eventThree} alt="Event 3" className="w-full h-64 object-cover rounded"/>
          <p className="text-center text-sm mt-2 text-gray-700">
            Town-Hall Meeting with H.E Hassan Sheikh
          </p>
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-end mt-4">
        <Link to="/events" className="px-4 py-2 border border-gray-500 text-gray-700 hover:bg-gray-100 rounded">
         <h1>View all</h1> 
        </Link>
      </div>
    </div>
  );
}

export default Preview;
