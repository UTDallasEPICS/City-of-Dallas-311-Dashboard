class BarChart extends Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        let accessToRef = d3.select(this.myRef.current);
        accessToRef.style("background-color", green);

    }

    render()
    {
        return <>
        <div ref = {this.myRef} >Testing Refs</div>
        </>
    }
}
export default BarChart;