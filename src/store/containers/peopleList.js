import { connect } from "react-redux"
import { compose } from 'redux'
import PeopleList from '../../components/PeopleList'
import { setSelectedFilm } from '../actions/film'
import { getListPeople, getCountPeople } from '../selectors/people'

const mapStateToProps = state => (
    {
        people: getListPeople(state),
        count: getCountPeople(state)
    }
)

const mapDispatchToProps ={ 
    setSelectedFilm
}

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(PeopleList)