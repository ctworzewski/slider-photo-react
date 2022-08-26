const pictures = [
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/id/1000/200/300",
  "https://picsum.photos/id/1/200/300",
  "https://picsum.photos/id/10/200/300",
];

class App extends React.Component {
  state = {
    pictureIndex: 0,
  };

  changeNextImg = () => {
    const index = this.state.pictureIndex;
    const limit = pictures.length - 1;
    this.setState({
      pictureIndex: index < limit ? index + 1 : index,
    });
  };

  changePrevImg = () => {
    const index = this.state.pictureIndex;
    this.setState({
      pictureIndex: index > 0 ? index - 1 : index,
    });
  };
  render() {
    return (
      <>
        <h1>Slider</h1>
        <button onClick={this.changePrevImg}>Prev </button>
        <span>{this.state.pictureIndex + 1}</span>
        <button onClick={this.changeNextImg}>Next</button>
        <img src={pictures[this.state.pictureIndex]} alt="" />
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".root"));
