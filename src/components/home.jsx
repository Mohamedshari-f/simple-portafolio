import imageOne from "../Images/gudaha.jpg";
import Fullview from "./fullview";
import Preview from "./previewevent";


function Home() {
  return (
    <>
      {/* Profile Section */}
      <div className="flex flex-wrap mt-48 justify-around items-stretch animate-fade-in">
        <div className="w-[500px] max-w-xl">
          <h1 className="font-semibold text-3xl w-80 text-blue-800">
            Personal Profile Information
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
        </div>
        <img
          className="h-full sm:w-[30%] w-[80%] object-cover rounded-xl"
          src={imageOne}
          alt=""
        />
      </div>

   <div className="w-full md:w-[800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 overflow-hidden mt-20">
  <img src={imageOne} alt="1" className="rounded w-full h-auto" />
  <img src={imageOne} alt="2" className="rounded w-full h-auto" />
  <img src={imageOne} alt="3" className="rounded w-full h-auto" />
  <img src={imageOne} alt="4" className="rounded w-full h-auto" />
  <img src={imageOne} alt="5" className="rounded w-full h-auto" />
  <img src={imageOne} alt="6" className="rounded w-full h-auto" />
</div>
      {/* Testimonials Section */}
      <div className="max-w-4xl mx-auto mt-20 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
         <h1> What People Say </h1>
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod,
              eveniet odio! Officiis asperiores iste quas?
            </p>
            <p className="mt-4 font-semibold text-blue-500">- Ahmed Ali</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde
              nesciunt exercitationem reprehenderit, perferendis aliquam.
            </p>
            <p className="mt-4 font-semibold text-blue-500">- Amina Yusuf</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              ipsum, facilis eum impedit corporis pariatur.
            </p>
            <p className="mt-4 font-semibold text-blue-500">- Mohamed Noor</p>
          </div>
        </div>
      </div>
    <div className="bg-gray-100 py-6 mt-10">
  <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
  {/* WhatsApp */}
  <a
    href="https://wa.me/252611163903"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 text-green-600 text-lg font-medium"
  >
    <i className="fa-brands fa-whatsapp text-2xl"></i>
    <span>+252 611 163 903</span>
  </a>

  {/* Email */}
  <a
    href="mailto:Mohamedsharif690@gmail.com"
    className="flex items-center gap-3 text-blue-600 text-lg font-medium"
  >
    <i className="fa-solid fa-envelope text-2xl"></i>
    <span>Mohamedsharif690@gmail.com</span>
  </a>
</div>

</div>
<Preview />

    
    </>
  );
}

export default Home;
