const Achievements = ({ achievements }) => {
    return (
        <section className="achievements">
            <div className="section-title">
                <h2>
                    proud of our
                    <span> biggest achievements</span>
                </h2>
            </div>
            <div className="achievements-list">

                { achievements &&
                    achievements.map((achievement) => (
                        <div className="achievement">

                            <div className="achievement-number">
                                { achievement.number }
                            </div>

                            <div className="achievement-name">
                                { achievement.name }
                            </div>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}

export default Achievements;