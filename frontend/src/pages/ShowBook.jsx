import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinners from '../components/Spinners'


const ShowBook = () => {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
        .get(`http://localhost:5555/books/${id}`)
        .then((response) => {
            setBook(response.data.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        });
    },[id])
    return (
        <div className='p-4'>
            <BackButton/>
                <h1 className='text-3xl my-4 text-center'>Show Book</h1>
                { loading ? (
                        <Spinners/>
                    ):(
                        <div className='flex flex-col bg-gray-200 border border-gray-300 rounded-xl w-fit p-4 m-auto'>
                            {/* <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>Id</span>
                            <span className='text-black'>{book._id}</span>
                            </div> */}

                            <div className='my-4'>
                            <span className=' mr-4 text-gray-500'>Title</span>
                            <span>{book.title}</span>
                            </div>

                            <div className='my-4'>
                            <span className=' mr-4 text-gray-500'>Author</span>
                            <span>{book.author}</span>
                            </div>

                            <div className='my-4'>
                            <span className=' mr-4 text-gray-500'>Publish Year</span>
                            <span>{book.publishYear}</span>
                            </div>

                            <div className='my-4'>
                            <span className=' mr-4 text-gray-500'>Date</span>
                            <span>{new Date(book.createdAt).toString()}</span>
                            </div>
                        </div>
                    )
}
        </div>
    )
}

export default ShowBook
