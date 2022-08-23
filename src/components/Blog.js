import React from 'react'
import { useDispatch } from 'react-redux'
import { authorFilter, categoryFilter } from '../redux/blogs/actions';

const Blog = ({blog}) => {
    const dispatch = useDispatch();

    const handlCategoryFilter = (category)=>{
        dispatch(categoryFilter(category))
    }
    const handlAuthorFilter = (author)=>{
        dispatch(authorFilter(author))
    }
  return (
                    <div
                        class="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    >
                        <div class="flex-shrink-0">
                            <img
                                class="h-48 w-full object-cover"
                                src={blog.blogImg}
                                alt=""
                            />
                        </div>
                        <div
                            class="flex-1 bg-white p-6 flex flex-col justify-between"
                        >
                            <div class="flex-1">
                                <p onClick={()=>handlCategoryFilter(blog.type)} class="text-sm font-medium text-indigo-600 cursor-pointer">
                                    <span 
                                        class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                                    >
                                        {blog.type}
                                    </span>
                                </p>
                                <a href="#" class="block mt-1">
                                    <p
                                        class="text-xl font-semibold text-gray-900"
                                    >
                                        {blog.title}
                                    </p>
                                </a>
                            </div>
                            <div class="mt-6 flex items-center">
                                <div class="flex-shrink-0">
                                    <img
                                        class="h-10 w-10 rounded-full"
                                        src={blog.authoImg}
                                        alt=""
                                    />
                                </div>
                                <div class="ml-3">
                                    <p onClick={()=>handlAuthorFilter(blog.author)}
                                        class="cursor-pointer text-sm font-medium text-gray-900 hover:underline"
                                    >
                                        {blog.author}
                                    </p>
                                    <div
                                        class="flex space-x-1 text-sm text-gray-500"
                                    >
                                        <time datetime="2020-03-16">
                                        {blog.date}
                                        </time>
                                        <span aria-hidden="true">
                                            &middot;
                                        </span>
                                        <span> {blog.time} </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                
  )
}

export default Blog