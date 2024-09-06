import { Link } from 'react-router-dom';

function SingleCategories(props) {
  console.log(props);
  const category = props.category;
  const imgStyle = {
    width: '100%',
    height: '30vh', 
    maxHeight: '250px', 
    objectFit: 'cover', 
  };

  return (
    <>
      <div className="col-12 col-md-3 mb-4">
        <div className="card bg-dark">
          <Link to={`/category/${category.title}/${category.id}`} >
            <img style={imgStyle} src={category.image} className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <Link to={`/category/${category.title}/${category.id}`}><h3 className="card-title">{category.title}</h3></Link>
          </div>
          <div className="card-footer">
            <div>
              Total Products: {category.total_products}
            </div>
            <div>
              Products Downloads: {category.total_downloads}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleCategories;
