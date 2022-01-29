import React from "react";

const Hijo = React.memo(({ numero, incrementar }) => {
  console.log("  Me volví a generar :(  ");

  return (
		<button
			className="btn btn-primary"
			onClick={() => incrementar(numero)}
		>
			{numero}
		</button>
  );
});

export default Hijo;
