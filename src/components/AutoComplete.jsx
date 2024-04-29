const AutoComplete = ({ data, query, onChange }) => {
  const getLowerCase = (ele) => String(ele)?.toLowerCase();

  const getMatechedValue = (data, query) => {
    return data?.filter((ele) =>
      getLowerCase(ele)?.includes(getLowerCase(query))
    );
  };

  return (
    <div>
      <input value={query} onChange={onChange} />
      <ul>
        {query &&
          getMatechedValue(data, query)?.map((ele) => (
            <li key={ele}>{ele} </li>
          ))}
      </ul>
    </div>
  );
};

export default AutoComplete;
