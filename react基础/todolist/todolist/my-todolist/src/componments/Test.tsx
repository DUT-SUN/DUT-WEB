import React from "react";
// export interface items {
//   name: string;
//   price: string;
// }
export default class Test extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

componentDidMount() {
fetch("http://localhost:5050/list")
    .then((res) => res.json())
    .then(
        (result) => {
        this.setState({
            isLoaded: true,
            items: result,
        });
        },

        (error) => {
        this.setState({
            isLoaded: true,
            error,
        });
        }
    );
}

render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map((item:any) => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}
