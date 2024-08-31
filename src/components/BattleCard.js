function BattleCard({name, item}) {
    const linkStarter = `/${name}/${item}`

    return (
        <div class="project">
            <div class="line">
                <h2>{item}</h2>
                <a href={`${linkStarter}/index.html`}>
                    <button type="button">Go to Site</button>
                </a>
            </div>
            <img src={`${linkStarter}/screen.jpg`} alt={item} />
        </div>
    )
};

export default BattleCard;