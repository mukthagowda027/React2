<div className='container-fluid mt-3 gridview'>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4" style={{ marginRight: '-1px', marginLeft: '-1px' }}>
        {data &&
            data.map((el, index) => (
                <div key={index} className={`col mb-4 ${index > 3 ? 'col-lg-3' : ''}`}>
                    <div className="col border rounded mx-2 custom-div d-flex flex-column justify-content-center align-items-center" style={{ height: "140px", width: "100%" }}>
                        <img src={el.src} width="60px" height="60px" className='mb-2 rounded-circle' />
                        <h6>{el.username}</h6>
                        <p>{el.designation}</p>

                        <div className="dropdown" style={{ position: "absolute", top: "0", right: "10px" }}>
                            <button className="btn custom-dropdown-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon icon={faEllipsisV} />
                            </button>
                            <ul className="dropdown-menu dropdown-content" >
                                <li><a href="#" onClick={() => openEditModal(index)}><FontAwesomeIcon icon={faPen} />Edit</a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faTrashAlt} />Delete</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
    </div>
</div>
