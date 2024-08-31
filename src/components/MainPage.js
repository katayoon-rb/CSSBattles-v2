import Card from "./Card";

function MainPage() {
  return (
    <div className="App">
      <h1 className="title">CSS Battle</h1>
      <div className="container">
        <Card title="Daily Targets" />
        <Card title="Battles" />
      </div>
    </div>
  );
}

export default MainPage;
