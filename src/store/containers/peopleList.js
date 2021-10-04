import { connect } from "react-redux"
import { compose } from 'redux'
import PeopleList from '../../components/PeopleList'
import { fetchFilm } from '../actions/film'
import { fetchPeople, updatePageList } from "../actions/people"
import { getListPeople, getCountPeople, getCurrentPage } from '../selectors/people'

const mapStateToProps = state => (
    {
        people: getListPeople(state),
        count: getCountPeople(state),
        currentPage: getCurrentPage(state)
    }
)

const mapDispatchToProps ={ 
    fetchFilm,
    fetchPeople,
    updatePageList
}

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(PeopleList)