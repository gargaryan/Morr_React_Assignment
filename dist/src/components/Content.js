import React from 'react';
import {Link} from 'react-router-dom';


export default function Content() {
    return (
        <div className="content">
            
          <Link  to='/series'><div className="cnt1">
                <h1>series</h1>
            </div>
            </Link>

          <Link to="/movies"><div className="cnt1">
                <h1>Movies</h1>
            </div>
            </Link>
            
        </div>
    )
}
