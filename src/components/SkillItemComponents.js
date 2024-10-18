import React, { Component } from 'react';

import '../styles/SkillItem.css'; 

class SkillItem extends Component {
  render() {
    const { icon, title, content, progress } = this.props;

    return (
      <div className="col-12 col-md-4 mb-4 mt-5">
        <div className="card text-center shadow-sm border-0 rounded">
          <div className="card-body p-4">
            <div className="icon mb-3 text-primary">
              <i className={`bi-${icon} card-icon display-4 ICONSKILLSIZE`}></i>
            </div>
            <h5 className="card-title text-dark">{title}</h5>
            <p className="card-text text-muted ICONSKILLPARAPH" style={{"textAlign": "justify"}}>{content}</p>
            <div className="progress" style={{ height: '24px', borderRadius: '4px' }}>
              <div
                className="progress-bar progress-bar-striped bg-danger"
                role="progressbar"
                style={{ width: `${progress}%` }}
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <span className="sr-only">{progress}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillItem;
