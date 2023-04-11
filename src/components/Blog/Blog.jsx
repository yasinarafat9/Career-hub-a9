import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className='m-10'>
                <h2 className='text-4xl font-bold text-center'>Questions and Answers</h2>
            </div>
            <div className='blog-texts'>
                <div className='card-texts p-3'>
                    <h4 className='text-2xl font-semibold'>Question no 1: When Should you use context Api?</h4>
                    <p className='text-xl text-gray-700 font-semibold'>Answer: To use the context API, you need to create a context by calling the createContext function with an optional default value when using JavaScript.</p>
                </div>
                <div className='card-texts p-3'>
                    <h4 className='text-2xl font-semibold'>Question no 2: What is Custom Hook?</h4>
                    <p className='text-xl text-gray-700 font-semibold'>Answer: Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated. How does a custom Hook get isolated state? Each call to a Hook gets isolated state.</p>
                </div>
                <div className='card-texts p-3'>
                    <h4 className='text-2xl font-semibold'>Question no 3: What is useRef?</h4>
                    <p className='text-xl text-gray-700 font-semibold'>Answer: useRefs provide a way to access DOM nodes or React elements created in the render method. In the typical React dataflow, props are the only way that parent components interact with their children.</p>
                </div>
                <div className='card-texts p-3'>
                    <h4 className='text-2xl font-semibold'>Question no 4: What is useMemo?</h4>
                    <p className='text-xl text-gray-700 font-semibold'>Answer: During initial rendering, useMemo(compute, dependencies) invokes compute , memoizes the calculation result, and returns it to the component. If the dependencies don't change during the next renderings, then useMemo() doesn't invoke compute , but returns the memoized value.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;