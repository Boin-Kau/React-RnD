const SearchBarChild = ({title, hint}) => {
  return(
    <div className="searchBar_child_div">
      <div className="searchBar_subtitle">{title}</div>
      <div className="searchBar_hint">{hint}</div>
    </div>
  )
}

export default SearchBarChild;