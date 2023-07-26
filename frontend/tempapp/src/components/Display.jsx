

const Display = ({ temp }) => {
    return (
      <div className="card">
        {temp.error ? <p>{temp.error}</p> : <>
            <h1>City: {temp.city}</h1>
            <h1>Temperature: {temp.temperature}</h1>
            <h1>Timestamp: {temp.timeStamp.toLocaleString()}</h1>
        </>}
            
      </div>
    );
  };

export default Display