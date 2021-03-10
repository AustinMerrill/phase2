import React from 'react'
import Layout from '../components/layout'

export default function ServicesPage() {
    return (
        <Layout>
           <div class="">
      <div class="border-b w-full border-black border-2 mt-4"></div>
      <h1 class="uppercase mt-4 font-bold text-3xl text-gray-800">services</h1>
    </div>

    <div>
      <div class="text-lg">
        <p class="py-10">
          I have a passion for creating beautifully designed software
          experiences that connect businesses and their customers. I have over
          10 years of experience designing, developing, and scaling applications
          that have been used by millions of people around the world. User
          experience is at the core of everything I do.
        </p>
        <p>
          From the design research, to the user interface, to the technical
          implementation— it needs to be simple, clear, and easy to use. In a
          world saturated with competing software products that are similar, you
          win by creating something that is simple to understand, reliable, and
          delightful to use.
        </p>
      </div>
    </div>

    <div class="space-y-10 my-10 md:flex md:space-y-0 md:justify-between">
      <div class="md:w-1/3">
        <h2 class="font-bold md:text-2xl text-xl mb-3">Design</h2>
        <ul class="p-5">
          <li class="mb-4">thing 1</li>
          <li class="mb-4">thing 1</li>
          <li class="mb-4">thing 1</li>
          <li class="mb-4">thing 1</li>
          <li class="mb-4">thing 1</li>
          <li class="mb-4">thing 1</li>
        </ul>
      </div>
      <div class="md:w-1/3">
        <h2 class="font-bold md:text-2xl text-xl mb-3">Design</h2>
        <ul class="p-5">
          <li class="mb-4">thing 1</li>
          <li class="mb-4">thing 1</li>
          <li class="mb-4">thing 1</li>
          <li class="mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </li>
          <li class="mb-4">thing 1</li>
          <li class="mb-4">thing 1</li>
        </ul>
      </div>
      <div class="md:w-1/3">
        <h2 class="font-bold md:text-2xl text-xl mb-3">Design</h2>
        <ul class="p-5">
          <li class="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </li>
          <li class="mb-4">thing 1</li>
          <li class="mb-4">thing 1</li>
          <li class="mb-4">thing 1</li>
          <li class="mb-4">thing 1</li>
          <li class="mb-4">thing 1</li>
        </ul>
      </div>
    </div>
        </Layout>
    )
    }