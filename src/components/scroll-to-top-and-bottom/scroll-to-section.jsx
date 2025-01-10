import { useRef } from "react";

export default function ScrollToSection() {
  const ref = useRef();

  const data = [
    {
      lable: "First Cart",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      lable: "Second Cart",
      style: {
        width: "100%",
        height: "600px",
        background: "gray",
      },
    },
    {
      lable: "Third Cart",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      lable: "Fourth Cart",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      lable: "Fifth Cart",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
  ];

  function handleScrollToSection() {
    let pos = ref.current.getBoundingClientRect().top;

    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <h1>Scroll to particular section</h1>
      <button onClick={handleScrollToSection}>Click to Scroll</button>
      {data.map((dataItem, index) => (
        <div ref={index === 3 ? ref : null} style={dataItem.style}>
          <h3>{dataItem.lable}</h3>
        </div>
      ))}
    </div>
  );
}
