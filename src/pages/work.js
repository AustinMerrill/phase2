import React from 'react'
import Layout from '../components/layout'

export default function WorkPage() {
    return (
        <Layout>
             <div class="">
      <div>
        <div class="border-b w-full border-black border-2 mt-4"></div>
        <h1 class="uppercase mt-4 font-bold text-3xl text-gray-800">work</h1>
      </div>
      <div
        class="md:space-y-0 space-y-8 pt-8 md:grid md:gap-8 md:grid-cols-6 mb-8"
      >
        {/* <!-- container div is relative  --> */}
        <div class="relative col-span-3">
          <img
            class="rounded h-96 object-cover w-full"
            src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60"
            alt=" computer"
          />
          {/* <!-- div that is absolute -> opacity 0 -> hover 20% --> */}
          <div
            class="absolute bottom-0 top-0 opacity-0 left-0 right-0 hover:opacity-60 bg-black hover:text-white"
          >
            {/* <!-- h2 title, h4 summary --> */}
            <div class="p-5">
              <h2 class="font-bold text-3xl">Wow project</h2>
              <h4 class="font-bold hover:text-xl">super cool thing i did</h4>
            </div>
          </div>
        </div>

        <div class="relative col-span-3">
          <img
            class="rounded h-96 object-cover w-full"
            src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60"
            alt=" computer"
          />
          <div
            class="absolute bottom-0 left-0 right-0 top-0 opacity-0 bg-black hover:opacity-60 hover:text-white"
          >
            <div class="p-5">
              <h2 class="text-3xl font-bold">Cool project</h2>
              <h4 class="text-xl font-bold">super cool thing</h4>
            </div>
          </div>
        </div>

        <div class="relative col-span-6">
          <img
            class="rounded h-96 object-cover w-full"
            src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60"
            alt=" computer"
          />
          <div
            class="absolute bottom-0 left-0 right-0 top-0 opacity-0 bg-black hover:opacity-60 hover:text-white"
          >
            <div class="p-5">
              <h2 class="text-3xl font-bold">Nice project</h2>
              <h4 class="text-xl font-bold">this was cool</h4>
            </div>
          </div>
        </div>

        <div class="relative col-span-3">
          <img
            class="rounded h-96 object-cover w-full"
            src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60"
            alt=" computer"
          />
          <div
            class="absolute bottom-0 left-0 right-0 top-0 opacity-0 bg-black hover:opacity-60 hover:text-white"
          >
            <div class="p-5">
              <h2 class="text-3xl font-bold">Website</h2>
              <h4 class="text-xl font-bold">neat stuff</h4>
            </div>
          </div>
        </div>

        <div class="relative col-span-3">
          <img
            class="rounded h-96 object-cover w-full"
            src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60"
            alt=" computer"
          />
          <div
            class="absolute bottom-0 left-0 right-0 top-0 opacity-0 bg-black hover:opacity-60 hover:text-white"
          >
            <div class="p-5">
              <h2 class="text-3xl font-bold">Website</h2>
              <h4 class="text-xl font-bold">neat stuff</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

        </Layout>
    )
    }