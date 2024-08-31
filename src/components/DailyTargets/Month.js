import { useParams } from 'react-router-dom'
import CardImg from "../CardImg";

function Month() {
    const params = useParams().params.split('-')

    const [month, year] = params[0].split('20')
    function getMonthNum(monthName, yearNum) {
        return new Date(`${monthName} 1, 20${yearNum}`).getMonth() + 1;
    }
    const numDays = (y, m) => new Date(y, m, 0).getDate();
    let numOfDays = numDays(20 + year, getMonthNum(month, year))
    
    let CardList = [];
    for (let d = 0; d < numOfDays; d++) {
        let date = params[0].slice(0, 3) + (d + 1 < 10 ? `0${d + 1}`: d + 1)
        if (date === 'Nov05') {
            continue 
        }
        else {
            CardList.push(
                <CardImg
                    key={date}
                    day={parseInt(params[1]) + d}
                    month={params[0].slice(0, 3)}
                    date={date}
                    year={year}
                />
            );
        }
    }

    return (
        <div className="App">
            <h1 className="title">
                {params[0].split('20').join(' 20')} - CSS Battle
            </h1>
            <div className="container">
                {CardList}
            </div>
        </div>
    );
}

export default Month;
