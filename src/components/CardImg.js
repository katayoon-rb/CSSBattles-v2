function CardImg({day, month, date, year, end = 32, start = 1 }) {
    for (let i = start; i < end; i++) {
        day = day < 10 ? `0${day}` : day
        const linkStarter = `/DailyBattles/${month}20${year}/${day} ${date}`

        return (
            <div class="project">
                <div class="line">
                    <h2>{date}</h2>
                    <a href={`${linkStarter}/index.html`}>
                        <button type="button">Go to Site</button>
                    </a>
                </div>
                <img src={`${linkStarter}/screen.jpg`} alt={date} />
            </div>
        )
    }
}

export default CardImg;