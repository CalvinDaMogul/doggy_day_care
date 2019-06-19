import './goat.scss',

class Dog extends React.Component {
    static propTypes = {
        dog: dogShape.dogShape,
    }

    render() {
        const { dog } = this.props;
        return (
            <div className="Dog col-3">
                <div className="card">
                <img src={dog.imageUrl} className="card-img-top" alt=""/>
                    <h5 className="card-title">{dog.name}</h5>
                    <p className="card-text">{dog.color}</p>
                    </div>
                    </div>
        )
    }
}


export default Dog;