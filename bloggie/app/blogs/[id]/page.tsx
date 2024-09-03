import React from 'react'

//@ts-ignore
const page = ({params}) => {
    return (
        <div>
            {params.id}
        </div>
    )
}

export default page