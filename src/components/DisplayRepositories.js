import React from 'react';
import RemoveStar from "./RemoveStar";
import AddStar from "./AddStar";
import '../styles/display-repos.css'

function DisplayRepositories({ current, data, refetch, handleMore }) {
    return (
      <div className="Repos">
        <h2>First {current} repositories</h2>
        <div className="RepoList">
        {data.viewer.repositories.edges.map(({ node }) => (
          <ul className="list" key={node.name}>
            <li className="star">stars {node.stargazers.totalCount}</li>
            <li className="repoName">
              {node.name}
            </li>
            <li className="repoActionButton">
              {
                node.viewerHasStarred
                  ? ( <RemoveStar id={node.id} refetch={refetch}/> )
                  : ( <AddStar id={node.id} refetch={refetch}/> )
              }
            </li>

          </ul>
        ))}
        </div>
        <button className="LoadMore" onClick={handleMore}>Load More</button>
      </div>
    );
}

export default DisplayRepositories;
