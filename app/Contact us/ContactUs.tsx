
export default function ContactUs() {
  return (
    <div className="h-[90vh]">
      {/* <h1 className="font-bold text-[30px] p-9 text-center">Conatct Us</h1>
      <div className="m-[40px] flex items-center justify-around">
        <div  className="text-xl">
          <h1 className="text-3xl p-3 font-bold">Get started</h1>
          <h2 className="p-3"><span className="font-bold">Email</span> : NextWeb@gmail.com</h2>
          <h2 className="p-3"><span className="font-bold">Phone</span> : +xxxxxxxxx</h2>
          <p className="w-[70vh]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.</p>
        </div>
        <div className="flex flex-col gap-4 ">
          <div className="flex gap-10" >
          <input type="text"  placeholder=" Name" className="border border-[1px] border-black w-[30vh] rounded-lg p-2 "/>
          <input type="email" placeholder="  Email" className="border border-[1px] border-black rounded-lg w-[30vh]"/>
        </div>
          <div>
          <input type="text" placeholder="Your Message" className="border border-[1px] border-black 
          p-20 w-[65vh] rounded-lg" />
          </div>
        </div>
      </div> */}
      <section className="bg-white dark:bg-gray-900">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" className="space-y-8">
          <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
          </div>
          <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div className="sm:col-span-2">
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button
        className="rounded-full hidden md:block bg-black p-3 text-white font-semibold"
      >
        Send
      </button>
          {/* <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button> */}
      </form>
  </div>
</section>
    </div>
    
  )
}
