import {Link} from 'react-router-dom';

export default function ContentComponent({content_title, contents}) {
  return <div>
    <h2>
      <Link to="#" className="contents_link">
        <div className="contents_title">
          {content_title}
        </div>
      </Link>
    </h2>
    <div>

    </div>
  </div>
};