import Positions from "./components/Positions";
import useFetch from "./hooks/useFetch";

const Careers = () => {
    const { data: positions, isPending, error } = useFetch("positions");

    return (
        <section className="careers">
            <div className="section-title">
                <h2>
                    join <span>vision</span>
                </h2>
            </div>


            <div className="container">
                <Positions positions={ positions } />
            </div>

        </section>
    )
}

export default Careers;