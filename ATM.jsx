const ATMDeposit = ({ onChange, isDeposit }) => {
    const choice = ["Deposit", "Cash Back"];
    return (
      <label className="atm-container">
        <h3>{choice[Number(!isDeposit)]}</h3>
        <input type="number" onChange={onChange}></input>
        <input type="submit" value="Submit"></input>
      </label>
    );
  };
  
  const Account = () => {
    let deposit = 0;
    const [totalState, setTotalState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(true);
  
    const status = `Account Balance $ ${totalState} `;
  
    const handleChange = event => {
      deposit = Number(event.target.value);
    };
  
    const handleSubmit = event => {
      let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
      if (newTotal >= 0) {
        setTotalState(newTotal);
      } else {
        alert("Error: Insufficient funds!");
      }
      event.preventDefault();
    };
  
    return (
      <div className="bank-container">
        <form className="bank-form" onSubmit={handleSubmit}>
          <h1>Welcome to Bank XYZ</h1>
          <h2 id="total">{status}</h2>
          <div className="buttons">
            <button onClick={() => setIsDeposit(true)}>Deposit</button>
            <button onClick={() => setIsDeposit(false)}>Cash Back</button>
          </div>
          <ATMDeposit onChange={handleChange} isDeposit={isDeposit} />
        </form>
      </div>
    );
  };
  
  ReactDOM.render(<Account />, document.getElementById("root"));
  