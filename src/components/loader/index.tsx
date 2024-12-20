import React from 'react'
import { Spinner } from '../spinner';

type LoaderProps = {
    loading: boolean;
    children: React.ReactNode
}

const Loader = ({loading, children}: LoaderProps) => {
  return loading ? (
    <div className='w-full py-5 flex justify-center'>
        <Spinner />
    </div>
  ) : (
    children
  )
}

export default Loader