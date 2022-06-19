import React from "react";
export const View = React.forwardRef(({indeterminate, ...rest},ref)=>{
    const defaultRef= React.useRef()
    const resolvedRef = ref||defaultRef
    React.useEffect(()=>{
        resolvedRef.current.indeterminate=indeterminate
    },[resolvedRef,indeterminate])
    return(
        <>
        <button ref={resolvedRef}{...rest}>View</button>
        </>
    )
})