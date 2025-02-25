import React, {useState} from 'react'
import BackButton from '../components/BackButton';
import Spinners from '../components/Spinners';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';


const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const {enqueueSnackbar} = useSnackbar();

  const handleDeletedBook = () => {
    setLoading(true);
      api
      .delete(`/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Deleted Successfully', {variant: 'success'})
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', {variant: 'error'})
        // console.log(error);
      })
  }
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4 text-center'>Delete Book</h1>
      {loading ? <Spinners/>: ''}
      <div className='flex flex-col items-center bg-gray-200 rounded-xl w-[600px] p-8 mx-auto'>

      <h3 className='text-2xl'>Are You Sure You want to delete this book ?</h3>
      <button className='p-4 bg-red-600 hover:bg-red-700 text-white m-8 rounded-lg'
      onClick={handleDeletedBook}
      >
        Yes, Delete it
      </button>
      </div>
    </div>
  )
}

export default DeleteBook
