import { connect } from "react-redux"
import { compose } from 'redux'
import PeopleList from '../../components/PeopleList'
import { setSelected } from '../actions/people'
import { getListPeople, getSelectedPeople, getCountPeople } from '../selectors/people'

const mapStateToProps = state => (
    {
        people: getListPeople(state),
        selected: getSelectedPeople(state),
        count: getCountPeople(state)
    }
)

const mapDispatchToProps ={ 
    setSelected
}

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(PeopleList)