import { connect } from "react-redux"
import { compose } from 'redux'
import MainScreen from '../../screens/Main'
import { fetchPeople } from '../actions/people'
import { getListPeople, getErrorPeople } from '../selectors/people'

const mapStateToProps = state => (
    {
        people: getListPeople(state),
        error: getErrorPeople(state),
    }
)

const mapDispatchToProps ={ 
    fetchPeople
}

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(MainScreen)