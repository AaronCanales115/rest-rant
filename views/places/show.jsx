const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>)
    if (data.place.comments.length) {
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      })
    }
    return (
        <Def>
          <main>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={data.place.pic} className="img-fluid rounded-start" alt={data.place.name}></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h1 className="card-title">{data.place.name}</h1>
                    <p className="card-text">Located in {data.place.city}, {data.place.state} and serving delicious food</p>
                    <h2 className="card-title">Rating</h2>
                    <p className="card-text">Not Rated</p>
                    <p className="card-text">{data.place.cuisines}</p>
                    <h2 className="card-title">Description</h2>
                    <p>{data.place.showEstablished()}</p>
                    <p>Serving {data.place.cuisines}</p>
                    
                  </div>
                </div>
              </div>
              <div>
                <hr />
                <h1>Comments</h1>
                {comments}
              </div>
            </div>
            <div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
              Edit
            </a>   
            <form action={`/places/${data.id}?_method=DELETE`} method="POST"> 
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form> 
   
            </div>
          </main>
        </Def>
    )
}

module.exports = show

