import { connect } from 'react-redux'
import Car from '../components/Car'

const mapStateToProps = (state) => {
    return {
        Total: state.cars
    }
}

export default connect(mapStateToProps)(Car)
