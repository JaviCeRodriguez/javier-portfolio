import React from "react";
import Image from "next/image";

export default function Custom404() {
  return (
    <div>
      <h2>
        Upss...&nbsp;
        <h2>error 404</h2>
      </h2>
      <h4>Es probable que la página que buscas no exista.</h4>
      <h4>
        Tomate un&nbsp;
        <h4>mate</h4>
        &nbsp;y vuelve al inicio!
      </h4>
      <Image src="/mate.png" width="400px" height="400px" />
    </div>
  );
}
