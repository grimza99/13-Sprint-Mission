function PageCount({ onClick }) {
  return (
    <div>
      <button value="1" onClick={onClick}>
        1
      </button>
      <button value="2" onClick={onClick}>
        2
      </button>
      <button value="3" onClick={onClick}>
        3
      </button>
      <button value="4" onClick={onClick}>
        4
      </button>
      <button value="5" onClick={onClick}>
        5
      </button>
    </div>
  );
}
export default PageCount;
