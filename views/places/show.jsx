const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>)
    let rating = (
      <h3 className="inactive">
        Not yet rated
      </h3>
    )
    if (data.place.comments.length) {
      let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars
      }, 0)
      let averageRating = Math.round(sumRatings / data.place.comments.length)
      let stars = ''
      for (let i = 0; i < averageRating; i++) {
      stars += '★'
      }
      rating = (
        <h3>
          {stars} stars
        </h3>
      )
      comments = data.place.comments.map(c => {
        return (
          <div className="commentsR">
            <div className="border col-sm-4">
              <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h4>Rating: {c.stars}</h4>
              <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
              <input type="submit" className="btn btn-danger" value="Delete Comment" />
              </form>
            </div>
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
                    {rating}
                    <p className="card-text">{data.place.cuisines}</p>
                    <h2 className="card-title">Description</h2>
                    <p>{data.place.showEstablished()}</p>
                    <p>Serving {data.place.cuisines}</p>
                    <div className="btnED">
                      <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
                        Edit
                      </a>
                      <form action={`/places/${data.place.id}?_method=DELETE`} method="POST"> 
                        <button type="submit" className="btn btn-danger">
                          Delete
                        </button>
                      </form> 
            
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <hr />
                <h1>Comments</h1>
                {comments}
              </div>
              <div>
                <form method='POST' action={`/places/${data.place.id}/comment`}>
                  <h2>Got your own rant or rave</h2>
                
                  <div className="form-group">
                      <label htmlFor="content">Content</label>
                      <input className="form-control" id="content" name="content"/>
                  </div>
                  <div className="row">
                    <div className="form-group col-sm-4">
                        <label htmlFor="author">Author</label>
                        <input className="form-control" id="author" name="author"/>
                    </div>
                    <div className="form-group col-sm-4">
                        <label htmlFor="stars">Star Rating</label>
                        <input className="form-range" type="range" id="stars" name="stars" min="0" max="5"/>
                    </div>
                    <div className="form-group col-sm-4 checkb">
                        <label htmlFor="rant">Rant</label>
                        <input className="form-check-input" type="checkbox"  id="rant" name="rant"/>
                    </div>
                  </div>
                <input className="btn btn-primary" type="submit" defaultValue="Post Comment" />
                </form>
              </div>
            </div>
          </main>
        </Def>
    )
}

module.exports = show

