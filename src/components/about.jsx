import imageOne from "../Images/gudaha.jpg"
function About(){
    return <div>
        <div className="font-semibold text-8xl bg-gray-100 py-16">
        <h1 className="text-center">About Me</h1>
        </div>
<div className="flex mt-48 justify-around items-stretch">
           
<img className="h-full w-[50%] object-cover rounded-xl" src={imageOne} alt="" />
           
       
        <div className="w-[500px] max-w-xl">
        <h1 className="font-semibold text-3xl w-80 text-blue-500">I build software that solve user problems</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
       <h1 className="font-semibold text-3xl text-blue-500">In summary</h1> 
        <h1 className="font-semibold text-3xl  text-blue-500"><i className="text-black fa-solid fa-location-dot"></i>current location</h1>
         <h1>Benadir</h1>
        <h1 className="font-semibold text-3xl text-blue-500"><i className="text-black fa-solid fa-school"></i>Education</h1>
         <h1>Bachelor Information Teachnology </h1>
          <h1 className="font-semibold text-3xl  text-blue-500">Email</h1>
           <h1>mohamedsharif690@gmail.com</h1>

        </div>
        </div>

    </div>
}
export default About