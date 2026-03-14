import { use } from "react";

export default function Advices({ advicePromise }) {
  const advices = use(advicePromise);
  console.log(advices);

  return (
    <>
      <p>{advices.slip.advice}</p>
    </>
  );
}
