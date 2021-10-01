function Character({ item }) {
  return (
    <div className="w-44 flex flex-col m-5 mb-10">
      <h2 className="font-bold text-lg ml-3 mb-1">
        {item.name.substring(0, 16)}
      </h2>
      <img src={item.image} alt="img" className="rounded-md w-30" />
      <div className="font-bold bg-yellow-300 rounded-md mt-1">
        <h4 className="ml-2">Episodes: {item.episode.length}</h4>
        <h4 className="ml-2">Species: {item.species}</h4>
      </div>
    </div>
  );
}

export default Character;
