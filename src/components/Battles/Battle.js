import { useParams } from 'react-router-dom'
import BattleCard from '../BattleCard'

function Battle() {
    const params = useParams().params

    let list = []
    const fullName = params.split('-').join(' - ')
    const name = params.split('-')[1]
    if (name === 'Font') {
        list = [
            "01 Tanzania",
            "02 Kuwait",
            "03 Iceland",
            "04 Bahrain",
            "05 Brazil",
            "06 India",
            "07 South Korea",
            "08 Guernsey"
        ]
    }
    else if (name === 'Gradient') {
        list = [
            "01 Striped Triangle",
            "02 Icecream Sticks",
            "03 Triangle Hook",
            "04 Power Chip",
            "05 Modern Fence",
            "06 Abstract Firefly",
            "07 Galver",
            "08 Fountain"
        ]
    }
    else if (name === 'Opacity') {
        list = [
            "01 Look Away",
            "02 Tree",
            "03 Crystal",
            "04 Walls",
            "05 Antenna",
            "06 Lantern",
            "07 Triple Zero",
            "08 Steering Wheel"
        ]
    }
    else if (name === 'Animation') {
        list = [
            "01 Wolverine",
            "02 Deadpool",
            "03 Magnetos helmet",
            "04 Punisher",
            "05 Green Lantern logo",
            "06 Hulk fist",
            "07 Iron man",
            "08 Black widow logo"
        ]
    }

    return (
        <div className="App">
            <h1 className="title">{fullName}</h1>
            <div className="container">
                {list.map(item => (
                    <BattleCard name={fullName} item={item} />
                ))}
            </div>
        </div>
    );
}

export default Battle;
