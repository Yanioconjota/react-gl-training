import React from "react";

const Hijo = React.memo(({ numero, incrementar }) => {
  console.log("  Me volví a generar :(  ");

  return (
    <div className="btn-group">
			<button
				className="btn btn-primary mr-3"
				onClick={() => incrementar(numero)}
			>
				{numero}
			</button>
		</div>
  );
});

export default Hijo;
