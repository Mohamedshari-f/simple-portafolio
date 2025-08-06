function Contact() {
  return <form className="space-y-2 p-4 max-w-sm mx-auto">
    <h1 className="text-center font-semibold text-5xl">Contact Form</h1>
      <input className="w-full border p-2 rounded" type="text" placeholder="Name" />
      <input className="w-full border p-2 rounded" type="email" placeholder="Email" />
      <textarea className="w-full border p-2 rounded" placeholder="Message" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Send</button>
    </form>
    
}

export default Contact;
