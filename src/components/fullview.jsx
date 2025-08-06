import eventFour from "../Images/alkowneyn.jpg"
import Five from "../Images/alhafidban.jpg"
import React from "react";
import eventone from "../Images/alhafidban.jpg"
import evenrTwo from "../Images/ilab.jpg"
import eventThree from "../Images/talking.jpg"

function Fullview() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-5xl font-semibold">All Events</h2>

      <div className="flex flex-wrap gap-4 justify-start">
        {/* Event 1 */}
        <div className="w-full sm:w-[48%] md:w-[30%] bg-white shadow-lg p-4 rounded">
          <img src={eventone } alt="" className="w-full h-64 object-cover rounded"/>
          <p className="text-center text-sm mt-2 text-gray-700 text-5xl font-semibold">Lorem ipsum dolor sit amet.</p>
        </div>

        {/* Event 2 */}
        <div className="w-full sm:w-[48%] md:w-[30%] bg-white shadow-lg p-4 rounded">
          <img src={ evenrTwo} alt="Event 2" className="w-full h-64 object-cover rounded"  />
          <p className="text-center text-sm mt-2 text-gray-700 text-5xl font-semibold"> Lorem ipsum dolor sit amet.</p>
        </div>

        {/* Event 3 */}
        <div className="w-full sm:w-[48%] md:w-[30%] bg-white shadow-lg p-4 rounded">
          <img src={ eventThree}   alt="Event 3" className="w-full h-64 object-cover rounded" />
          <p className="text-center text-sm mt-2 text-gray-700 text-5xl font-semibold">Lorem ipsum dolor sit amet.</p>
        </div>

        {/* Event 4 */}
        <div className="w-full sm:w-[48%] md:w-[30%] bg-white shadow-lg p-4 rounded">
          <img src={eventFour} alt="Event 4" className="w-full h-64 object-cover rounded" />
          <p className="text-center text-sm mt-2 text-gray-700 text-5xl font-semibold"> Lorem ipsum dolor sit amet.</p>
        </div>

        {/* Event 5 */}
        <div className="w-full sm:w-[48%] md:w-[30%] bg-white shadow-lg p-4 rounded">
          <img src={eventFour} alt="" className="w-full h-64 object-cover rounded" />
          <p className="text-center text-sm mt-2 text-gray-700 text-5xl font-semibold"> Lorem ipsum dolor sit amet.
         </p>
        </div>
      </div>
    </div>
  );
}

export default Fullview;
