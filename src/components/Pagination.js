import React, {  useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Pagination() {

    const {page,totalPage,handlePageChange}=useContext(AppContext);

  return (
    <div className='w-full flex justify-center items-center border-2 fixed bottom-0 bg-white'>
      <div className='flex justify-between w-11/12 max-w-[670px] py-2'>
      <div className='flex gap-x-2'> 
        
        { page > 1 &&
            (<button 
            className='rounded-md border-2 px-4 py-1'
            onClick={() => handlePageChange(page-1)}>
                Previous
            </button>)
        }

        { page < totalPage && 
                (<button 
                className='rounded-md border-2 px-4 py-1'
                onClick={() =>handlePageChange(page+1) }>
                Next
            </button>)
        }

      </div>
       

        <p className='font-bold text-sm'>
            Page {page} of {totalPage}
        </p>
      </div>
    </div>
  )
}

export default Pagination