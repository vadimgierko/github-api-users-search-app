function Bio(props) {
    return (
        <div className="col-md-4">
            <div className="card mb-3">
                <div className="card-header">
                    <h3 className="text-center">{props.userName}</h3>         
                </div>
                <img className="card-img-top" src={props.avatarSrc} />
                <div className="card-body">
                    <p className="text-primary"><strong>Location:</strong> {props.location}</p>
                    <p className="text-primary"><strong>Public repositories:</strong> {props.reposNum}</p>
                </div>
                <div className="card-footer">
                    <p><strong>Bio:</strong> {props.bio}</p>
                </div>
            </div>
        </div>
    );
}