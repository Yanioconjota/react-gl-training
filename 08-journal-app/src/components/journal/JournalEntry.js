import React from 'react';

export const JournalEntry = () => {
  return (
    <div className="journal__entry">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://static2.srcdn.com/wordpress/wp-content/uploads/2020/12/Cyberpunk-2077-Gang-Robot.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo día</p>
        <p className="journal__entry-content">If it looks like chicken, tastes like chicken, and feels like chicken but Chuck Norris says its beef, then it’s beef.</p>
      </div>
      <div className="journal__entry-date-box">
          <span>Monday</span>
          <h4>28</h4>
        </div>
    </div>
  );
}
