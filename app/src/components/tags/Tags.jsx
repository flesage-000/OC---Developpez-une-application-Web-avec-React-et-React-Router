import './Tags.css';

function Tags({ tags }) {
  return (
  <div className="tags">
    { tags.map(tag => <button key={ tag } className="tag">{ tag }</button>) }
  </div>
  )
}

export default Tags;