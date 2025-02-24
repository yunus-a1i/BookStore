import React, {useState, useEffect} from 'react'
import BackButton from '../components/BackButton'
import Spinners from '../components/Spinners'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'


const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState('');
  const navigate = useNavigate();
  const {id} = useParams();
  const {enqueueSnackbar} = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
    .then((response) => {
      setAuthor(response.data.data.author);
      setPublishYear(response.data.data.publishYear)
      setTitle(response.data.data.title)
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      alert('An error happened. Please Check console');
      console.log(error);
    })
  }, [id])
  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear
    }
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited successfully', {variant: 'success'});
        navigate('/')
      })
      .catch((error) => {
        setLoading(false)
        enqueueSnackbar('Error', {variant: 'error'})
        console.log(error)
      })
  }

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4 text-center'>Edit Book</h1>
      {loading ? <Spinners/>:''
      }
      <div className='flex flex-col bg-gray-200 rounded-xl w-[600px] p-4 mx-auto border border-gray-300'>
        <div className='my-4'>
          <label htmlFor="title">Title</label>
          <input 
          id='title'
          type="text"
          value={title}
          onChange= {(e) => setTitle(e.target.value)}
          className='border-1 border-gray-400 bg-gray-100 px-4 py-2 w-full rounded-lg'
          />
        </div>
        <div className='my-4'>
          <label htmlFor="author">Author</label>
          <input 
          id='author'
          type="text"
          value={author}
          onChange= {(e) => setAuthor(e.target.value)}
          className='border-1 border-gray-400 bg-gray-100 px-4 py-2 w-full rounded-lg'
          />
        </div>
        <div className='my-4'>
          <label htmlFor="publishYear">Publish Year</label>
          <input 
          id='publishYear'
          type="text"
          value={publishYear}
          onChange= {(e) => setPublishYear(e.target.value)}
          className='border-1 border-gray-400 bg-gray-100 px-4 py-2 w-full rounded-lg'
          />
        </div>
        <button className='py-2 px-4 bg-blue-300 hover:bg-blue-600 hover:text-white m-8 w-[max-content] mx-auto rounded-lg cursor-pointer transition duration-200' onClick={handleEditBook}>Save</button>
      </div>
      
    </div>
  )
}

export default EditBook
