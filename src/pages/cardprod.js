export default function CardProd(props) {
    return <>
        <div className="col text-center">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">{props.descricao}</p>
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary"> Lasy update 3 mins ago </small>
                </div>
            </div>
        </div>
    </>
}