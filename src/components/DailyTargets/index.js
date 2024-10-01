import Card from "../Card";

function DailyTargets() {
    const months = ['October 2023', 'November 2023', 'December 2023',
                    'January 2024', 'February 2024', 'March 2024', 'April 2024',
                    'May 2024', 'June 2024', 'July 2024', 'August 2024', 'September 2024',
                   'October 2024']
    const days = ['24', '54', '84', '115', '146', '175', '206', '236', '267', '297', '328', '359', '389']
    months.reverse()
    days.reverse()

    return (
        <div className="App">
            <h1 className="title">CSS Battle</h1>
            <div className="container">
                {months.map(month => (
                    <Card
                        key={month.split(' ').join('')}
                        title={month}
                        link={month.split(' ').join('') + '-' + days[months.indexOf(month)]}
                    />
                ))}
            </div>
        </div>
    );
}

export default DailyTargets;
