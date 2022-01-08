import React from 'react';
import useBlogs from '../../../../hooks/useBlogs';
import HomeBlog from '../HomeBlog/HomeBlog';

const HomeBlogs = () => {
    const { blogs, spinner } = useBlogs();
    return (
        <div className='container'>
             {
                spinner && <div class="d-flex justify-content-center">
                <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            }
            <div class="row row-cols-1 row-cols-md-2 g-4 my-5">

            {
                blogs.map(blog=><HomeBlog
                key={blog._id}
                blog={blog}
                ></HomeBlog>)
            }


            </div>
        </div>
    );
};

export default HomeBlogs;