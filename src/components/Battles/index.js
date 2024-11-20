import Card from "../Card";

function DailyTargets() {
    return (
        <div className="App">
            <h1 className="title">Battles - CSS Battle</h1>
            <div className="container">
                <Card title="Battle 29 - Font" />
                <Card title="Battle 30 - Gradient" />
                <Card title="Battle 31 - Opacity" />
                <Card title="Battle 32 - Animation" /> 
                <Card title="Battle 33 - Outline" /> 
            </div>
        </div>
    );
}

export default DailyTargets;
