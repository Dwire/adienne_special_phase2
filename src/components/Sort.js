function Sort({ handleDescr, handleCategory }){
    return (
        <div>
            <button onClick={handleCategory}>Sort By Category</button>
            <br></br>
            <br></br>
            <button onClick={handleDescr}>Sort By Description</button>
        </div>
    )
}

export default Sort