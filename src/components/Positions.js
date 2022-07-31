const Positions = ({ positions }) => {
    return (
        <div className="positions">

            { positions && positions.map((position) => (
                <a href="#0" className="position" key={ position.id }>
                    <p className="remaining">
                        remaining { position.remaining }
                    </p>
                    <div className="icon">
                        <i class="fa-brands fa-react"></i>
                    </div>
                    <div className="position-title">
                        { position.name }
                    </div>

                    <p className="position-description">
                        { position.description }
                    </p>
                </a>
            )) }

        </div>
    )
}

export default Positions;