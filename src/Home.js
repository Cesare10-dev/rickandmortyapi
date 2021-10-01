import { useState } from "react";
import Character from "./Character";

function Home({ species, getQuery }) {
  const [input, setInput] = useState("");

  const onChange = (q) => {
    setInput(q);
    getQuery(q);
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-evenly w-full h-40 bg-green-400">
        <h2 className="text-2xl font-bold">Search the Character</h2>
        <form>
          <input
            className="px-4 py-2 rounded-md font-bold border-2 outline-none border-yellow-400"
            type="text"
            placeholder="Insert the name"
            autoFocus
            value={input}
            onChange={(e) => onChange(e.target.value)}
          />
          <button
            disabled={!input}
            type="submit"
            onClick={(e) => e.preventDefault()}
          ></button>
        </form>
      </div>

      <div className="flex w-full flex-wrap m-auto justify-center mt-10">
        {species.map((item, index) => (
          <Character key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;

// const Container = styled.div`
//   color: black;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const Search = styled.div`
//   height: 200px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   & > h2 {
//     font-size: 40px;
//     color: whitesmoke;
//     margin: 20px auto 0;
//   }

//   & > form {
//     width: 100%;
//     height: 100px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin: 10px auto;

//     & > input {
//       margin-top: 20px;
//       width: 80%;
//       height: 40px;
//       border-radius: 10px;
//       font-size: 16px;
//       font-weight: 700;
//     }
//   }
// `;

// const Boxes = styled.div`
//   height: 100%;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
//   background-color: black;
// `;
