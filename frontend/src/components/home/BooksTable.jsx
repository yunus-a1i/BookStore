import { AiOutlineEdit } from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs"
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md"
import { Link } from "react-router-dom"


const BooksTable = ({books}) => {
  return (
    <table className='w-full border-seperate border-spacing-2 bg-gray-100 p-4 rounded-lg'>
                <thead className="hover:bg-gray-200">
                    <tr className="h-12 transition duration-200">
                        <th className='border-r border-gray-200 rounded-md'>No</th>
                        <th className='border-r border-gray-200 rounded-md max-md:border-none'>Title</th>
                        <th className='border-r border-gray-200 rounded-md max-md:hidden'>Author</th>
                        <th className='border-r border-gray-200 rounded-md max-md:hidden'>Publish Year</th>
                        <th className=' rounded-md max-md:hidden'>Operations</th>
                    </tr>

                </thead>
                <tbody >
                    {books.map((book, index) => (

                        <tr key={book._id} className='hover:bg-gray-200 h-12 transition duration-200'>
                            <td className='border-r border-gray-200 rounded-md text-center'>{index + 1}</td>
                            <td className='border-r border-gray-200 rounded-md text-center max-md:border-none'>{book.title}</td>
                            <td className='border-r border-gray-200 rounded-md text-center max-md:hidden'>{book.author}</td>
                            <td className='border-r border-gray-200 rounded-md text-center max-md:hidden'>{book.publishYear}</td>
                            <td className=' rounded-md text-center max-md:hidden'>
                                <div className='flex justify-center gap-x-4'>
                                    <Link to={`/books/details/${book._id}`}>
                                        <BsInfoCircle className='text-2xl text-green-600 hover:text-green-800 transition duration-200'/>
                                    </Link>
                                    <Link to={`/books/edit/${book._id}`}>
                                        <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-yellow-800 transition duration-200'/>
                                    </Link>
                                    <Link to={`/books/delete/${book._id}`}>
                                        <MdOutlineDelete className='text-2xl text-red-600 hover:text-red-800 transition duration-200'/>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))   
                    }
                </tbody>
            </table>
  )
}

export default BooksTable
