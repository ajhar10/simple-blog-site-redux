import React from 'react'
import { useSelector } from 'react-redux'
import Blog from './Blog'

const Blogs = () => {
const blogs = useSelector(state=>state.blogPost)
  return (
    <section
            class="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8"
        >
            <div class="absolute inset-0">
                <div class="bg-white h-1/3 sm:h-2/3"></div>
            </div>
            <div class="relative max-w-7xl mx-auto">
                <div class="text-center">
                    <h2
                        class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
                    >
                        ALL BLOGS ARE HERE
                    </h2>
                    <p
                        class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
                    >
                        Here we represent some important topics of present world those discuss very much.
                        Our respected author explain some topics in this webpage.
                    </p>
                </div>

                {/* <!-- card grid  --> */}
                <div
                    class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
                >
                    
                    {/* <!-- single card  --> */}
                    {
                        blogs.map(blog=><Blog blog={blog} key={blog.id}/>)
                    }

                </div>
            </div>
        </section>
  )
}

export default Blogs