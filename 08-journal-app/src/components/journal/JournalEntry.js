import React from 'react';

export const JournalEntry = () => {
  return (
    <div className="journal__entry">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://as01.epimg.net/meristation/imagenes/2022/02/20/noticias/1645347632_156651_1645347771_noticia_normal.jpg)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo día</p>
        <p className="journal__entry-content">If it looks like chicken, tastes like chicken, and feels like chicken but Chuck Norris says its beef, then it’s beef.</p>
      </div>
      <div className="journal__entry-date-box">
          <span>Friday</span>
          <h4>03</h4>
        </div>
    </div>
  );
}
