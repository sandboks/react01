function ListItem(props) {
    return <li>{props.animal}</li>
  }
  
  function List(props) {
    return (
      <ul>
        {props.animals.map((animal) => {
          return <ListItem key={animal} animal={animal} />;
        })}
      </ul>
    );
  }

function Greeting() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];

    return (
        <>
            <h1>&quot;I swear by my pretty floral bonnet, I will end you.&quot;</h1>
            <h1>&quot;I swear by my pretty floral bonnet, I will end you.&quot;</h1>

            <h1>Test title</h1>
            <svg>
            <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
            </svg>
            <form>
            <input type="text"></input>
            </form>

            <div>
                <h1>Animals: </h1>
                <ul>
                    {animals.map((animal) => {
                    return <li key={animal}>{animal}</li>;
                    })}
                </ul>
            </div>

            <div>
                <h1>Animals: </h1>
                <List animals={animals} />
            </div>

        </>
    )
  }
  
  export default Greeting;
  