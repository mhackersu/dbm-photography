import "../app/styles/globals.css";

export default function BookingForm() {
  
    return (
      <div className="bg-gray-100 py-12 flex items-center justify-center uppercase tracking-widest text-xs text-gray-500">
        <div className="py-24">
          <h2 className="text-2xl font-bold">Reservation Lookup</h2>
          <div className="mt-8 max-w-md">
            <div className="grid grid-cols-1 gap-6">
              <label className="block">
                <span className="text-gray-700">Last name</span>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder=""></input>
              </label>
              <label className="block">
                <span className="text-gray-700">First name</span>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder=""></input>
              </label>
              <label className="block">
                <span className="text-gray-700">Email address</span>
                <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="youremail@gmail.com"></input>
              </label>
              <label className="block">
                <span className="text-gray-700">Event date</span>
                <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></input>
              </label>
              <label className="block">
                <span className="text-gray-700">Event type</span>
                <select className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  <option>Corporate event</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="block">
                <span className="text-gray-700">Notes</span>
                <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
              </label>
              <div className="block">
                <div className="mt-2">
                  <div>
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"></input>
                      <span className="ml-2">Agree to Terms & Conditions</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <button className="bg-transparent hover:bg-slate-500 text-slate-800 font-semibold hover:text-white py-2 px-4 border border-slate-950 hover:border-transparent rounded">
            Send Inquiry
          </button>
        </div>
      </div>
    );
}
