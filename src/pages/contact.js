import React from 'react'
import Layout from '../components/layout'

export default function ContactPage() {
return (
    <Layout>
         <div class="">
      <div>
        <div className="w-full mt-4 border-2 border-b border-black"></div>
        <h1 className="mt-4 text-3xl font-bold text-gray-800 uppercase">Contact</h1>
      </div>
      <div>
        <div className="my-10 text-lg text-grey-800">
          <p>
            Please fill out the form below if you’re interested in working
            together, having me speak at your meetup or conference, or if you
            have any other questions. If filling out forms isn't your thing,
            feel free to shoot me an email at brian [at] robmerrill [dot] co.
            Thanks!
          </p>
        </div>
        {/* <!-- holds inputs --> */}
        <div className="mb-10">
          <form className="grid-cols-6 gap-8 space-y-8 md:space-y-0 md:grid">
            <div className="col-span-3 text-sm text-gray-400">
              <label for="email_address" class="block"
                >Your Email (required)</label
              >
              <input
                type="text"
                id="email_address"
                placeholder="email"
                className="w-full p-2 mt-3 mb-3 border-2 border-black rounded shadow-lg"
              />
            </div>
            <div className="col-span-3 my-4">
              <label for="talk" class="block text-sm text-gray-400 mb-3">
                What do you want to talk about?</label
              >
              <select
                name="talk_to_me"
                id="talk"
                className="w-full p-2 border-2 border-black rounded"
              >
                <option>Things about desing</option>
                <option>website stuff</option>
                <option>nice things</option>
              </select>
            </div>
            <div className="col-span-3 my-4">
              <label for="time" className="block mb-3 text-sm text-gray-400">
                When does the project start?</label
              >
              <select
                name="start_time"
                id="time"
                className="w-full p-2 border-2 border-black rounded"
              >
                <option>tomorrow</option>
                <option>next week</option>
                <option>next month</option>
              </select>
            </div>

            <div className="col-span-3">
              <label for="end" className="block mb-3 text-sm text-gray-400"
                >When does project need to be finished?</label
              >
              <select
                name="project_complete by"
                id="end"
                className="w-full p-2 border-2 border-black rounded"
              >
                <option>next week</option>
                <option>next month</option>
                <option>next year</option>
              </select>
            </div>

            <div className="col-span-3">
              <label for="cost" className="block mb-3 text-sm text-gray-400"
                >What's the estimated budget for this project</label
              >
              <select
                name="estimated budget"
                id="cost"
                className="w-full p-2 border-2 border-black rounded"
              >
                <option>$100</option>
                <option>$1,000</option>
                <option>$10,000</option>
              </select>
            </div>
            <fieldset className="col-span-6">
              <legend className="mb-3 text-sm text-gray-400">
                What services are you wanting to hire me for?
              </legend>
              <div className="space-y-6">
                <div>
                  <input type="checkbox" id="design" name="design" />
                  <label for="design" className="ml-3">Design</label>
                </div>
                <div>
                  <input type="checkbox" id="development" name="development" />
                  <label for="development" className="ml-3">Development</label>
                </div>
                <div>
                  <input type="checkbox" id="strategy" name="strategy" />
                  <label for="strategy" className="ml-3">Strategy</label>
                </div>
              </div>
            </fieldset>
            <div className="col-span-6">
              <label for="info" className="block mb-3 text-sm text-gray-400">
                Anything else you would like me to know?</label
              >
              <textarea
                name="for_more_info"
                id="info"
                cols="30"
                rows="10"
                className="w-full border-2 border-black"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-10 py-3 text-gray-100 transition duration-300 bg-gray-800 rounded-lg hover:bg-gray-600 hover:shadow"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
    </Layout>
)
}