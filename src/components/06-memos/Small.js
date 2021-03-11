import React, {memo} from 'react'

export const Small = memo(({value}) => {
    console.log("Me volví a mostar :(");
    return (
        <small>{value}</small>
    )
}
)